import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarNav from "../sidebar ";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ErrorMessage, Field, Formik } from "formik";
import { BlogSchma } from "../../../utils/validationSchema";
import { Form } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { API_BASE_URL } from "../../../Helper/apicall";
import { Spinner } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";


const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isEditMode = location.pathname === "/admin/edit-blog";
  const [editorData, setEditorData] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    blogName: "",
    blogCategory: "",
    blogStatus: "inactive",
    blogImage: "",
  });
  const [preview, setPreview] = useState(null);
  const [blogId, setBlogId] = useState(null);
  const [userData, setUserData] = useState({});
  // const response = await axios.get(`${API_BASE_URL}/api/admin/deleteBlogDetail/${id}`);
  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (!id) return;  // Use `id` from `useParams`

      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/blogDetail/${id}`);
        if (response.data.status === 200) {
          const { name, category, status, description, image } = response.data.data;

          setInitialValues({
            blogName: name || "",
            blogCategory: category || "",
            blogStatus: status === "1" ? "active" : "inactive",
            blogImage: image || "",
          });

          setEditorData(description || "");
          setPreview(image || "");
        }
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);  // Depend on `id`

  // Handle File Change
  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("blogImage", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle Delete Image
  const handleDelete = (e, setFieldValue) => {
    setFieldValue("blogImage", '');
    setPreview(null);
    document.getElementById("file-upload").value = "";
  };

  // Handle Create Blog
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", values.blogName);
      formData.append("category", values.blogCategory);
      formData.append("status", values.blogStatus === "active" ? "1" : "0");
      formData.append("description", editorData);
      formData.append("createdBy", "1");
      if (values.blogImage) {
        formData.append("image", values.blogImage);
      }

      const response = await axios.post(`${API_BASE_URL}/api/admin/createBlog`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === 200) {
        toast.success("Blog created successfully!", { position: "top-right" });
        resetForm();
        setEditorData("");
        setPreview(null);
        navigate("/admin/blogs");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      toast.error("Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Edit Blog
  const handleUpdate = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", values.blogName);
      formData.append("category", values.blogCategory);
      formData.append("status", values.blogStatus === "active" ? "1" : "0");
      formData.append("description", editorData);
      if (values.blogImage && typeof values.blogImage !== "string") {
        formData.append("image", values.blogImage);
      }

      const response = await axios.put(`${API_BASE_URL}/api/admin/updateBlog/${blogId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.status === 200) {
        toast.success("Blog updated successfully!", { position: "top-right" });
        resetForm();
        setEditorData("");
        setPreview(null);
        navigate("/admin/blogs");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Failed to update blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">{isEditMode ? "Edit Blog" : "Add Blog"}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  {/* <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    validationSchema={BlogSchma}
                    onSubmit={isEditMode ? handleUpdate : handleSubmit}
                  >
                    {({values, handleChange }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Blog Name *</label>
                          <Field className="form-control" type="text" name="blogName" />
                          <ErrorMessage name="blogName" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Blog Image *</label>
                          <div className="custom-file-upload">
                            <label htmlFor="file-upload">
                              <IoCloudUploadOutline className="upload-icon" fontSize={"30px"} />
                            </label>
                            <input
                              type="file"
                              id="file-upload"
                              accept="image/*"
                              onChange={(event) => handleFileChange(event, setFieldValue)}
                            />
                          </div>
                          {preview && (
                            <div className="image-preview-container">
                              <img src={preview} alt="Preview" className="image-preview" />
                              <button className="delete-btn" onClick={(e) => handleDelete(e, setFieldValue)}>
                                <MdClose fontSize={"20px"} />
                              </button>
                            </div>
                          )}
                          <ErrorMessage name="blogImage" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Blog Category *</label>
                          <Field as="select" className="form-control" name="blogCategory">
                            <option value="">Select Category</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                          </Field>
                          <ErrorMessage name="blogCategory" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                          <label>Blog Description *</label>
                          <CKEditor
                            editor={ClassicEditor}
                            data={editorData}
                            onChange={(event, editor) => setEditorData(editor.getData())}
                          />
                        </div>
                        <div className="m-t-20 text-center">
                          <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : isEditMode ? "Update Blog" : "Create Blog"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik> */}
                  <Formik
                    initialValues={initialValues}
                    enableReinitialize={true} // ✅ Ensures Formik updates when initialValues change
                    validationSchema={BlogSchma}
                    onSubmit={isEditMode ? handleUpdate : handleSubmit}
                  >
                    {({ values, handleChange, setFieldValue }) => (
                      <Form>
                        <div className="form-group">
                          <label>Blog Name *</label>
                          <Field className="form-control" type="text" name="blogName" />
                          <ErrorMessage name="blogName" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                          <label>Blog Category *</label>
                          <Field as="select" className="form-control" name="blogCategory">
                            <option value="">Select Category</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                          </Field>
                          <ErrorMessage name="blogCategory" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                          <label>Blog Description *</label>
                          <CKEditor
                            editor={ClassicEditor}
                            data={editorData}
                            onChange={(event, editor) => setEditorData(editor.getData())}
                          />
                        </div>

                        <div className="m-t-20 text-center">
                          <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : isEditMode ? "Update Blog" : "Create Blog"}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
