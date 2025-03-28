import React, { useState } from "react";
import SidebarNav from "../sidebar";
import Pagination from "../Pagination/Pagination";
import PaymentDetails from "../CustomModals/PaymentDetails";
import { Tab, Tabs } from "react-bootstrap";
import ShowSessionList from "../CustomModals/ShowSessionList";

require("../../../client/assets/css/custom.css");

const MentorTracks = () => {
    const [key, setKey] = useState("completed");
    const [showPayment, setShowPaymentPopup] = useState(false);

    const sessionTracks = [
        {
            sessionTrackName: "Frontend Development",
            mentorshipTrackTime: "3 Months (6 sessions)",
            trackPrice: "₦50,000",
            sessionDuration: "30 Mins",
            createdAt: "2025-03-07",
            sessions: [
                { sessionTitle: "Introduction to HTML & CSS", description: "Basics of HTML structure, CSS styling, and responsive design." },
                { sessionTitle: "JavaScript Fundamentals", description: "Understanding JavaScript variables, functions, and loops." },
                { sessionTitle: "DOM Manipulation & Events", description: "Interacting with the DOM and handling user events." },
                { sessionTitle: "React Basics", description: "Introduction to React components, state, and props." },
                { sessionTitle: "API Integration & Fetching Data", description: "Working with REST APIs and handling data in a frontend application." },
                { sessionTitle: "Project Building & Deployment", description: "Building a real-world project and deploying it online." }
            ],
            trackOutcome: "By the end of this track, participants will have a strong foundation in frontend development, be able to build dynamic websites using React, and deploy applications to production."
        },
        {
            sessionTrackName: "Backend Development",
            mentorshipTrackTime: "3 Months (6 sessions)",
            trackPrice: "₦60,000",
            sessionDuration: "30 Mins",
            createdAt: "2025-03-07",
            sessions: [
                { sessionTitle: "Introduction to HTML & CSS", description: "Basics of HTML structure, CSS styling, and responsive design." },
                { sessionTitle: "JavaScript Fundamentals", description: "Understanding JavaScript variables, functions, and loops." },
                { sessionTitle: "DOM Manipulation & Events", description: "Interacting with the DOM and handling user events." },
                { sessionTitle: "React Basics", description: "Introduction to React components, state, and props." },
                { sessionTitle: "API Integration & Fetching Data", description: "Working with REST APIs and handling data in a frontend application." },
                { sessionTitle: "Project Building & Deployment", description: "Building a real-world project and deploying it online." }
            ],
            trackOutcome: "By the end of this track, participants will have a strong foundation in frontend development, be able to build dynamic websites using React, and deploy applications to production."
        },
        {
            sessionTrackName: "Data Science Basics",
            mentorshipTrackTime: "6 Months (12 sessions)",
            trackPrice: "₦75,000",
            sessionDuration: "30 Mins",
            createdAt: "2025-03-07",
            sessions: [
                { sessionTitle: "Introduction to HTML & CSS", description: "Basics of HTML structure, CSS styling, and responsive design." },
                { sessionTitle: "JavaScript Fundamentals", description: "Understanding JavaScript variables, functions, and loops." },
                { sessionTitle: "DOM Manipulation & Events", description: "Interacting with the DOM and handling user events." },
                { sessionTitle: "React Basics", description: "Introduction to React components, state, and props." },
                { sessionTitle: "API Integration & Fetching Data", description: "Working with REST APIs and handling data in a frontend application." },
                { sessionTitle: "Project Building & Deployment", description: "Building a real-world project and deploying it online." }
            ],
            trackOutcome: "By the end of this track, participants will have a strong foundation in frontend development, be able to build dynamic websites using React, and deploy applications to production."
        }
    ];





    return (
        <>
            <SidebarNav />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Mentorship Track List</h3>

                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">

                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive custom-table">
                                        <table className="table ">
                                            <thead className="">
                                                <tr>

                                                    <th>Session Track Name</th>
                                                    <th>Mentorship Track Duration</th>
                                                    <th>Track Price</th>
                                                    <th>Mentorship Track Time</th>
                                                    <th>Created At</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sessionTracks.map((session, index) => (
                                                    <tr key={index}>
                                                        <td>{session.sessionTrackName}</td>
                                                        <td>{session.mentorshipTrackTime}</td>
                                                        <td className="amounts cursor-pointer">{session.trackPrice}</td>
                                                        <td>{session.sessionDuration}</td>
                                                        <td >
                                                            {session.createdAt}
                                                        </td>

                                                        <td>

                                                            <button className="btn btn-primary" onClick={() => {
                                                                setShowPaymentPopup(true);
                                                            }} >View</button>

                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-flex justify-content-end mt-3">


                                        <Pagination
                                            current={1}
                                            total={5}
                                            pagination={() => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ShowSessionList
                    show={showPayment}
                    handleClose={() => {
                        setShowPaymentPopup(false);
                    }}
                    data={sessionTracks[0]?.sessions}
                />
            </div>
        </>
    );
};

export default MentorTracks;
