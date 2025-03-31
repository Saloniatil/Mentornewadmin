/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import SidebarNav from "../sidebar";
import { FaEdit, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "react-bootstrap";
import { subadmin } from "../../../utils/validationSchema";
import axios from 'axios'
import { API_BASE_URL } from "../../../Helper/apicall";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const CreateSubadmin = ({ staffId, closeModal }) => {
    const setFieldValueRef = useRef(null); // Ref to store setFieldValue
    const [image, setImage] = useState('/assets/img/dummy.png');
    const [showPassword, setShowPassword] = useState(false);
    const [staffData, setStaffData] = useState(null);
    const navigate = useNavigate();

    const [staff, setStaff] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });


    const modules = [
        "Dashboard",
        "Mentor",
        "Mentee",
        "Booking List",
        "Mentorship Categories",
        "Transactions",
        "Dispute Management",
        "Mentorship Goals",
        "Blogs",
        "Settings",
        "Help-&-support"
    ];

    const initialPermissions = {
        Dashboard: { view: true, edit: false, delete: false, create: false },
        Mentor: { view: true, edit: false, delete: true, create: false },
        Mentee: { view: true, edit: false, delete: true, create: false },
        "Booking List": { view: true, edit: false, delete: false, create: false },
        "Mentorship Categories": { view: true, edit: true, delete: true, create: true },
        "Transactions": { view: true, edit: false, delete: false, create: false },
        "Dispute Management": { view: false, edit: false, delete: true, create: false },
        // "Bundles": { view: false, edit: false, delete: false, create: false },
        "Mentorship Goals": { view: true, edit: true, delete: true, create: true },
        "Blogs": { view: true, edit: true, delete: true, create: true },
        "Settings": { view: false, edit: false, delete: false, create: false },
        "Help-&-support": { view: true, edit: true, delete: true, create: false },
    };
    const [selectedPermissions, setSelectedPermissions] = useState(initialPermissions);

    const handleCheckboxChange = (module, action) => {
        setSelectedPermissions((prev) => {
            // Ensure the module exists in the state
            const modulePermissions = prev[module] || { view: false, edit: false, delete: false, create: false };
            return {
                ...prev,
                [module]: {
                    ...modulePermissions,
                    [action]: !modulePermissions[action], // Toggle the action
                },
            };
        });
    };

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        permissions: {},
        accountStatus: "active",
    };
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            // Retrieve token from localStorage
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Authentication token is missing. Please log in again.");
                return;
            }

            // Construct FormData object
            const formData = new FormData();
            formData.append("firstName", values.firstName);
            formData.append("lastName", values.lastName);
            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("status", values.accountStatus === "Active" ? "1" : "0");

            // Add role permissions dynamically
            let index = 0;
            for (const module in values.permissions) {
                if (values.permissions.hasOwnProperty(module)) {
                    const perms = values.permissions[module];

                    formData.append(`rolePermission[${index}][moduleName]`, module);
                    formData.append(`rolePermission[${index}][isRead]`, perms.view ? "1" : "0");
                    formData.append(`rolePermission[${index}][isAdd]`, perms.create ? "1" : "0");
                    formData.append(`rolePermission[${index}][isUpdate]`, perms.edit ? "1" : "0");
                    formData.append(`rolePermission[${index}][isDelete]`, perms.delete ? "1" : "0");

                    index++;
                }
            }

            // Add profile image if exists
            if (values.profile_image) {
                formData.append("profileImage", values.profile_image); // Adjusted key name
            }

            // Log request data for debugging
            console.log("Submitting FormData:");
            for (const pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }

            // Send POST request using Axios
            const response = await axios.post(
                `${API_BASE_URL}/api/admin/createStaff`, // Ensure API_BASE_URL is correctly set
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Handle successful response
            console.log("Success:", response.data);
            if (response.data.status === 200) {
                // resetForm();
                // setEditorData("");
                // setPreview(null);
                navigate("/admin/subadmin/list");
                setTimeout(() => {
                    toast.success("Subadmin created successfully!"); // Show toast after navigation
                }, 500); // Delay ensures the page loads before showing toast
            }
            toast.success("Subadmin created successfully!");

            // Reset form and image preview
            resetForm();
            setImage("/assets/img/dummy.png");

        } catch (error) {
            // Handle errors and log response details
            console.error("Error:", error.response?.data || error.message);
            alert("Error creating subadmin. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    // **Handle Profile Image Upload**
    const handleImageChange = (event, setFieldValue) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Set preview image
            setFieldValue("profile_image", file); // Store file in Formik state
        }
    };



    /// Get view by Id 
    // Fetch staff data by ID when modal opens
    useEffect(() => {
        if (staffId) {
          axios.get(`${API_BASE_URL}/api/admin/staffDetail/${staffId}`) // Replace with your actual API endpoint
            .then(response => {
              const data = response.data;
              setStaffData(data);
              setImage(data.profile_image); // Assuming `profile_image` contains the image URL
            })
            .catch(error => console.error("Error fetching staff details:", error));
        }
      }, [staffId]);

    return (
        <>
            <SidebarNav />
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12 d-flex gap-3">
                                <button className="btn btn-primary"><FaArrowLeftLong /></button>
                                <h3 className="page-title">Add Subadmin</h3>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    {/* Add details */}
                                    <div className="row">
                                        <div className='col-md-12 text-center'>
                                            {/* <div className="form-group ">
                                                <label>Profile Photo</label> <br />
                                                <div className="profile-containers">
                                                    <img src={image} alt="Profile" className="profile-images" />
                                                    <label htmlFor="profile_image" className="edit-icons">
                                                        <FaEdit />
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="profile_image"
                                                        name="profile_image"
                                                        accept="image/*"
                                                        onChange={(e) => handleImageChange(e, setFieldValue)}
                                                        style={{ display: "none" }}
                                                    />

                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="col-12 blog-details">
                                            <Formik initialValues={initialValues} validationSchema={subadmin} onSubmit={handleSubmit}>
                                                {({ values, setFieldValue, handleSubmit, handleChange }) => (
                                                    <Form onSubmit={handleSubmit}>
                                                        <div className="row">
                                                            <div className='col-md-6'>
                                                                <div className="form-group">
                                                                    <label>First Name</label>
                                                                    <Field className="form-control" type="text" name="firstName" value={staff.firstName} />
                                                                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className="form-group">
                                                                    <label>Last Name</label>
                                                                    <Field className="form-control" type="text" name="lastName" value={staff.lastName} />
                                                                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <Field className="form-control" type="email" name="email" value={staff.email} />
                                                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                                                </div>
                                                            </div>

                                                            <div className='col-md-6'>
                                                                <label>Password</label>
                                                                <div className="position-relative">
                                                                    <Field
                                                                        className="form-control password-input"
                                                                        type={showPassword ? "text" : "password"}
                                                                        name="password"
                                                                        value={value.password}
                                                                    />
                                                                    <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                                    </span>
                                                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Roles & Permission</label>
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Module</th>
                                                                        <th>View</th>
                                                                        <th>Edit</th>
                                                                        <th>Delete</th>
                                                                        <th>Create</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {modules.map((module) => (
                                                                        <tr key={module}>
                                                                            <td>{module}</td>
                                                                            {['view', 'edit', 'delete', 'create'].map((perm) => (
                                                                                <td key={perm}>
                                                                                    <Field
                                                                                        type="checkbox"
                                                                                        name={`permissions.${module}.${perm}`}
                                                                                        checked={values.permissions[module]?.[perm] || false}
                                                                                        onChange={() =>
                                                                                            setFieldValue(
                                                                                                `permissions.${module}.${perm}`,
                                                                                                !values.permissions[module]?.[perm]
                                                                                            )
                                                                                        }
                                                                                    />
                                                                                </td>
                                                                            ))}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className="form-group">
                                                                <label>Account Status</label>
                                                                <div>
                                                                    <select
                                                                        className="form-select"
                                                                        name="accountStatus"  // Corrected name
                                                                        value={values.accountStatus}
                                                                        onChange={handleChange}
                                                                    >
                                                                        <option value="">Status</option>
                                                                        <option value="Active">Active</option>
                                                                        <option value="Inactive">Inactive</option>
                                                                    </select>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group ">
                                                            <label>Profile Photo</label> <br />
                                                            <div className="profile-containers">
                                                                <img src={image} alt="Profile" className="profile-images" />
                                                                <label htmlFor="profile_image" className="edit-icons">
                                                                    <FaEdit />
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    id="profile_image"
                                                                    name="profile_image"
                                                                    accept="image/*"
                                                                    onChange={(e) => handleImageChange(e, setImage)}
                                                                    style={{ display: "none" }}
                                                                />

                                                            </div>
                                                        </div>

                                                        <div className="m-t-20 text-center">
                                                            <button className="btn btn-primary btn-lg" type="submit">
                                                                Create
                                                            </button>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                    </div>
                                    {/* /Add details */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
};

export default CreateSubadmin;
