import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import SidebarNav from "../sidebar";
import Pagination from "../Pagination/Pagination";
import { API_BASE_URL } from "../../../Helper/apicall";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const CategoryList = () => {
   const [categories, setCategories] = useState([]);
   const [curruentPage, setCurrentPage] = useState(1);
   const [totalPage, setTotalPages] = useState(1);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

    const fetchData = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found. Redirecting to login.");
            navigate("/login"); // Redirect if token is missing
            return;
        }
        try {
            const response = await axios.get(`${API_BASE_URL}/api/admin/getMenteeCategories?limit=${limit}&page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });
            console.log("Response Data:", response.data.pagination.currentPage); // Debugging
     
            if (response.data.status === 200) {
                setCategories(response.data.data ); // Ensure categories is an array
                setCurrentPage(response.data.pagination.currentPage);
                setTotalPages(response.data.pagination.totalPages);
                console.log("Data fetched successfully:", response.data.data);
            } else {
                console.error("Error fetching data:", response.data.message);
            }
        } catch (error) {
            console.error("API Error:", error);
            if (error.response) {
                console.error("Response Status:", error.response.status);
                console.error("Response Data:", error.response.data);
            }
            if (error.response?.status === 401) {
                console.error("Unauthorized access. Redirecting to login.");
                navigate("/login"); // Redirect to login if unauthorized
            }
        }
    };
    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, [page]);

    ///delete 
    // Function to handle category deletion
    const handleDelete = async (id) => {
        const result = await Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            });
        console.log("handleDelete called with categoryId:", id);
        if (!id) {
            console.error("Invalid category ID");
            return;
        }
        try {
            const response = await axios.get(`${API_BASE_URL}/api/admin/deleteMenteeCategory/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("Delete API response:", response);
            if (response.data.status === 200) {
                setCategories(categories.filter(category => category.id !== id));
                toast.success("Category deleted successfully!", { position: "top-right" });
            }
        } catch (error) {
            console.error("Error deleting category:", error);
            toast.error("Failed to delete category.", { position: "top-right" });
        }
    };
    return (
        <>
            <SidebarNav />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-10">
                                <h3 className="page-title">Mentorship Categories</h3>
                            </div>
                            <div className="col-sm-2 text-end">
                                <Link to="/admin/add-category">
                                    <button className="btn btn-primary btn-lg">Create Category</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive custom-table">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th>Created At</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {categories?.length > 0 ? (
                                                    categories.map((category) => (
                                                        <tr key={category.id}>
                                                            <td>{category.categoryName || "No Name"}</td>
                                                            <td>{category.status === 1 ? "Published" : "Draft"}</td>
                                                            <td>{category.createdAt ? new Date(category.createdAt).toLocaleDateString() : "N/A"}</td>
                                                            <td>
                                                                <div className="d-flex action-buttons">
                                                                    <Link to={`/admin/edit-category/${category.id}`} className="me-2">
                                                                        <MdEdit fontSize={"18px"} />
                                                                    </Link>
                                                                    <MdDelete
                                                                        onClick={() => handleDelete(category.id)}
                                                                        className="text-danger delete-icon"
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="text-center">No categories found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Custom Pagination Component Placeholder */}
                                    <div className="d-flex justify-content-end mt-3">
                                        <Pagination
                                            current={curruentPage}
                                            total={totalPage}
                                            pagination={(page) => { setPage(page) }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryList;
