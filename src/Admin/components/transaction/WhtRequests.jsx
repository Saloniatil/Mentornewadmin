import React, { useState } from "react";
import SidebarNav from "../sidebar";
import Pagination from "../Pagination/Pagination";
import PaymentDetails from "../CustomModals/PaymentDetails";
import { useParams, useSearchParams } from "react-router-dom";

const WhtRequests = () => {
    const params = useParams()
    const [search] = useSearchParams()

    const [showPayment, setShowPaymentPopup] = useState(false);

    const transactions = [
        {
            id: 1,
            menteeName: "John Doe",
            mentorName: "Dr. Smith",
            tin: "Tin-123",
            bundleName: "Full Stack Development",
            sessionName: "Introduction to Web Development",
            trackTime: "3 Months (6 Sessions)",
            trackPrice: "₦ 12,500",
            sessionPrice: "₦ 2083",
            date: "5 Mar 2025",
            time: "12:30 PM",
            status: "Completed",
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
                                <h3 className="page-title">WHT List</h3>

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
                                                    <th>Mentor Name (TIN)</th>

                                                    <th>Mentorship Track</th>
                                                    <th>Session Name</th>
                                                    <th>Track Duration</th>
                                                    <th>Track Price</th>
                                                    <th>Session Price</th>
                                                    <th>WHT %</th>
                                                    <th>Comisson Released Date & Time</th>
                                                    {search?.get('type') == 'unremmited' &&
                                                        <th>Action</th>}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transactions.map((transaction, index) => (
                                                    <tr key={transaction.id} className="border">
                                                        <td>{index + 1}</td>
                                                        <td>{transaction.menteeName}</td>
                                                        <td>{transaction.mentorName
                                                            + '  ' + '(' + transaction.tin + ')'}</td>

                                                        <td>{transaction.bundleName}</td>
                                                        <td>{transaction.sessionName}</td>
                                                        <td>{transaction.trackTime}</td>
                                                        <td className="">{transaction.trackPrice}</td>
                                                        <td className="" onClick={() => setShowPaymentPopup(true)}>
                                                            {transaction.sessionPrice}
                                                        </td>

                                                        <td>₦ 200</td>

                                                        <td>
                                                            {transaction.date} <small>{transaction.time}</small>

                                                        </td>
                                                        {search?.get('type') == 'unremmited' &&
                                                            <td>
                                                                <button className="btn btn-primary">
                                                                    Mark As Remmitted
                                                                </button>
                                                            </td>
                                                        }
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

export default WhtRequests;
