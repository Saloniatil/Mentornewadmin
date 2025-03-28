/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logosvg from "../assets/images/logo.svg";
import IMG01 from "../assets/images/clients/client-01.jpg";
// import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from "feather-icons-react";
import {
  Browser_categorie,
  Home_12,
  Home_13,
  home_01,
  home_02,
  home_03,
  home_04,
  home_05,
  home_06,
  home_07,
  home_08,
  home_09,
  home_10,
  home_11,
  logo_03,
  logo_15,
  logo_svg,
  logo_white,
} from "./imagepath";

import Chart from "./mentee/dashboard/chart";
import Notification from "./mentee/dashboard/notification";
import { IMG07 } from "./mentee/mentorprofile/img";
// import { footer_logo } from "./home/image";

const Header = () => {
  // const history = useHistory();
  //Aos
  // const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const config = "/react/template";

  //mobile menu
  const [change, setChange] = useState(false);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [isSidebooking, setSideBooking] = useState("");
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [isSideMenuthree, setSideMenuthree] = useState("");
  const [isSideMenufour, setSideMenufour] = useState("");
  const [sideMenufive, setSideMenufive] = useState("");
  const [menu, setMenu] = useState(false);

  // const [menu1, setMenu1] = useState(false);
  const toggleSidebarthree = (value) => {
    setSideMenuthree(value);
  };
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarfour = (value) => {
    setSideMenufour(value);
  };
  const toggleSidebarfive = (value) => {
    setSideMenufive(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };
  const toggleSidebarbooking = (value) => {
    setSideBooking(value);
  };

  // const mobilemenus = () => {
  //   setMenu(!true);
  // };

  // Rest of your code that uses pathnames

  let pathnames = window.location.pathname;

  // const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  //nav transparent

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {!pathnames.includes("home1") && (
        <header
          className={`header ${pathnames.includes("/index-11")
              ? "header-fixed header-fourteen header-sixteen"
              : "" || pathnames.includes("/index-10")
                ? "header-fixed header-fourteen header-fifteen"
                : "" || pathnames.includes("/index-9")
                  ? "header-fixed header-fourteen"
                  : "" || pathnames.includes("/index-8")
                    ? "header-fixed header-fourteen header-twelve header-thirteen"
                    : "" || pathnames.includes("/index-7")
                      ? "header-fixed header-fourteen header-twelve"
                      : "" || pathnames.includes("/index-6")
                        ? "header-trans header-eleven"
                        : "" || pathnames.includes("/index-4")
                          ? "header-trans custom"
                          : "" || pathnames.includes("/index-5")
                            ? "header header-fixed header-ten"
                            : "" || pathnames.includes("home")
                              ? "header-trans header-two"
                              : "" || pathnames.includes("/index-13")
                                ? "header header-custom header-fixed header-ten home-care-header"
                                : "" || pathnames.includes("/Pharmacy-index")
                                  ? "header header-one"
                                  : "header-fixed header-one"
            } `}
          style={
            pathnames.includes("/index-6") && navbar
              ? { background: "rgb(30, 93, 146)" }
              : { background: "" } && pathnames.includes("/index-10") && navbar
                ? { background: "rgb(255, 255, 255)" }
                : { background: "" } && pathnames.includes("/index-11") && navbar
                  ? { background: "rgb(255, 255, 255)" }
                  : { background: "" } && pathnames.includes("/index-4") && navbar
                    ? { background: "rgb(43, 108, 203)" }
                    : { background: "" } && pathnames.includes("/index-9") && navbar
                      ? { background: "rgb(43, 108, 203)" }
                      : { background: "" } && pathnames.includes("/index-2") && navbar
                        ? { background: "rgb(255, 255, 255)" }
                        : { background: "" }
          }
        >
          <nav
            className={`navbar navbar-expand-lg header-nav ${pathnames.includes("home1") ? "nav-transparent" : ""
              }`}
          >
            <div className="navbar-header">
              <Link
                to="#0"
                id="mobile_btn"
                onClick={() => onHandleMobileMenu()}
              >
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </Link>
              <Link to="/index-2" className="navbar-brand logo">
                {pathnames.includes("/index-5") ? (
                  <img src={logo_white} className="img-fluid" alt="Logo" />
                ) : pathnames.includes(
                  "/react/template/Pharmacy/Pharmacy-index"
                ) ? (
                  <div className="browse-categorie">
                    <div className="dropdown categorie-dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <img src={Browser_categorie} alt /> Browse Categories
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">
                          Ayush
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Covid Essentials
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Devices
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Glucometers
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={
                      pathnames === "/react/template/index-6" ||
                        pathnames === "/react/template/index-4"
                        ? footer_logo
                        : pathnames === "/index-8"
                          ? logosvg
                          : pathnames === "/react/template/index-11"
                            ? logo_15
                            : pathnames === "/react/template/index-10"
                              ? logo_15
                              : pathnames === "/react/template/index-9"
                                ? logo_03
                                : pathnames === "/react/template/index-7"
                                  ? logo_svg
                                  : pathnames == "/react/template/index-13"
                                    ? logo_white
                                    : logo
                    }
                    className="img-fluid"
                    alt="Logo"
                  />
                )}
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/index-2" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  to="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </Link>
              </div>

              <ul
                className={`main-nav ${pathnames.includes("home4") ? "white-font" : ""
                  }`}
              >
                <li className={`has-submenu   ${pathnames.includes("index")
                    ? "active"
                    : "" || pathnames.includes("home")
                      ? "active"
                      : ""
                  }`}>
                  {/* <Link
                      to="/index"
                      // target="_blank"

                    >
                      Home
                    </Link> */}
                </li>
                <li
                  className={`has-submenu megamenu   ${pathnames.includes("index")
                      ? "active"
                      : "" || pathnames.includes("home")
                        ? "active"
                        : ""
                    }`}
                >
                  <Link
                    to="#"
                    onMouseEnter={() => setMenu(!menu)}
                    className={`${menu === true ? "submenu" : ""}`}
                  >
                    Home <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={`${menu === true
                        ? "submenu mega-submenu d-block"
                        : "submenu mega-submenu"
                      }`}
                  >
                    <li>
                      <div className="megamenu-wrapper">
                        <div className="row">
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index") ? "active" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link to="/index" className="inner-demo-img">
                                  <img
                                    src={home_11}
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/index" className="inner-demo-img">
                                  Home - 1
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index-2") ? "" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link
                                  to="/index-2"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src={home_10}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-2"
                                  className="inner-demo-img"
                                >
                                  Home - 2
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index-3") ? "active" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link
                                  to="/index-3"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src={home_09}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-3"
                                  className="inner-demo-img"
                                >
                                  Home - 3
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index-4") ? "active" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link
                                  to="/index-4"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src={home_08}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-4"
                                  className="inner-demo-img"
                                >
                                  Home - 4
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index-5") ? "active" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link
                                  to="/index-5"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src={home_07}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-5"
                                  className="inner-demo-img"
                                >
                                  Home - 5
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index-6") ? "active" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link
                                  to="/index-6"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src={home_06}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-6"
                                  className="inner-demo-img"
                                >
                                  Home - 6
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index-7") ? "active" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link
                                  to="/index-7"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src={home_05}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-7"
                                  className="inner-demo-img"
                                >
                                  Home - 7
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className={`single-demo ${pathnames.includes("/index-8") ? "active" : ""
                                }`}
                            >
                              <div className="demo-img">
                                <Link
                                  to="/index-8"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src={home_04}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link
                                  to="/index-8"
                                  className="inner-demo-img"
                                >
                                  Home - 8
                                </Link>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li
                  className={`has-submenu ${url.includes("/mentor") ? "active" : ""
                    }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "doctors" ? "subdrop " : ""}
                    onMouseEnter={() =>
                      toggleSidebar(
                        isSideMenu == "doctors" ? "submenu" : "doctors"
                      )
                    }
                  >
                    Mentor <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu == "doctors" ? (
                    <ul
                      className={`${isSideMenu == "doctors"
                          ? "submenu d-block"
                          : "submenu"
                        }`}
                    >
                      <li
                        className={
                          pathnames.includes("mentor-dashboard")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentor/mentor-dashboard"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentor Dashboard
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("bookings") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentor/bookings"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Bookings
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("schedule-timing")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentor/schedule-timing"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Schedule Timing
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("my-patients") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentor/mentee-list"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentee List
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("mentee-profile")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentor/mentee-profile"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentee Profile
                        </Link>
                      </li>
                      <li
                        className={`has-submenu ${pathnames.includes("mentor-blog") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/mentor-blog"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Blog
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link
                              to="/mentor-blog"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/blog/blog-details"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Blog view
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/blog/add-blog"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Add Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/blog/edit-blog"
                              onClick={() => onhandleCloseMenu()}
                            >
                              Edit Blog
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          pathnames.includes("chat-mentor") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentor/chat-mentor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Chat
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("invoice") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentor/invoice"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Invoices
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("profile-setting")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentor/profile-setting"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Profile Settings
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("review") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentor/review"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Reviews
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("mentor-register")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentor/mentor-register"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentor Register
                        </Link>
                      </li>

                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`has-submenu ${url.includes("/mentee") ? "active" : ""
                    }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "patients" ? "subdrop" : ""}
                    onMouseEnter={() =>
                      toggleSidebar(
                        isSideMenu == "patients" ? "submenu" : "patients"
                      )
                    }
                  >
                    Mentee <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu == "patients" ? (
                    <ul
                      className={`${isSideMenu == "patients"
                          ? "submenu d-block"
                          : "submenu"
                        }`}
                    >
                      <li
                        className={`has-submenu ${pathnames.includes("doctor") &&
                            !pathnames.includes("mentor-profile") &&
                            !pathnames.includes("search-doctor")
                            ? "active"
                            : ""
                          }`}
                      >
                        <Link
                          to="#0"
                          className={
                            isSideMenutwo == "doctor" ? "subdrop" : ""
                          }
                          onMouseEnter={() =>
                            toggleSidebartwo(
                              isSideMenutwo == "doctor" ? "" : "doctor"
                            )
                          }
                        >
                          Mentors{" "}
                        </Link>
                        {isSideMenutwo == "doctor" ? (
                          <ul
                            className={
                              isSideMenutwo == "doctor"
                                ? "submenu d-block"
                                : "submenu"
                            }
                          >
                            <li
                              className={
                                pathnames.includes("map-grid")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link
                                to="/mentee/map-grid"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Map Grid
                              </Link>
                            </li>
                            <li
                              className={
                                pathnames.includes("map-list")
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link
                                to="/mentee/map-list"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Map List
                              </Link>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                      <li
                        className={
                          pathnames.includes("search-mentor") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentee/search-mentor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Search Mentor
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("mentor-profile") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentee/mentor-profile"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentor Profile
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("mentee-bookings") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentee/mentee-bookings"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Bookings
                        </Link>
                      </li>

                      {/* <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                          <Link to="/mentee/booking1" onClick={() => onhandleCloseMenu()}>Booking</Link>
                        </li> */}
                      <li
                        className={
                          pathnames.includes("checkout") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentee/checkout"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Checkout
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("booking-success")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentee/booking-success"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Booking Success
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("dashboard") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentee/dashboard"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Mentee Dashboard
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("favourites") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentee/favourites"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Favourites
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("mentee-chat") ? "active" : ""
                        }
                      >
                        <Link
                          to="/mentee/mentee-chat"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Chat
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("profile") &&
                            !pathnames.includes("mentor-profile")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentee/profile"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Profile Settings
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("change-password")
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to="/mentee/change-password"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Change Password
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li
                  className={`has-submenu ${url.includes("/pages") ? "active" : ""
                    }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "pages" ? "subdrop" : ""}
                    onMouseEnter={() =>
                      toggleSidebar(
                        isSideMenu == "pages" ? "submenu" : "pages"
                      )
                    }
                  >
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu == "pages" ? (
                    <ul
                      className={`${isSideMenu == "pages" ? "submenu d-block" : "submenu"
                        }`}
                    >
                      <li
                        className={`${pathnames.includes("/voice-call") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/pages/voice-call"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Voice Call
                        </Link>
                      </li>
                      <li
                        className={`${pathnames.includes("/video-call") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/pages/video-call"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Video Call
                        </Link>
                      </li>
                      <li
                        className={`${pathnames.includes("/search-mentor") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/mentee/search-mentor"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Search Mentors
                        </Link>
                      </li>
                      <li
                        className={`${pathnames.includes("/component") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/pages/component"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Components
                        </Link>
                      </li>
                      <li
                        className={`has-submenu ${pathnames.includes("/invoice-view") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="#"
                          className={
                            isSideMenuone == "invoices" ? "subdrop" : ""
                          }
                          onMouseEnter={() =>
                            toggleSidebarone(
                              isSideMenuone == "invoices" ? "" : "invoices"
                            )
                          }
                        >
                          Invoices{" "}
                        </Link>
                        {isSideMenuone == "invoices" ? (
                          <ul
                            className={
                              isSideMenuone == "invoices"
                                ? "submenu d-block"
                                : "submenu"
                            }
                          >
                            <li
                              className={
                                pathnames.includes("invoice") ? "active" : ""
                              }
                            >
                              <Link
                                to="/pages/invoice"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Invoices
                              </Link>
                            </li>
                            <li
                              className={
                                pathnames.includes("-view") ? "active" : ""
                              }
                            >
                              <Link
                                to="/pages/invoice-view"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Invoice View
                              </Link>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                      <li
                        className={`${pathnames.includes("/blank-page") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/pages/blank-page"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Starter Page
                        </Link>
                      </li>
                      <li
                        className={`${pathnames.includes("/login") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/login"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Login
                        </Link>
                      </li>
                      <li
                        className={`${pathnames.includes("/register") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/register"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Register
                        </Link>
                      </li>
                      <li
                        className={`${pathnames.includes("/forgot-password") ? "active" : ""
                          }`}
                      >
                        <Link
                          to="/forgot-password"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Forgot Password
                        </Link>
                      </li>


                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li
                  className={`has-submenu ${url.includes("/blog") ? "active" : ""
                    }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "blog" ? "subdrop" : ""}
                    onMouseEnter={() =>
                      toggleSidebar(isSideMenu == "blog" ? "submenu" : "blog")
                    }
                  >
                    Blog <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu == "blog" ? (
                    <ul
                      className={`${isSideMenu == "blog" ? "submenu d-block" : "submenu"
                        }`}
                    >
                      <li
                        className={
                          pathnames.includes("blog-list") ? "active" : ""
                        }
                      >
                        <Link
                          to="/blog/blog-list"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Blog List
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("blog-grid") ? "active" : ""
                        }
                      >
                        <Link
                          to="/blog/blog-grid"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Blog Grid
                        </Link>
                      </li>
                      <li
                        className={
                          pathnames.includes("blog-details") ? "active" : ""
                        }
                      >
                        <Link
                          to="/blog/blog-details"
                          onClick={() => onhandleCloseMenu()}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="has-submenu">
                  <Link
                    to="/admin" target="_blank"
                  // target="_blank"

                  >
                    Admin
                  </Link>

                </li>
                {pathnames.includes("/index-5") ||
                  pathnames.includes("/index-11") ? (
                  <li className="searchbar">
                    <Link to="#">
                      <i>
                        {" "}
                        <FeatherIcon icon="search" />
                      </i>
                    </Link>
                    <div className="togglesearch" style={{ display: "none" }}>
                      <form action={`${config}/mentee/search-mentor`}>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <button type="submit" className="btn">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                ) : null}
                {(!pathnames.includes("/index-10") &&
                  pathnames.includes("index")) ||
                  pathnames.includes("/login") ||
                  pathnames.includes("/register") ||
                  pathnames.includes("blog") ||
                  pathnames.includes("/mentor/mentor-register") ||
                  pathnames.includes("pages") ||
                  pathnames.includes("/mentee/search-mentor") ||
                  (pathnames.includes("/aboutus") &&
                    !pathnames.includes("/index-6") &&
                    !pathnames.includes("/index-13") &&
                    !pathnames.includes("/index-5") &&
                    !pathnames.includes("/index-6") &&
                    !pathnames.includes("/index-7") &&
                    !pathnames.includes("/index-8") &&
                    !pathnames.includes("/index-9") &&
                    !pathnames.includes("/index-10") &&
                    !pathnames.includes("/index-11")) ? (
                  <>
                    <li className="searchbar">
                      <Link to="#" onClick={() => setChange(!change)}>
                        <i> {/* <FeatherIcon icon="search" /> */}</i>
                      </Link>
                      <div
                        className={`${change === true
                            ? "togglesearch d-block"
                            : "togglesearch d-none"
                          }`}
                      >
                        <form action={`${config}/mentee/search-mentor`}>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="login-link">
                      <Link to="/login">Login / Signup</Link>
                    </li>

                  </>
                ) : null}
              </ul>
            </div>
            {pathnames.includes("/index-6") ? (
              <ul className="nav header-navbar-rht">
                <li className="nav-item">
                  <Link
                    className={`nav-link header-login ${pathnames.includes("home6") ? "white-bg" : ""
                      }`}
                    to="/login"
                  >
                    <i className="me-2">
                      <FeatherIcon icon="lock" />
                    </i>
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link header-login btn-light-blue"
                    to="/login"
                  >
                    <i className="me-2">
                      <FeatherIcon icon="user" />
                    </i>
                    Login
                  </Link>
                </li>
              </ul>
            ) : null}
            {pathnames.includes("/index-2") &&
              !pathnames.includes("/index-11") &&
              !pathnames.includes("/index-5") &&
              !pathnames.includes("/index-6") &&
              !pathnames.includes("/index-7") &&
              !pathnames.includes("/index-8") &&
              !pathnames.includes("/index-9") &&
              !pathnames.includes("/index-4") ? (
              <ul className="nav header-navbar-rht">
                <li className="nav-item">
                  <Link
                    className={`nav-link header-login ${pathnames.includes("home4") ? "white-bg" : ""
                      }`}
                    to="/login"
                  >
                    login / Signup
                  </Link>
                </li>
              </ul>
            ) : null}

            {pathnames.includes("/index-5") ||
              pathnames.includes("/index-7") ||
              pathnames.includes("/index-9") ? (
              <ul className="nav header-navbar-rht">
                {pathnames.includes("/index-11") ||
                  pathnames.includes("home7") ||
                  pathnames.includes("home9") ? (
                  <li className="searchbar searchbar-fourteen me-2">
                    <Link to="#">
                      <i>
                        <FeatherIcon icon="search" />
                      </i>
                    </Link>
                    <div className="togglesearch">
                      <form action={`${config}/mentee/search-mentor`}>
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <button type="submit" className="btn btn-primary">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                ) : null}

                <li
                  className={`${pathnames.includes("/index-7") || "/index-9"
                      ? "login-in-fourteen"
                      : "register-btn"
                    }`}
                >
                  <Link
                    to="/pages/login-email"
                    className={
                      pathnames === "/index-9"
                        ? "btn reg-btn"
                        : "btn log-btn" && pathnames === "/index-7"
                          ? "btn reg-btn"
                          : "btn log-btn"
                    }
                  >
                    <i className="me-2">
                      {pathnames.includes("home7") ? (
                        <FeatherIcon icon="user" />
                      ) : (
                        <FeatherIcon icon="lock" />
                      )}
                    </i>
                    Log In
                  </Link>
                </li>
                <li
                  className={`${pathnames.includes("/index-7") || "/index-9"
                      ? "login-in-fourteen"
                      : "register-btn"
                    }`}
                >
                  <Link
                    to="/signup"
                    className={`${pathnames.includes("/index-7") || "/index-9"
                        ? "btn btn-primary reg-btn reg-btn-fourteen"
                        : "btn reg-btn"
                      }`}
                  >
                    <i className="me-2">
                      <FeatherIcon icon="user" />
                    </i>
                    Sign Up
                  </Link>
                </li>
              </ul>
            ) : null}
            {(!pathnames.includes("/mentee/search-mentor") &&
              pathnames.includes("patient")) ||
              (pathnames.includes("Pharmacy") &&
                !pathnames.includes("/Pharmacy/Pharmacy-index")) ? (
              <>
                <ul className="nav header-navbar-rht">

                  <li className="nav-item dropdown has-arrow logged-item">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="user-img">
                        <img
                          className="rounded-circle"
                          src={IMG07}
                          width="31"
                          alt="Darren Elder"
                        />
                      </span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src={IMG07}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Richard Wilson</h6>
                          <p className="text-muted mb-0">Patient</p>
                        </div>
                      </div>
                      <Link className="dropdown-item" to="/mentee/dashboard">
                        Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/mentee/profile">
                        Profile Settings
                      </Link>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </>
            ) : pathnames.includes("mentor") &&
              !pathnames.includes("/mentor/mentor-register") &&
              !pathnames.includes("/mentee/search-mentor") &&
              !pathnames.includes("/pages/doctor-signup") &&
              !pathnames.includes("/edit-blog") &&
              !pathnames.includes("/mentor-blog") &&
              !pathnames.includes("/doctor-pending-blog") &&
              !pathnames.includes("/blog/add-blog") ? (
              <ul className="nav header-navbar-rht">

                <li className="nav-item dropdown has-arrow logged-item">
                  <Link
                    to="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-img">
                      <img
                        className="rounded-circle"
                        src={IMG01}
                        width="31"
                        alt="Darren Elder"
                      />
                    </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src={IMG01}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Darren Elde</h6>
                        <p className="text-muted mb-0">{pathnames.includes("mentor") ? 'Mentor' : 'Mentee'}</p>
                      </div>
                    </div>
                    <Link className="dropdown-item" to="/mentee/dashboard">
                      Dashboard
                    </Link>
                    <Link className="dropdown-item" to="/mentee/profile">
                      Profile Settings
                    </Link>
                    <Link className="dropdown-item" to="/login">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            ) : <ul className="nav header-navbar-rht">

              <li className="nav-item dropdown has-arrow logged-item">
                <Link
                  to="#"
                  className="dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                >
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src={IMG01}
                      width="31"
                      alt="Darren Elder"
                    />
                  </span>
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={IMG01}
                        alt="User Image"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Darren Elde</h6>
                      <p className="text-muted mb-0">{pathnames.includes("mentor") ? 'Mentor' : 'Mentee'}</p>
                    </div>
                  </div>
                  <Link className="dropdown-item" to="/mentee/dashboard">
                    Dashboard
                  </Link>
                  <Link className="dropdown-item" to="/mentee/profile">
                    Profile Settings
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Logout
                  </Link>
                </div>
              </li>
            </ul>}
            {pathnames.includes("/index-8") ? (
              <ul className="nav header-navbar-rht">
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
                <li className="login-in-fourteen">
                  <Link to="/pages/login-email" className="btn reg-btn">
                    Log In
                  </Link>
                </li>
                <li className="login-in-fourteen">
                  <Link to="/signup" className=" reg-btn-thirteen">
                    <span>Sign Up</span>
                    <div className="user-icon-header">
                      <i>
                        <FeatherIcon icon="user" />
                      </i>
                    </div>
                  </Link>
                </li>
              </ul>
            ) : pathnames.includes("/index-10") ? (
              <ul className="nav header-navbar-rht">
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
                <li className="login-in-fourteen">
                  <Link to="/pages/login-email" className="btn reg-btn">
                    <i className="me-2">
                      <FeatherIcon icon="video" />
                    </i>
                    Live Demo
                  </Link>
                </li>
                <li className="login-in-fourteen">
                  <Link
                    to="/signup"
                    className="btn btn-primary reg-btn reg-btn-fourteen"
                  >
                    <i className="me-2">
                      <FeatherIcon icon="shopping-cart" />
                    </i>
                    Buy Template
                  </Link>
                </li>
              </ul>
            ) : null}
            {pathnames.includes("/index-11") ? (
              <ul className="nav header-navbar-rht">
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
                <li className="login-in-sixteen">
                  <Link to="/pages/login-email" className="btn reg-btn">
                    <i className="me-2">
                      <FeatherIcon icon="lock" />
                    </i>
                    Login<span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </li>
                <li className="login-in-sixteen">
                  <Link
                    to="/signup"
                    className="btn btn-primary reg-btn reg-btn-sixteen"
                  >
                    <i className="me-2">
                      <FeatherIcon icon="user" />
                    </i>
                    Sign Up
                  </Link>
                </li>
              </ul>
            ) : null}

            {pathnames.includes("/index-13") ? (
              <ul className="nav header-navbar-rht">
                <li className="register-btn">
                  <Link to="/pages/login-email" className="btn log-btn">
                    <i className="feather-lock"></i>Login
                  </Link>
                </li>
                <li className="register-btn">
                  <Link to="/signup" className="btn reg-btn">
                    <i className="feather-user"></i>Sign Up
                  </Link>
                </li>
              </ul>
            ) : null}

            {/* {pathnames == "/react/template/index-13" ? (
                <ul className="nav header-navbar-rht">
                  <li className="register-btn">
                    <Link to="login-email.html" className="btn log-btn">
                      <i className="feather-lock"></i>Login
                    </Link>
                  </li>
                  <li className="register-btn">
                    <Link to="signup.html" className="btn reg-btn">
                      <i className="feather-user"></i>Sign Up
                    </Link>
                  </li>
                </ul>
              ) : null} */}
          </nav>

        </header>
      )}
    </>
  );
};

export default Header;
