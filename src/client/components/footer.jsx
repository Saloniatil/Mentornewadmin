/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ImageWithBasePath from "../../core/img/ImageWithBasePath";

const Footer = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const exclusionArray = [
    "/pages/map-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-mentor",
    "/mentee/map-list",
    "/mentee/map-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {!props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") &&
        !props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") && (
          <footer className="footer ">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-widget footer-about">
                      <div className="footer-logo">
                        <ImageWithBasePath src="assets/img/logo.png" alt="logo" />
                      </div>
                      <div className="footer-about-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <div className="social-icon">
											<ul>
												<li>
													<Link to="#" target="_blank"><i className="fab fa-facebook-f"></i> </Link>
												</li>
												<li>
													<Link to="#" target="_blank"><i className="fab fa-twitter"></i> </Link>
												</li>
												<li>
													<Link to="#" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
												</li>
												<li>
													<Link to="#" target="_blank"><i className="fab fa-instagram"></i></Link>
												</li>
												<li>
													<Link to="#" target="_blank"><i className="fab fa-dribbble"></i> </Link>
												</li>
											</ul>
										</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Mentor</h2>
                      <ul>
                        <li>
                          <Link to="/mentee/search-mentor">
                            Search for Mentor
                          </Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/mentors/booking">Booking</Link>
                        </li>
                        <li>
                          <Link to="/mentor/mentor-dashboard">Mentor Dashboard</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Mentee</h2>
                      <ul>
                        <li>
                          <Link to="/mentor/bookings">Appointments</Link>
                        </li>
                        <li>
                          <Link to="/mentor/chat-mentor">Chat</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/mentee/mentee-dashboard">Mentee Dashboard</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="footer-widget footer-contact">
                      <h2 className="footer-title">Contact Us</h2>
                      <div className="footer-contact-info">
                        <div className="footer-address">
                          <p>
                            <i>
                              <FeatherIcon
                                icon="map-pin"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </i>{" "}
                            3556 Beech Street, USA
                          </p>
                        </div>
                        <div className="footer-address">
                          <p>
                            <i>
                              <FeatherIcon
                                icon="phone-call"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </i>{" "}
                            +1 315 369 5943
                          </p>
                        </div>
                        <div className="footer-address mb-0">
                          <p>
                            <i>
                              <FeatherIcon
                                icon="mail"
                                style={{ width: "16px", height: "16px" }}
                              />
                            </i>{" "}
                            Mentoring@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                {/* Copyright */}
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                      <div className="copyright-text">
                        <p className="mb-0">
                          {" "}
                          © 2024 Mentoring. All rights reserved.{" "}
                          
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* /Copyright */}
              </div>
            </div>
          </footer>
        )}
    </>
  );
};

export default Footer;
