import React from "react";
import Footer from "../../../footer";
import Header from "../../../header";
import StickyBox from "react-sticky-box";
import DoctorSidebar from "../../../mentor/sidebar/index.jsx";
import { user, user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8 } from "../../../../../admin/components/imagepath.jsx";
import { Link } from "react-router-dom";

const Invoices = (props) => {
  return (
    <div>
      <Header {...props} />
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
                    Invoice
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Invoice</h2>
            </div>
          </div>
        </div>
      </div>
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
              <div className="card card-table">
                <div className="card-body">
                  {/* Invoice Table */}
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Invoice No</th>
                          <th>Mentee</th>
                          <th>Amount</th>
                          <th>Paid On</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0010</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_2} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Tyrone Roberts <span>16</span></Link>
                            </h2>
                          </td>
                          <td>$450</td>
                          <td>14 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0009</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_1} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Julie Pennington <span>01</span></Link>
                            </h2>
                          </td>
                          <td>$200</td>
                          <td>13 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0008</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Tyrone Roberts <span>02</span></Link>
                            </h2>
                          </td>
                          <td>$100</td>
                          <td>12 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0007</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_3} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Allen Davis <span>03</span></Link>
                            </h2>
                          </td>
                          <td>$350</td>
                          <td>11 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0006</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_4} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Patricia Manzi <span>04</span></Link>
                            </h2>
                          </td>
                          <td>$275</td>
                          <td>10 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0005</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_5} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Olive Lawrence <span>05</span></Link>
                            </h2>
                          </td>
                          <td>$600</td>
                          <td>9 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0004</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_6} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Frances Foster <span>06</span></Link>
                            </h2>
                          </td>
                          <td>$50</td>
                          <td>8 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0003</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_7} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Deloris Briscoe <span>07</span></Link>
                            </h2>
                          </td>
                          <td>$400</td>
                          <td>7 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0002</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_8} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Daniel Griffing <span>08</span></Link>
                            </h2>
                          </td>
                          <td>$550</td>
                          <td>6 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="/pages/invoice-view">#INV-0002</Link>
                          </td>
                          <td>
                            <h2 className="table-avatar">
                              <Link href="/mentor/mentee-profile" className="avatar avatar-sm me-2">
                                <img className="avatar-img rounded-circle" src={user_8} alt="User Image" />
                              </Link>
                              <Link href="/mentor/mentee-profile">Daniel Griffing <span>08</span></Link>
                            </h2>
                          </td>
                          <td>$550</td>
                          <td>6 Nov 2024</td>
                          <td className="text-end">
                            <div className="table-action">
                              <Link href="/pages/invoice-view" className="btn btn-sm bg-info-light me-2">
                                <i className="far fa-eye" /> View
                              </Link>
                              <Link href="#" className="btn btn-sm bg-primary-light">
                                <i className="fas fa-print" /> Print
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /Invoice Table */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Invoices;
