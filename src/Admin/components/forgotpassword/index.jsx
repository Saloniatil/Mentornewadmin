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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        toast.error("Authorization token is required! Please log in again.", { position: "top-right" });
        return;
      }
      
      const response = await axios.post(
        `${API_BASE_URL}/api/admin/forgotPassword`,
        { email: values.email }, // Sending the email entered in the form
        {
          headers: {
            Authorization: `Bearer ${token.trim()}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        const resetToken = response.data.data.resetPasswordToken;
        localStorage.setItem("resetPasswordToken", resetToken);
        toast.success(response.data.message || "Password reset email sent successfully!", {
          position: "top-right",
        });
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong!", { position: "top-right" });
      } else {
        toast.error("No response from server. Check your internet connection.", { position: "top-right" });
      }
      console.error("API Error:", error);
    } finally {
      setSubmitting(false);
    }
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
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
                {isSubmitting ? "Sending..." : "Send Reset Link"}
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
