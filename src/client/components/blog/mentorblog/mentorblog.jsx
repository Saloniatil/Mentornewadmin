import React from "react";
import { Link } from "react-router-dom";
//images
import {
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
} from "./img.jsx";
//components

import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import StickyBox from "react-sticky-box";
import DoctorSidebar from "../../mentor/sidebar/index.jsx";
import { blog1 } from "../../../../admin/components/imagepath.jsx";

const Mentorblog = (props) => {
  return (
    <div>
      <Header {...props} />
      <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
        <div className="container-fluid">
          <div className="row align-items-start inner-banner">
            <div className="col-md-12 col-12 text-start">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Blog 
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Blog </h2>

            </div>
          </div>
        </div>
      </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={50} offsetBottom={20}>
                <div className="appointments">
                  <DoctorSidebar />
                </div>
              </StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row">
                  <div className="col-12">
                    {/* Tab Menu */}
                    <nav className="user-tabs">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li>
                          <Link
                            className="nav-link active"
                            href="#activeservice"
                            data-bs-toggle="tab"
                          >
                            Active Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link"
                            href="#inactiveservice"
                            data-bs-toggle="tab"
                          >
                            Inactive Blog
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    {/* /Tab Menu */}
                    {/* Tab Content */}
                    <div className="tab-content">
                      {/* Active Content */}
                      <div
                        role="tabpanel"
                        id="activeservice"
                        className="tab-pane fade show active"
                      >
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog1}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part I
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-danger"
                                    >
                                      <i className="far fa-trash-alt" />{" "}
                                      Inactive
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog2}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part II
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-danger"
                                    >
                                      <i className="far fa-trash-alt" />{" "}
                                      Inactive
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog3}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-danger"
                                    >
                                      <i className="far fa-trash-alt" />{" "}
                                      Inactive
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog4}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part I
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-danger"
                                    >
                                      <i className="far fa-trash-alt" />{" "}
                                      Inactive
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog5}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part II
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-danger"
                                    >
                                      <i className="far fa-trash-alt" />{" "}
                                      Inactive
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog6}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-danger"
                                    >
                                      <i className="far fa-trash-alt" />{" "}
                                      Inactive
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Active Content */}
                      {/* Inactive Content */}
                      <div
                        role="tabpanel"
                        id="inactiveservice"
                        className="tab-pane fade"
                      >
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog4}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-success"
                                    >
                                      <i className="fas fa-toggle-on" /> Active
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog5}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-success"
                                    >
                                      <i className="fas fa-toggle-on" /> Active
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog6}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-success"
                                    >
                                      <i className="fas fa-toggle-on" /> Active
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog7}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-success"
                                    >
                                      <i className="fas fa-toggle-on" /> Active
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog8}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-success"
                                    >
                                      <i className="fas fa-toggle-on" /> Active
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 d-flex">
                            <div className="course-box blog grid-blog">
                              <div className="blog-image mb-0">
                                <Link href="/blog/blog-details">
                                  <img
                                    className="img-fluid"
                                    src={blog9}
                                    alt="Post Image"
                                  />
                                </Link>
                              </div>
                              <div className="course-content">
                                <span className="date">April 09 2020</span>
                                <span className="course-title">
                                  Abacus Study for beginner - Part III
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </p>
                                <div className="row">
                                  <div className="col">
                                    <Link
                                      href="/blog/edit-blog"
                                      className="text-success"
                                    >
                                      <i className="far fa-edit" /> Edit
                                    </Link>
                                  </div>
                                  <div className="col text-end">
                                    <Link
                                      href="javascript:void(0);"
                                      className="text-success"
                                    >
                                      <i className="fas fa-toggle-on" /> Active
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Inactive Content */}
                    </div>
                    {/* /Tab Content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        <div
          className="modal fade"
          id="deleteConfirmModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p />
              </div>
              <div className="modal-footer">
                <Link
                  href="javascript:;"
                  className="btn btn-success si_accept_confirm"
                >
                  Yes
                </Link>
                <button
                  type="button"
                  className="btn btn-danger si_accept_cancel"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />

      {/* Model */}
      <div
        className="modal fade"
        id="deleteConfirmModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="deleteConfirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p id="acc_msg" />
            </div>
            <div className="modal-footer">
              <Link to="#" className="btn btn-success si_accept_confirm">
                Yes
              </Link>
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteNotConfirmModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="deleteNotConfirmModal"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="acc_title">
                Inactive Service?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p id="acc_msg1">Service is Booked and Inprogress..</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Model */}
    </div>
  );
};

export default Mentorblog;
