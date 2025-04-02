// import React, { useState, useEffect } from "react";
// import { logo1 } from "../imagepath";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import { API_BASE_URL } from "../../../Helper/apicall";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const ResetPassword = () => {
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     // const [resetToken, setResetToken] = useState(null);
//     const navigate = useNavigate();
//     const location = useLocation(); 
//     const [resetToken, setResetToken] = useState("");

//     useEffect(() => {
//         // Extract token from URL query params
//         const params = new URLSearchParams(location.search);
//         const tokenFromUrl = params.get("token");
//         console.log("tokenurl:", tokenFromUrl)

//         if (!tokenFromUrl) {
//             toast.error("Reset token is missing! Redirecting to login...", { position: "top-right" });
//             navigate("/login"); // Redirect to login if token is missing
//         } else {
//             setResetToken(tokenFromUrl); // Set the token in state
//         }
//     }, [location, navigate]);

 
//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         if (!resetToken) {
//             toast.error("Reset token is missing!", { position: "top-right" });
//             return;
//         }
    
//         if (newPassword !== confirmPassword) {
//             toast.error("Passwords do not match!", { position: "top-right" });
//             return;
//         }
    
//         console.log("Sending API Request with:", { token: resetToken, newPassword });
    
//         try {
//             const response = await axios.post(
//                 `${API_BASE_URL}/api/admin/resetPasswordAdmin`,
//                 { token: resetToken, newPassword: newPassword }, // Ensure token is included
//                 { headers: { "Content-Type": "application/json" } }
//             );
    
//             if (response.status === 200) {
//                 const resetToken = response.data.data.resetPasswordToken;
//                 console.log("Received Reset Token:", resetToken);
//                 toast.success("Password reset successfully!", { position: "top-right" });
//                 navigate("/admin/login");
//             }
//         } catch (error) {
//             console.error("API Error:", error);
    
//             if (error.response) {
//                 toast.error(error.response.data.message || "Something went wrong!", { position: "top-right" });
//             } else {
//                 toast.error("No response from server. Check your connection.", { position: "top-right" });
//             }
//         }
//     };
    
//     return (
//         <div className="login-container">
//             <div className="login-box">
//                 <div className="logo login-new">
//                     <img src={logo1} alt="MentoBridge Logo" />
//                 </div>
//                 <h2 style={{ textAlign: "left" }} className="my-4">Reset Password</h2>
//                 <p className="text-muted">Enter your new password below.</p>

//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group position-relative">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             className="form-control"
//                             placeholder="New Password"
//                             value={newPassword}
//                             onChange={(e) => setNewPassword(e.target.value)}
//                             required
//                         />
//                         <span
//                             className="position-absolute"
//                             style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
//                             onClick={() => setShowPassword(!showPassword)}
//                         >
//                             {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
//                         </span>
//                     </div>

//                     <div className="form-group position-relative">
//                         <input
//                             type={showConfirmPassword ? "text" : "password"}
//                             className="form-control"
//                             placeholder="Confirm Password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                         />
//                         <span
//                             className="position-absolute"
//                             style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
//                             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         >
//                             {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
//                         </span>
//                     </div>

//                     <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
//                 </form>

//                 <p className="forgot-password mt-3">
//                     <Link to="/admin/login">Back to Login</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default ResetPassword;


import React, { useState, useEffect } from "react";
import { logo1 } from "../imagepath";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../Helper/apicall";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [resetToken, setResetToken] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tokenFromUrl = params.get("token");

        if (!tokenFromUrl) {
            toast.error("Reset token is missing! Redirecting to login...", { position: "top-right" });
            navigate("/login");
        } else {
            setResetToken(tokenFromUrl);
        }
    }, [location, navigate]);

    const validationSchema = Yup.object().shape({
        newPassword: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("New password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
            .required("Confirm password is required"),
    });

    const handleSubmit = async (values) => {
        if (!resetToken) {
            toast.error("Reset token is missing!", { position: "top-right" });
            return;
        }

        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/admin/resetPasswordAdmin`,
                { token: resetToken, newPassword: values.newPassword },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                toast.success("Password reset successfully!", { position: "top-right" });
                navigate("/admin/login");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!", { position: "top-right" });
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo login-new">
                    <img src={logo1} alt="MentoBridge Logo" />
                </div>
                <h2 style={{ textAlign: "left" }} className="my-4">Reset Password</h2>
                <p className="text-muted">Enter your new password below.</p>

                <Formik
                    initialValues={{ newPassword: "", confirmPassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form>
                            <div className="form-group position-relative">
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="newPassword"
                                    className="form-control"
                                    placeholder="New Password"
                                />
                                <ErrorMessage name="newPassword" component="div" className="text-danger" />
                                <span
                                    className="position-absolute"
                                    style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                                </span>
                            </div>

                            <div className="form-group position-relative">
                                <Field
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                <span
                                    className="position-absolute"
                                    style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                                </span>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Reset Password</button>
                        </Form>
                    )}
                </Formik>

                <p className="forgot-password mt-3">
                    <Link to="/admin/login">Back to Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ResetPassword;
