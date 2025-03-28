import React, { useState } from "react";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import {
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,

} from "../imagepath";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import Pagination from "../Pagination/Pagination";
import { FaEye, FaWallet } from "react-icons/fa";
import { faL } from "@fortawesome/free-solid-svg-icons";
import RejectReason from "../CustomModals/RejectReson";

const Mentor = () => {
  const [status, setStatus] = useState(false)
  const data = [
    {
      id: 1,
      MentorName: "Darren Elder",
      MentorEmail: "darren@gmail.com",
      Course: "Maths",
      Earned: "₦ 5000.00 ",
      Date: "TIN-1232",
      time: "4.50 AM",
      image: avatar06,
    },
    {
      id: 2,
      MentorName: "Deborah Angel",
      MentorEmail: "deborah@gmail.com",

      Course: "Business Maths ",
      Earned: "₦  3300.00 ",
      Date: "TIN-1232",
      time: "9.40 AM",
      image: avatar07,
    },
    {
      id: 3,
      MentorName: "John Gibbs",
      MentorEmail: "john@gmail.com",

      Course: "Algebra",
      Earned: "₦ 4100.00",
      Date: "TIN-1232",
      time: "02.59 PM",
      image: avatar08
    },
    {
      id: 4,
      MentorName: "Katharine Berthold",
      MentorEmail: "katharine@gmail.com",

      Course: "Maths",
      Earned: "₦ 4000.00 ",
      Date: "TIN-1232",
      time: "02.50 PM",
      image: avatar11,
    },
    {
      id: 5,
      MentorName: "Linda Tobin",
      MentorEmail: "linda@gmail.com",

      Course: "Flow chart",
      Earned: "₦ 2000.00 ",
      Date: "N/A",
      time: "01.59 AM",
      image: avatar10,
    },
  ];

  const [filters, setFilters] = useState({
    MentorName: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredData = data.filter((record) =>
    Object.keys(filters).every((key) =>
      filters[key] === "" || record[key].toLowerCase().includes(filters[key].toLowerCase())
    )
  );

  const resetFilters = () => {
    setFilters({ MentorName: "" });
  };
  const pathname = window.location.pathname;

  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Mentor List</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="row mb-3">

                <div className="col-md-3 mb-2 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Mentor Name"
                    name="MentorName"
                    value={filters.MentorName}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="col-md-3 d-flex gap-2 ">
                  <button className="btn-primary-new  " onClick={() => { }}>Search</button>
                  <button className="btn btn-secondary" onClick={resetFilters}>Reset</button>
                </div>
              </div>
              <div className="card">

                <div className="card-body">
                  <div className="table-responsive custom-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-start">Name / Email</th>
                          <th>TIN Number</th>
                          <th>Earned</th>
                          <th>Account Status</th>
                          <th>Mentorship Tracks</th>
                          {pathname?.split("/admin/")[1] == 'pending-mentors' && <th>Verify Status</th>}
                          {
                            pathname?.split("/admin/")[1] == 'rejected-mentors'

                            &&
                            <>
                              <th>Rejected Status</th>
                              <th>Rejected Reason</th>
                            </>
                          }
                          <th>Last Login Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((mentor) => (
                          <tr key={mentor.id}>
                            <td className="email-anme text-start">
                              <div>
                                <Link className="avatar mx-2" to="#">
                                  <img
                                    className="rounded-circle"
                                    src={mentor.image}
                                    alt={mentor.MentorName}
                                  />
                                </Link>
                              </div>
                              <div>
                                <Link to='#'>{mentor.MentorName}</Link> <br />
                                <span>{'Mentee@gmail.com'}</span>
                              </div>
                            </td>

                            <td>
                              <span className="user-name">{mentor.Date}</span>

                            </td>
                            <td>{mentor.Earned}</td>
                            <td>
                              <div className="status-toggle">
                                <input
                                  id={`rating${mentor.id}`}
                                  className="check"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor={`rating/${mentor.id}`}
                                  className="checktoggle checkbox-bg"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <td>
                              <Link to={`/admin/mentor-tracks/${mentor.id}`} >
                                <button className="btn btn-primary">View</button>
                              </Link>
                            </td>

                            {pathname?.split("/admin/")[1] == 'rejected-mentors' &&
                              <>
                                <td>
                                  Hard Rejected
                                </td>


                                <td>
                                  Fake Mentor
                                </td>
                              </>
                            }


                            {
                            (  pathname?.split("/admin/")[1] == 'pending-mentors' ||
                              pathname?.split("/admin/")[1] == 'reverify-mentors')
                              && <td>
                              <select className="form-select" onChange={() => {
                                setStatus(true)
                              }}>
                                <option value={'pending'}>Pending</option>
                                <option value={'pending'}>Approved</option>
                                <option value={'soft-reject'}>Soft Reject</option>
                                <option value={'hard-reject'}>Hard Reject</option>
                              </select>
                            </td>}
                            <td>1 March 2020</td>
                            <td>

                              <div className="d-flex gap-2">

                                <Link to={`/admin/mentor-detail/${mentor.id}`} >
                                  <FaEye fontSize={"18px"} />
                                </Link>
                                {pathname?.split("/admin/")[1] == 'deleted-mentors' ? '' :
                                  <MdDelete fontSize={"18px"} className="text-danger delete-icon mt-1" />}



                                {
                                  pathname?.split("/admin/")[1] != 'deleted-mentors' &&
                                  <>
                                    {pathname?.split("/admin/")[1] == 'approved-mentors' &&
                                      <>
                                        <Link to={`/admin/mentor-wallet/${mentor.id}`} >
                                          <FaWallet fontSize={"18px"} />
                                        </Link>
                                        {/* <MdDelete fontSize={"18px"} className="text-danger delete-icon mt-1" /> */}
                                      </>
                                    }

                                    <Link to={`/admin/mentor-sessions/${mentor.id}`} >
                                      <button className="btn btn-primary">Sessions</button>
                                    </Link>
                                  </>
                                }
                              </div>
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
        <RejectReason
          show={status}
          handleClose={() => {
            setStatus(false);
          }}
        />
      </div>
    </>
  );
};

export default Mentor;
