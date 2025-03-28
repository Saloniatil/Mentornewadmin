import React from "react";
import SidebarNav from "../sidebar";
import LineChart from "./LineChart";
import StatusCharts from "./StatusCharts";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="main-wrapper">
        <SidebarNav />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid pb-0">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome Admin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <Link to={'/admin/mentor/list'}>
                  <div className="card">
                    <div className="card-body">
                      <div className="dash-widget-header blue-round">
                        <span className="dash-widget-icon text-primary-new">
                          <i className="fe fe-users" />
                        </span>
                        <div className="dash-count">
                          <h3>168</h3>
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h6 className="text-muted">Mentors</h6>
                        <div className="progress progress-sm blue-prgrees">
                          <div className="progress-bar bg-primary w-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <Link to={'/admin/mentee-list'}>
                  <div className="card">
                    <div className="card-body">
                      <div className="dash-widget-header">
                        <span className="dash-widget-icon  text-primary-new-yellow">
                          <i className="fe fe-users" />

                        </span>
                        <div className="dash-count">
                          <h3>485</h3>
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h6 className="text-muted">Mentees</h6>
                        <div className="progress progress-sm yellow-prgrees">
                          <div className="progress-bar  w-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

              </div>
              <>
                <div className="col-xl-3 col-sm-6 col-12">


                  <div className="card">

                    <div className="card-body">
                      <div className="dash-widget-header blue-round">
                        <span className="dash-widget-icon text-primary-new">
                          <i className="fe fe-star-o" />

                        </span>
                        <div className="dash-count">
                          <h3>168</h3>
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h6 className="text-muted">Today's Session</h6>
                        <div className="progress progress-sm blue-prgrees">
                          <div className="progress-bar bg-primary w-50" />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card">

                    <div className="card-body">
                      <div className="dash-widget-header">
                        <span className="dash-widget-icon  text-primary-new-yellow">
                          <i className="fe fe-star-o" />
                        </span>
                        <div className="dash-count">
                          <h3>485</h3>
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h6 className="text-muted">Upcoming Sessions</h6>
                        <div className="progress progress-sm yellow-prgrees">
                          <div className="progress-bar  w-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 col-12">
                  <Link to={'/admin/transactions-list'}>
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header">
                          <span className="dash-widget-icon text-warning text-primary-new-yellow">
                            ₦
                          </span>
                          <div className="dash-count">
                            <h3>₦ 62523</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Total Transactions</h6>
                          <div className="progress progress-sm yellow-prgrees" >
                            <div className="progress-bar bg-warning w-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>


                <div className="col-xl-3 col-sm-6 col-12">

                  <Link to='/admin/refund-requests'>
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header blue-round">
                          <span className="dash-widget-icon text-primary-new">
                            ₦
                          </span>
                          <div className="dash-count">
                            <h3> ₦ 16000</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Refunded Transactions</h6>
                          <div className="progress progress-sm blue-prgrees">
                            <div className="progress-bar bg-primary w-50" />
                          </div>
                        </div>
                      </div>

                    </div>

                  </Link>
                </div>

                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="dash-widget-header blue-round">
                        <span className="dash-widget-icon  text-primary-new-yellow">
                          ₦
                        </span>
                        <div className="dash-count">
                          <h3> ₦ 158500</h3>
                        </div>
                      </div>
                      <div className="dash-widget-info">
                        <h6 className="text-muted">Total Mentors Available Balance</h6>
                        <div className="progress progress-sm yellow-prgrees">
                          <div className="progress-bar bg-success w-50" />
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <Link to={'/admin/commissions'}>


                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header blue-round">
                          <span className="dash-widget-icon  text-primary-new-green ">
                            ₦
                          </span>
                          <div className="dash-count">
                            <h3> ₦ 25000</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Revenue</h6>
                          <div className="progress progress-sm  ">
                            <div className="progress-bar  w-50 green-prgrees" />
                          </div>
                        </div>
                      </div>

                    </div>

                  </Link>

                </div>




                <div className="col-xl-3 col-sm-6 col-12">
                  <Link to={'/admin/wht-list?type=unremmited'}>
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header blue-round">
                          <span className="dash-widget-icon  text-primary-new-yellow">
                            ₦
                          </span>
                          <div className="dash-count">
                            <h3> ₦ 15000</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Total WHT (Unremitted)</h6>
                          <div className="progress progress-sm yellow-prgrees">
                            <div className="progress-bar bg-warning w-50" />
                          </div>
                        </div>


                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <Link to={'/admin/wht-list?type=remmited'}>
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header ">
                          <span className="dash-widget-icon  text-primary-new-green">
                            ₦
                          </span>
                          <div className="dash-count">
                            <h3>₦ 6253</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Total WHT (Remitted)</h6>
                          <div className="progress progress-sm  ">
                            <div className="progress-bar green-prgrees w-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>








                <div className="col-xl-3 col-sm-6 col-12">
                  <Link to='/admin/vat-commission-list?type=unremmitted'>

                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header ">
                          <span className="dash-widget-icon text-warning text-primary-new-yellow">
                            ₦
                          </span>
                          <div className="dash-count">
                            <h3>₦ 6253</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Total <strong stye={{ color: 'black' }}>VAT</strong> on Commission (Unremitted)</h6>
                          <div className="progress progress-sm yellow-prgrees">
                            <div className="progress-bar bg-warning w-50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link >

                </div>

                <div className="col-xl-3 col-sm-6 col-12">
                  <Link to='/admin/vat-commission-list?type=remmitted'>
                    <div className="card">
                      <div className="card-body">
                        <div className="dash-widget-header blue-round">
                          <span className="dash-widget-icon  text-primary-new-green">
                            ₦
                          </span>
                          <div className="dash-count">
                            <h3> ₦ 158500</h3>
                          </div>
                        </div>
                        <div className="dash-widget-info">
                          <h6 className="text-muted">Total <strong stye={{color:'black'}}>VAT</strong>  on Commission (Remitted)</h6>
                          <div className="progress progress-sm blue-prgrees">
                            <div className="green-prgrees w-50" />
                          </div>
                        </div>


                      </div>
                    </div>
                  </Link>
                </div>







              </>
            </div>
            <div className="row">

              <div className="col-md-4 col-lg-6">
                {/* Sales Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <h4 className="card-title">Revenue</h4>
                  </div>
                  <div className="card-body">
                    {/* <div id="morrisArea" /> */}
                    <LineChart />
                  </div>
                </div>
                {/* /Sales Chart */}
              </div>
              <div className="col-md-4 col-lg-6">
                {/* Invoice Chart */}
                <div className="card card-chart">
                  <div className="card-header">
                    <h4 className="card-title">Status</h4>
                  </div>
                  <div className="card-body">
                    <div id="morrisLine" />
                    {/* <LineChart /> */}
                    {/* <StatusChart /> */}
                    <StatusCharts />
                  </div>
                </div>
                {/* /Invoice Chart */}
              </div>
            </div>

          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
};

export default Dashboard;
