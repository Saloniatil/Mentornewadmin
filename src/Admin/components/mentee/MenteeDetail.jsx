import React from "react";
import SidebarNav from "../sidebar";
import { FaStar } from "react-icons/fa";
import ShowImage from "../CustomModals/ShowImage";
require("../../../client/assets/css/custom.css");

const MentorDetail = () => {
    const [show, setShow] = React.useState(false);
    const [image, setImage] = React.useState('');
    const mentorAvailability = [
        { date: "2025-03-11", day: "Monday", times: ["9:30-10:30 AM", "2:00-3:00 PM"] },
        { date: "2025-03-12", day: "Tuesday", times: ["10:00-11:00 AM", "4:00-5:00 PM"] },
        { date: "2025-03-13", day: "Wednesday", times: ["9:00-10:00 AM", "3:00-4:00 PM"] },
        { date: "2025-03-14", day: "Thursday", times: ["10:30-11:30 AM", "5:00-6:00 PM"] },
        { date: "2025-03-15", day: "Friday", times: ["9:00-10:00 AM", "2:30-3:30 PM"] },
        { date: "2025-03-16", day: "Saturday", times: ["11:00 AM-12:00 PM", "4:30-5:30 PM"] }
    ];

    const mentorDetails = {
        jobTitle: "Senior Software Engineer",
        company: "Tech Corp",
        experience: "8 years",
        expertise: "Full Stack Development",
        linkedin: "https://www.linkedin.com/in/mentorprofile",
        aboutMe: "Passionate about building scalable applications and mentoring developers.",
        bankDetails: {
            accountName: "John Doe",
            accountNumber: "1234567890",
            bankName: "Bank of America",
            bankCode: "BOA123",
            bvn: "12345678901" // Optional
        }
    };

    return (
        <>
            <SidebarNav />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header details">
                        <h3 className="page-title">Mentee Detail</h3>
                    </div>

                    {/* Profile Card */}
                    <div className="card col-md-10 mx-auto p-3">
                        <div className="card-body d-flex align-items-center">
                            <div className="mentor-img me-3">
                                <img src="data:image/png;base64,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" alt="Profile" className="rounded-circle" width="80" height="80" />
                            </div>
                            <div>
                                <h4 className="usr-name">Jonathan Doe</h4>
                                <p>Email: jhonathan@gmail.com</p>
                                <p>Phone: +91 9876543210</p>
                                <p className="text-muted">Tamil Nadu, India</p>

                                <span>  <FaStar color="orange" fontSize={'20px'} />  {" "} 4.7 (28)</span>

                            </div>
                        </div>
                    </div>
                    {/* Profile Card */}
                    <div className="card col-md-10 mx-auto p-3">
                        <div className="card-body">
                            <h4 className="mb-3">Personal Information</h4>

                            {/* <p><strong>Area of Expertise:</strong> {mentorDetails.expertise}</p> */}
                            <p><strong>Learning Goal:</strong> {mentorDetails.expertise}</p>
                            <p><strong>LinkedIn URL:</strong> <a href={mentorDetails.linkedin} target="_blank" rel="noopener noreferrer">{mentorDetails.linkedin}</a></p>
                            <p><strong>About Me:</strong> {mentorDetails.aboutMe}</p>


                        </div>

                    </div>



                </div>
            </div>
            <ShowImage
                show={show}
                image={image}
                handleClose={() => setShow(false)}

            />
        </>
    );
};

export default MentorDetail;
