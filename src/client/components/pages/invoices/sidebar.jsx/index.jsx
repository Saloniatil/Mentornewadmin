import React from "react";
// import { IMG01 } from "./img";
// import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { doctor_thumb_02 } from "../../../imagepath";

const InvoiceSidebar = () => {
  let pathnames = window.location.pathname;
  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <Link to="#" className="booking-doc-img">
            <img src={doctor_thumb_02} alt="User Image" />
          </Link>
          <div className="profile-det-info">
            <h3>Darren Elder</h3>
            <div className="patient-details">
              <h5 className="mb-0">
                BDS, MDS - Oral &amp; Maxillofacial Surgery
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li
              className={
                pathnames.includes("/mentor/mentor-dashboard") ? "active" : ""
              }
            >
              <Link to="/mentor/mentor-dashboard">
                <i className="fas fa-columns" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/bookings") ? "active" : ""
              }
            >
              <Link to="/mentor/bookings">
                <i className="fas fa-calendar-check" />
                <span>Appointments</span>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/mentee-list") ? "active" : ""
              }
            >
              <Link to="/mentor/mentee-list">
                <i className="fas fa-user-injured" />
                <span>My Patients</span>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/schedule-timing") ? "active" : ""
              }
            >
              <Link to="/mentor/schedule-timing">
                <i className="fas fa-hourglass-start" />
                <span>Schedule Timings</span>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/available-timing") ? "active" : ""
              }
            >
              <Link to="/mentor/available-timing">
                <i className="fas fa-clock" />
                <span>Available Timings</span>
              </Link>
            </li>
            <li
              className={pathnames.includes("/pages/invoiced") ? "active" : ""}
            >
              <Link to="/pages/invoice">
                <i className="fas fa-file-invoice" />
                <span>Invoices</span>
              </Link>
            </li>
            <li
              className={pathnames.includes("/mentor/account") ? "active" : ""}
            >
              <Link to="/mentor/account">
                <i className="fas fa-file-invoice-dollar" />
                <span>Accounts</span>
              </Link>
            </li>
            <li
              className={pathnames.includes("/mentor/review") ? "active" : ""}
            >
              <Link to="/mentor/review">
                <i className="fas fa-star" />
                <span>Reviews</span>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/chat-mentor") ? "active" : ""
              }
            >
              <Link to="/mentor/chat-mentor">
                <i className="fas fa-comments" />
                <span>Message</span>
                <small className="unread-msg">23</small>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/profile-setting") ? "active" : ""
              }
            >
              <Link to="/mentor/profile-setting">
                <i className="fas fa-user-cog" />
                <span>Profile Settings</span>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/social-media") ? "active" : ""
              }
            >
              <Link to="/mentor/social-media">
                <i className="fas fa-share-alt" />
                <span>Social Media</span>
              </Link>
            </li>
            <li
              className={
                pathnames.includes("/mentor/doctor-change-passwword")
                  ? "active"
                  : ""
              }
            >
              <Link to="/mentor/doctor-change-passwword">
                <i className="fas fa-lock" />
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <Link to="/index-2">
                <i className="fas fa-sign-out-alt" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default InvoiceSidebar;
