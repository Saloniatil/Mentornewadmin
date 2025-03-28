import React from "react";
import { Link } from "react-router-dom";
//images
import { IMG02, img_1, img_2, img_3 } from "./img.jsx";
//components
import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import DoctorSidebar from "../../mentor/sidebar/index.jsx";
import StickyBox from "react-sticky-box";
// import ImageWithBasePath from "../../../../core/img/ImageWithBasePath.js";

const Mentoreditblog = (props) => {
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
                    Edit Blog
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Edit Blog</h2>

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
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DoctorSidebar />
              </StickyBox>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9 custom-edit-service">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">	
                        <h3 className="pb-3">Edit Blog</h3>
                        <form action="blog.html">
                          <div className="service-fields mb-3">
                            <h4 className="heading-2">Service Information</h4>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Blog Title <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" defaultValue="Abacus Study for beginner - Part I" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="service-fields mb-3">
                            <h4 className="heading-2">Blog Category</h4>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Category <span className="text-danger">*</span></label>
                                  <select className="form-control select form-select" name="category"> 
                                    <option value={1}>Abacus Study for beginner - Part I</option>
                                    <option value={2} selected="selected">Abacus Study for beginner - Part II</option>
                                    <option value={3}>Abacus Study for beginner - Part III</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Sub Category <span className="text-danger">*</span></label>
                                  <select className="form-control select form-select" name="subcategory"> 
                                    <option value={1}>Abacus Study for experienced - Part I</option>
                                    <option value={2} selected="selected">Abacus Study for experienced - Part II</option>
                                    <option value={3}>Abacus Study for experienced - Part III</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="service-fields mb-3">
                            <h4 className="heading-2">Blog Details</h4>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Descriptions <span className="text-danger">*</span></label>
                                  <textarea id="about" className="form-control service-desc" name="about" defaultValue={"note."} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="service-fields mb-3">
                            <h4 className="heading-2">Blog Images </h4>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="service-upload">
                                  <i className="fas fa-cloud-upload-alt" />
                                  <span>Upload Service Images *</span>
                                  <input type="file" name="images[]" id="images" multiple />
                                </div>	
                                <div id="uploadPreview">
                                  <ul className="upload-wrap">
                                    <li>
                                      <div className="upload-images">
                                        {/* <ImageWithBasePath alt="" src="assets/img/blog/blog-thumb-01.jpg" /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="upload-images">
                                        {/* <ImageWithBasePath alt="" src="assets/img/blog/blog-thumb-02.jpg" /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="upload-images">
                                        {/* <ImageWithBasePath alt="" src="assets/img/blog/blog-thumb-03.jpg" /> */}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="submit-section">
                            <button className="btn btn-primary submit-btn" type="submit" name="form_submit" value="submit">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>


      <Footer {...props} />
    </div>
  );
};

export default Mentoreditblog;
