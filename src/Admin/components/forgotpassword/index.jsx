import React, { useState, useEffect } from "react";
import { logo1 } from "../imagepath";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { forgotpassword } from "../../../utils/validationSchema";
import { API_BASE_URL } from "../../../Helper/apicall";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
   // Handle Forgot Password Submission
   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/mentor/forgotPassword`,
        values
      );

      if (response.status === 200) {
        toast.success("Password reset email sent!", { position: "top-right" });
        console.log("Response:", response.data);

        // Redirect to login after successful API call
        navigate("/admin/resetPassword");
      }
    } catch (error) {
      console.error("Forgot Password Error:", error.response?.data || error.message);
      toast.error("Invalid email or error occurred!", { position: "top-right" });
      setErrors({ email: "Invalid email or error occurred" });
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="logo login-new">
            <img src={logo1} alt="MentoBridge Logo" />
          </div>
          <h2 style={{ textAlign: "left" }} className="my-4">Forgot Password</h2>
          <p className="text-muted">Enter your email to receive a password reset link.</p>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={forgotpassword}
            // onSubmit={(values) => {
            //   console.log("Reset Link Sent to:", values.email);
            // }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Send Reset Link
                </button>
              </Form>
            )}
          </Formik>


          <p className="forgot-password mt-3">
            <Link to="/admin/login">Back to Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
