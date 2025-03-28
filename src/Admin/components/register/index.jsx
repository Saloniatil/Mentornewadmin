import React from "react";
import { logoWhite } from "../imagepath";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../../src/Helper/apicall";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {

  const config = "/react/template";

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/mentor/register`, {
          firstName: values.name.split(" ")[0], // Assuming first name is first word
          lastName: values.name.split(" ").slice(1).join(" "), // Rest as last name
          email: values.email,
          password: values.password,
        });

        alert("Registration successful!");
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors({ apiError: error.response.data.message || "Registration failed" });
        }
      }
      setSubmitting(false);
    },
  });
  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={logoWhite} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <small className="text-danger">{formik.errors.name}</small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email" // ✅ Fix: Ensure name attribute is present
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <small className="text-danger">{formik.errors.email}</small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <small className="text-danger">{formik.errors.password}</small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                      />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <small className="text-danger">{formik.errors.confirmPassword}</small>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Register
                    </button>
                  </form>

                  {/* /Form */}
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Register with</span>
                    <Link to="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </Link>
                    <Link to="#" className="google">
                      <i className="fa fa-google" />
                    </Link>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">
                    Already have an account?{" "}
                    <Link to="/admin/login">Login</Link>
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

export default Register;
