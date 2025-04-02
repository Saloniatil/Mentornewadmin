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
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";


const CreateSubadmin = () => {
 
const location = useLocation();
const { staffId } = location.state || {};
const [adminData, setAdminData] = useState({});
const setFieldValueRef = useRef(null); // Ref to store setFieldValue
const [image, setImage] = useState('/assets/img/dummy.png');
const [showPassword, setShowPassword] = useState(false);
const [staffData, setStaffData] = useState(null);
const navigate = useNavigate();
const { id } = useParams();
const isEditMode = location.pathname === `/admin/subadmin/edit/${staffId}`;
const token = localStorage.getItem("token");

const [staff, setStaff] = useState({
    firstName: "",
    lastName: "",
    email: "",
});

const modules = [
    "Dashboard", "Mentor", "Mentee", "Booking List", "Mentorship Categories",
    "Transactions", "Dispute Management", "Mentorship Goals", "Blogs", "Settings", "Help-&-support"
];

const initialPermissions = {
    Dashboard: { view: true, edit: false, delete: false, create: false },
    Mentor: { view: true, edit: false, delete: true, create: false },
    Mentee: { view: true, edit: false, delete: true, create: false },
    "Booking List": { view: true, edit: false, delete: false, create: false },
    "Mentorship Categories": { view: true, edit: true, delete: true, create: true },
    "Transactions": { view: true, edit: false, delete: false, create: false },
    "Dispute Management": { view: false, edit: false, delete: true, create: false },
    "Mentorship Goals": { view: true, edit: true, delete: true, create: true },
    "Blogs": { view: true, edit: true, delete: true, create: true },
    "Settings": { view: false, edit: false, delete: false, create: false },
    "Help-&-support": { view: true, edit: true, delete: true, create: false },
};

const [selectedPermissions, setSelectedPermissions] = useState(initialPermissions);

const handleCheckboxChange = (module, action) => {
    setSelectedPermissions((prev) => {
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

// Handle submit logic for both create and update
const handleSubmit = async (values) => {
    try {
        // Convert permissions from booleans to 1/0
        const convertedPermissions = Object.keys(values.permissions).reduce((acc, module) => {
            acc[module] = Object.keys(values.permissions[module]).reduce((innerAcc, perm) => {
                innerAcc[perm] = values.permissions[module][perm] ? 1 : 0;
                return innerAcc;
            }, {});
            return acc;
        }, {});

        // Prepare data to send to API
        const dataToSend = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            isVerified: 1,
            isDeleted: 0,
            permissions: convertedPermissions,
            status: values.accountStatus === 'active' ? 1 : 0,
        };
        
        let response;
        const url = isEditMode
            ? `${API_BASE_URL}/subadmins/${staffId}`  // For update, use the staffId
            : `${API_BASE_URL}/subadmins`;           // For create, no ID required
        const method = isEditMode ? 'PUT' : 'POST';  // Use PUT for update, POST for create

        // If there is an image, append it to the form data
        if (values.profile_image) {
            const formData = new FormData();
            formData.append('firstName', values.firstName);
            formData.append('lastName', values.lastName);
            formData.append('email', values.email);
            formData.append('password', values.password);
            formData.append('isVerified', 1);
            formData.append('isDeleted', 0);
            formData.append('status', values.accountStatus === 'active' ? 1 : 0);
            formData.append('profile_image', values.profile_image);  // Append image file

            // Permissions
            Object.keys(values.permissions).forEach((module) => {
                Object.keys(values.permissions[module]).forEach((perm) => {
                    formData.append(`permissions[${module}][${perm}]`, values.permissions[module][perm] ? 1 : 0);
                });
            });

            // API call with FormData (for file upload)
            response = await axios({
                method: method,
                url: url,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
        } else {
            // API call without file
            response = await axios({
                method: method,
                url: url,
                data: dataToSend,
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
        }

        if (response.status === 200) {
            toast.success(isEditMode ? "Subadmin updated successfully!" : "Subadmin created successfully!");
            navigate("/admin/subadmin");  // Redirect after success
        }
    } catch (error) {
        console.error("Error creating/updating subadmin:", error);
        toast.error("Error creating/updating subadmin.");
    }
};

useEffect(() => {
    // Fetch the subadmin data for edit mode if staffId is provided
    if (isEditMode && staffId) {
        axios.get(`${API_BASE_URL}/subadmins/${staffId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            const data = response.data.data;
            setStaffData(data);
            setImage(data.profileImage || '/assets/img/dummy.png');
        })
        .catch(error => {
            console.error("Error fetching subadmin data:", error);
            toast.error("Error fetching subadmin data.");
        });
    }
}, [staffId, isEditMode, token]);

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
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={subadmin}
                                            onSubmit={handleSubmit}
                                            enableReinitialize={true} // Ensures reinitialization when data updates
                                        >
                                            {({ values, setFieldValue, handleSubmit, handleChange }) => {
                                               // setFieldValueRef.current = setFieldValue; // Store reference to `setFieldValue`
                                                return (
                                                    <Form onSubmit={handleSubmit}>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>First Name</label>
                                                                    <Field className="form-control" type="text" name="firstName" />
                                                                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Last Name</label>
                                                                    <Field className="form-control" type="text" name="lastName" />
                                                                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Email</label>
                                                                    <Field className="form-control" type="email" name="email" />
                                                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <label>Password</label>
                                                                <div className="position-relative">
                                                                    <Field
                                                                        className="form-control password-input"
                                                                        type={showPassword ? "text" : "password"}
                                                                        name="password"
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
                                                                            {["view", "edit", "delete", "create"].map((perm) => (
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
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Account Status</label>
                                                                <select className="form-select" name="accountStatus" value={values.accountStatus} onChange={handleChange}>
                                                                    <option value="">Status</option>
                                                                    <option value="Active">Active</option>
                                                                    <option value="Inactive">Inactive</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Profile Photo</label>
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
                                                                    onChange={(e) => handleChange(e, setFieldValue)}
                                                                    style={{ display: "none" }}
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="m-t-20 text-center">
                                                            <button className="btn btn-primary btn-lg" type="submit">
                                                                {isEditMode ? "Update" : "Create"}
                                                            </button>
                                                        </div>
                                                    </Form>
                                                );
                                            }}
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
