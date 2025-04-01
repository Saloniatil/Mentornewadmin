import React, { useState, useEffect } from "react";
// import FeatherIcon from "feather-icons-react";
import SidebarNav from "../sidebar";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { avatar12 } from "../imagepath";
import axios from "axios";
import { API_BASE_URL } from "../../../Helper/apicall";
import { toast } from "react-toastify";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profileImage: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordErrors, setPasswordErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(""); // For instant preview
  const [selectedFile, setSelectedFile] = useState(null); // Holds selected file
  const [profileImage, setProfileImage] = useState(""); // Stores saved profile image


  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
  
      // Show instant preview
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    } else {
      toast.error("Please select a valid image file (JPG, PNG, etc.)");
    }
  };
  
  
  // Fetch Profiledetail from API
  useEffect(() => {
    const profileDetail = async () => {
      setLoading(true); // Start loading
      try {
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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return; 
  
    console.log("Before Save:", profileImage);  

    const formData = new FormData();
    formData.append("profileImage", selectedFile);
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/admin/profileUpdate`,
        formData,
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
      );
  
      if (response.data.status === 200) {
        toast.success("Profile updated successfully!");
  
        const updatedImageUrl = `${API_BASE_URL}/${response.data.profileImage}?t=${Date.now()}`;
        
        console.log("After Save:", updatedImageUrl);  
        
        setProfileImage(updatedImageUrl); // Update state with new image URL
        setPreviewImage(""); // Reset preview
        setSelectedFile(null);
      } else {
        toast.error(response.data.message || "Profile update failed.");
      }
    } catch (error) {
      console.error("Update Error:", error);
      toast.error("Error updating profile.");
    }
  };
  

  //// Confirm password
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New Password and Confirm Password do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/api/admin/adminUpdatePassword`,
        passwordData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (response.data.status === 201) {
        toast.error(response.data.message); // "Old password is incorrect"
      } else if (response.data.status === 200) {
        toast.success("Password updated successfully!");
        setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
      } else {
        toast.error("Failed to update password.");
      }
    } catch (error) {
      console.error("Update Error:", error);
      toast.error("An error occurred while updating the password.");
    }
  };

  // Validation function
  const validate = () => {
    let newErrors = {};
    if (!userData.firstName) newErrors.firstName = "First Name is required";
    if (!userData.lastName) newErrors.lastName = "Last Name is required";
    if (!userData.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  // Upload profile image
  // Upload profile image and update state
  const uploadProfileImage = async (formData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/admin/profileUpdate`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.status === 200) {
        toast.success("Profile image updated successfully!");
        setUserData((prevData) => ({
          ...prevData,
          profileImage: response.data.profileImage, // Update with new image URL from API
        }));
      } else {
        toast.error("Failed to update profile image.");
      }
    } catch (error) {
      toast.error("Error updating profile image.");
    }
  };

  useEffect(() => {
    if (profileImage) {
      setProfileImage(profileImage + "?t=" + Date.now()); // Force reload
    }
  }, [profileImage]);
  
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">My Profile</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="profile-header">
                <div className="row align-items-center">
                  <div className="col-auto profile-image">
                    <label htmlFor="profileImageInput">
                      <img
                        className="rounded-circle"
                        alt="User Image"
                        src={previewImage || `${API_BASE_URL}/${profileImage}?t=${Date.now()}`}
                        style={{ cursor: "pointer" }}
                      />
                    </label>
                    <input
                      type="file"
                      id="profileImageInput"
                      accept="image/*" 
                      style={{ display: 'none' }} // Hide file input
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="col ml-md-n2 profile-user-info">
                    <h4 className="user-name mb-0">{userData?.firstName || ""} {userData?.lastName || ""}</h4>
                    <h6 className="text-muted">{userData?.email || ""} </h6>
                  </div>
                </div>
              </div>
              <div className="tab-content profile-tab-cont">
                {/* Personal Details Tab */}
                <div className="tab-pane fade show active" id="per_details_tab">
                  {/* Personal Details */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card px-3 py-3">
                        <form onSubmit={handleSubmit}>
                          <div className="row form-row">
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstName"
                                  onChange={handleChange}
                                  value={userData?.firstName?.trim() || ""}
                                  defaultValue="John"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>Last Name</label>
                                <input
                                  type="text"
                                  name="lastName"
                                  className="form-control"
                                  onChange={handleChange}
                                  value={userData?.lastName || ""}
                                  defaultValue="Doe"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>Email ID</label>
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  onChange={handleChange}
                                  value={userData?.email || ""}
                                  defaultValue="johndoe@example.com"
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary "
                          >
                            Save Changes
                          </button>
                        </form>
                      </div>
                      {/* Edit Details Modal */}

                    </div>
                    {/* <form onSubmit={handlePasswordSubmit}></form> */}
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Change Password</h5>
                          <div className="row">
                            <div className="col-md-10 col-lg-6">
                              <form onSubmit={handlePasswordSubmit}>
                                <div className="form-group">
                                  <label>Old Password</label>
                                  <input
                                    type="password"
                                    name="oldPassword"
                                    className="form-control"
                                    onChange={handlePasswordChange}
                                    value={passwordData.oldPassword}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>New Password</label>
                                  <input
                                    type="password"
                                    name="newPassword"
                                    className="form-control"
                                    onChange={handlePasswordChange}
                                    value={passwordData.newPassword}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Confirm Password</label>
                                  <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    onChange={handlePasswordChange}
                                    value={passwordData.confirmPassword}
                                  />
                                </div>
                                <button className="btn btn-primary" type="submit">
                                  Save Changes
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Personal Details */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Page Wrapper */}
    </>
  );
};

export default Profile;
