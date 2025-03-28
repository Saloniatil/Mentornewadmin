import React, { useState } from "react";
import SidebarNav from "../sidebar";
import Pagination from "../Pagination/Pagination";
import PaymentDetails from "../CustomModals/PaymentDetails";

const CancelationFees = () => {
    const [showPayment, setShowPaymentPopup] = useState(false);

    const transactions = [
        {
            id: 1,
            menteeName: "John Doe",
            mentorName: "Dr. Smith",
            bundleName: "Full Stack Development",
            sessionName: "Introduction to Web Development",
            trackTime: "3 Months (6 Sessions)",
            trackPrice: "₦ 500",
            date: "5 Mar 2025",
            updatedDate: "7 Mar 2025",
            status: "Cancelled",
            cancelledBy: "John Doe",
        },

        {
            id: 1,
            menteeName: "John Doe",
            mentorName: "Dr. Smith",
            bundleName: "Full Stack Development",
            sessionName: "Introduction to Web Development",
            trackTime: "3 Months (6 Sessions)",
            trackPrice: "₦ 500",
            date: "5 Mar 2025",
            updatedDate: "7 Mar 2025",
            status: "Rescheduled",
            cancelledBy: "Dr. Smith",
        },

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
                                <h3 className="page-title">Cancellation / Reschedule Transactions</h3>

                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive custom-table">
                                        <table className="table">
                                            <thead className="bg-gray-200">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Mentee Name</th>
                                                    <th>Mentor Name</th>
                                                    <th>Mentorship Track Name</th>
                                                    <th>Session Name</th>
                                                    <th>Track Duration</th>
                                                    <th>Fees Paid</th>
                                                    <th>Booking Date & Time </th>
                                                    <th>Updated Date & Time</th>
                                                    <th>Status</th>
                                                    <th>Cancelled By / Rescheduled By  </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transactions.map((transaction, index) => (
                                                    <tr key={index} className="border">
                                                        <td>{index + 1}</td>
                                                        <td>{transaction.menteeName}</td>
                                                        <td>{transaction.mentorName}</td>
                                                        <td>{transaction.bundleName}</td>
                                                        <td>{transaction.sessionName}</td>
                                                        <td>{transaction.trackTime}</td>
                                                        <td>{transaction.trackPrice}</td>
                                                        <td>{transaction.date}</td>
                                                        <td>{transaction.updatedDate}</td>
                                                        <td>{transaction.status}</td>
                                                        <td>{transaction.cancelledBy}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
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
                <PaymentDetails
                    show={showPayment}
                    handleClose={() => {
                        setShowPaymentPopup(false);
                    }}
                />
            </div>


        </>
    );
};

export default CancelationFees;
