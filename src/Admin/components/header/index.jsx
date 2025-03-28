/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
// import { avatar01, avatar02, avatar03, avatar05, avatar06, logo, logoSmall } from '../imagepath'
// import { Appcontext } from "../../../approuter";
import { avatar01, avatar12, doctor_thumb_01, logo, logo1, logoSmall, patient1, patient2, patient3,} from "../imagepath";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../Helper/apicall";

const Header = (props) => {
  // let pathname = props.location.pathname;
  // const { isAuth, setIsAuth } = useContext(Appcontext);
  // const [task, settask] = useState(true);
  // const [task1, settask1] = useState(true);
  // const [dropdown, setdropdown] = useState(false);
  // const [dropdown1, setdropdown1] = useState(false);

  // const handletheme = () => {
  //   document.body.classList.toggle("darkmode");
  //   settask(!task);
  //   settask1(!task1);
  // };
  // const handledropdown = () => {
  //   setdropdown(!dropdown);
  //   setdropdown1(false);
  // };
  // const handledropdown1 = () => {
  //   setdropdown1(!dropdown1);
  //   setdropdown(false);
  // };
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };
  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
  };
  if (window.pathname?.split("/")[1] === "admin") {
    require("../../assets/css/feathericon.min.css");
    require("../../assets/css/font-awesome.min.css");
    require("../../assets/css/custom.css");
  }
  const exclusionArray = ["/admin/login"];
  if (exclusionArray.indexOf(window.pathname) >= 0) {
    return "";
  }
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/admin/login"); // Redirect to login page
  };

  useEffect(() => {
    const profileDetail = async () => {
      setLoading(true); // Start loading
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${API_BASE_URL}/api/admin/profileDetail`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.data.status === 200) {
          setUserData(response.data.data);
        } else {
          console.error("Error fetching FAQs:", response.data.message);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    profileDetail();
  }, [token]);

   // Construct full image URL if necessary
   const profileImage = userData?.profileImage
   ? `${API_BASE_URL}/${userData.profileImage}`
   : avatar12; // Default avatar if no image

  return (
    <>
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/admin" className="logo">
            <img src={logo1} alt="Logo" style={{ height: '60px' }} />
          </Link>
          <Link to="/admin" className="logo logo-small">
            <img src={logoSmall} alt="Logo" width="30" height="30" />
          </Link>
        </div>
        <Link to="#" id="toggle_btn" onClick={handlesidebar}>
          <i className="fe fe-text-align-left"></i>
        </Link>
        {/* /Logo */}
        {/* Mobile Menu Toggle */}
        <Link
          to="#"
          className="mobile_btn mt-3"
          id="mobile_btn"
          onClick={() => handlesidebarmobilemenu()}
        >
          <i className="fa fa-bars" />
        </Link>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          {/* Notifications */}
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
              {!loading && (
                <img className="rounded-circle" src={profileImage} width={31} alt="User" />
              )}
            </span>
            </Link>
            <div className="dropdown-menu">

              <Link className="dropdown-item" to="/admin/profile">
                My Profile
              </Link>

              {/* <Link className="dropdown-item" to="/admin/login" onClick={handleLogout}>
                Logout
              </Link> */}
              <Link className="dropdown-item" to="#"
                onClick={handleLogout}
              > Logout
              </Link>

            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Right Menu */}
      </div>

      {/* /Header */}
    </>
  );
};

export default Header;
