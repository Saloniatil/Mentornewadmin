import React, { useState } from "react";
import { logoSmall, logo } from "../imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import Select from "react-select";
import SidebarNav from "../sidebar";
import { addressSchema, basicDetails } from "../../../utils/validationSchema";
import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "react-bootstrap";

const GendralSettings = () => {
  const [show, setShow] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const stateOptions = [
    { value: 1, label: "Select" },
    { value: 2, label: "California" },
    { value: 3, label: "Tasmania" },
    { value: 4, label: "Auckland" },
    { value: 5, label: "Marlborough" },
  ];

  const countryOptions = [
    { value: 1, label: "Select" },
    { value: 2, label: "India" },
    { value: 3, label: "London" },
    { value: 4, label: "France" },
    { value: 5, label: "USA" },
  ];

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <>
      <div >
        {/* Header */}
        {/* Sidebar */}
        <SidebarNav />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Settings</h3>

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Basic Details</h5>
                  </div>
                  <div className="card-body pt-0">
                    <Formik
                      initialValues={{
                        vat: "",
                        vatCommission: "",
                        whtNigerian: "",
                        whtNonNigerian: "",
                        platformCommission: "",
                        bundlePrice3Months: "",
                        bundlePrice6Months: "",
                        generalSessionPrice: "",
                        cancellationFees: "",
                        payoutThreshold: "",
                      }}
                      validationSchema={basicDetails}
                      onSubmit={(values) => {
                        console.log("Form Data:", values);
                        alert("Form submitted successfully!");
                      }}
                    >
                      {({ errors, touched ,handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                          <div className="settings-form">
                            {/* VAT % */}
                            <div className="form-group">
                              <label>
                                VAT % <span className="star-red">*</span>
                              </label>
                              <Field type="text" name="vat" className="form-control" placeholder="Enter VAT %" />
                              <ErrorMessage name="vat" component="div" className="text-danger" />
                            </div>

                            {/* VAT on Commission */}
                            <div className="form-group">
                              <label>
                                VAT on Commission (%) <span className="star-red">*</span>
                              </label>
                              <Field type="text" name="vatCommission" className="form-control" placeholder="Enter VAT %" />
                              <ErrorMessage name="vatCommission" component="div" className="text-danger" />
                            </div>

                            {/* WHT For Nigerian */}
                            <div className="form-group">
                              <label>
                                WHT For Nigerian % <span className="star-red">*</span>
                              </label>
                              <Field type="text" name="whtNigerian" className="form-control" placeholder="Enter WHT %" />
                              <ErrorMessage name="whtNigerian" component="div" className="text-danger" />
                            </div>

                            {/* WHT For Non-Nigerian */}
                            <div className="form-group">
                              <label>
                                WHT For Non-Nigerian % <span className="star-red">*</span>
                              </label>
                              <Field type="text" name="whtNonNigerian" className="form-control" placeholder="Enter WHT %" />
                              <ErrorMessage name="whtNonNigerian" component="div" className="text-danger" />
                            </div>

                            {/* Platform Commission */}
                            <div className="form-group">
                              <label>
                                Platform commission % (Admin Commission %) <span className="star-red">*</span>
                              </label>
                              <Field type="text" name="platformCommission" className="form-control" placeholder="Enter platform %" />
                              <ErrorMessage name="platformCommission" component="div" className="text-danger" />
                            </div>

                            {/* Max Bundle Price (3 Months) */}
                            <div className="form-group">
                              <label>Max Bundle Price Of 3 Months Bundle</label>
                              <Field type="text" name="bundlePrice3Months" className="form-control" placeholder="Enter Price" />
                              <ErrorMessage name="bundlePrice3Months" component="div" className="text-danger" />
                            </div>

                            {/* Max Bundle Price (6 Months) */}
                            <div className="form-group">
                              <label>Max Bundle Price Of 6 Months Bundle</label>
                              <Field type="text" name="bundlePrice6Months" className="form-control" placeholder="Enter Price" />
                              <ErrorMessage name="bundlePrice6Months" component="div" className="text-danger" />
                            </div>

                            {/* Max Bundle Price (1 General Session) */}
                            <div className="form-group">
                              <label>Max Bundle Price Of 1 General Session</label>
                              <Field type="text" name="generalSessionPrice" className="form-control" placeholder="Enter Price" />
                              <ErrorMessage name="generalSessionPrice" component="div" className="text-danger" />
                            </div>

                            {/* After 1 Cancellation or Reschedule Fees */}
                            <div className="form-group">
                              <label>After 1 Cancellation or Reschedule fees</label>
                              <Field type="text" name="cancellationFees" className="form-control" placeholder="Enter Fees" />
                              <ErrorMessage name="cancellationFees" component="div" className="text-danger" />
                            </div>

                            {/* Payout Threshold */}
                            <div className="form-group">
                              <label>Payout Threshold</label>
                              <Field type="text" name="payoutThreshold" className="form-control" placeholder="Enter Payout Amount" />
                              <ErrorMessage name="payoutThreshold" component="div" className="text-danger" />
                            </div>

                            {/* Buttons */}
                            <div className="form-group mb-0">
                              <div className="settings-btns">
                                <button type="submit" className="btn btn-primary mx-2">
                                  Update
                                </button>
                                {/* <button type="reset" className="btn btn-grey">
                                  Cancel
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>


              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Social Links </h5>
                  </div>
                  <div className="card-body pt-0">

                    <Formik
                      initialValues={{
                        facebook: "",
                        instagram: "",
                        linkedin: "",
                        twitter: "",
                        address: "",
                        mobile: "",
                        email: "",
                      }}
                      validationSchema={addressSchema}
                      onSubmit={(values) => {
                        console.log("Form Data:", values);
                        alert("Form submitted successfully!");
                      }}
                    >
                      {({ errors, touched,handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="settings-form">
                            {/* Facebook */}
                            <div className="form-group">
                              <label>Facebook Link <span className="star-red">*</span></label>
                              <Field type="text" name="facebook" className="form-control" placeholder="Enter Facebook Link" />
                              <ErrorMessage name="facebook" component="div" className="text-danger" />
                            </div>

                            {/* Instagram */}
                            <div className="form-group">
                              <label>Instagram Link <span className="star-red">*</span></label>
                              <Field type="text" name="instagram" className="form-control" placeholder="Enter Instagram Link" />
                              <ErrorMessage name="instagram" component="div" className="text-danger" />
                            </div>

                            {/* LinkedIn */}
                            <div className="form-group">
                              <label>LinkedIn Link <span className="star-red">*</span></label>
                              <Field type="text" name="linkedin" className="form-control" placeholder="Enter LinkedIn Link" />
                              <ErrorMessage name="linkedin" component="div" className="text-danger" />
                            </div>

                            {/* Twitter */}
                            <div className="form-group">
                              <label>Twitter Link <span className="star-red">*</span></label>
                              <Field type="text" name="twitter" className="form-control" placeholder="Enter Twitter Link" />
                              <ErrorMessage name="twitter" component="div" className="text-danger" />
                            </div>

                            <h5 className="title">Address & Contact Details</h5>

                            {/* Address */}
                            <div className="form-group mt-3">
                              <label>Address <span className="star-red">*</span></label>
                              <Field type="text" name="address" className="form-control" placeholder="Enter Address" />
                              <ErrorMessage name="address" component="div" className="text-danger" />
                            </div>

                            {/* Mobile No */}
                            <div className="form-group">
                              <label>Mobile No <span className="star-red">*</span></label>
                              <Field type="text" name="mobile" className="form-control" placeholder="Enter Mobile No" />
                              <ErrorMessage name="mobile" component="div" className="text-danger" />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                              <label>Email <span className="star-red">*</span></label>
                              <Field type="text" name="email" className="form-control" placeholder="Enter Email" />
                              <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>

                            {/* Buttons */}
                            <div className="form-group mb-0">
                              <div className="settings-btns">
                                <button type="submit" className="btn btn-primary mx-2">Update</button>
                                {/* <button type="reset" className="btn btn-grey">Cancel</button> */}
                              </div>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            {/* /Settings */}
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default GendralSettings;
