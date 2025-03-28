import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import {
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_04,
  doctor_thumb_05,
  doctor_thumb_06,
  doctor_thumb_07,
  doctor_thumb_08,
  doctor_thumb_09,
  doctor_thumb_10,
  patient1,
  patient10,
  patient2,
  patient3,
  patient4,
  patient5,
  patient6,
  patient7,
  patient8,
  patient9,
} from "../imagepath";
import SidebarNav from "../sidebar";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import { Link } from "react-router-dom";
const Reviews = () => {
  const data = [
    {
      id: 1,
      MenteeName: "Michelle Fairfax",
      MentorName: "Sofia Brient",
      Description: " ",
      Date: "27 Sep 2024",
      time: "03.40 PM",
      image: patient4,
      images1: doctor_thumb_04,
    },
    {
      id: 2,
      MenteeName: "Carl Kelly",
      MentorName: "Deborah Angel",
      Description: " ",
      Date: "1 Nov 2024",
      time: "02.59 PM",
      image: patient3,
      images1: doctor_thumb_03,
    },
    {
      id: 3,
      MenteeName: "Charlene Reed",
      MentorName: "Ruby Perrin",
      Description: " ",
      Date: "3 Nov 2024",
      time: "09.59 PM",
      image: patient1,
      images1: doctor_thumb_01,
    },
    {
      id: 4,
      MenteeName: "Daniel Griffing",
      MentorName: "Paul Richard",
      Description: " ",
      Date: "16 Jun 2024",
      time: "04.50 PM",
      image: patient8,
      images1: doctor_thumb_08,
    },
    {
      id: 5,
      MenteeName: "Elsie Gilley",
      MentorName: "Katharine Berthold",
      Description: " ",
      Date: "22 Aug 2024",
      time: "01.50 PM",
      image: patient6,
      images1: doctor_thumb_06,
    },
    {
      id: 6,
      MenteeName: "Gina Moore",
      MentorName: "Marvin Campbell",
      Description: " ",
      Date: "24 Sep 2024",
      time: "04.38 PM",
      image: patient5,
      images1: doctor_thumb_05,
    },
    {
      id: 7,
      MenteeName: "Harry Williams",
      MentorName: "Olga Barlow",
      Description: " ",
      Date: "15 Feb 2024",
      time: "07.30 PM",
      image: patient10,
      images1: doctor_thumb_10,
    },
    {
      id: 8,
      MenteeName: "Joan Gardner",
      MentorName: "Linda Tobin",
      Description: " ",
      Date: "21 Jul 2024",
      time: "05.50 PM",
      image: patient7,
      images1: doctor_thumb_07,
    },
    {
      id: 9,
      MenteeName: "Travis Trimble",
      MentorName: "Darren Elder",
      Description: " ",
      Date: "2 Nov 2024",
      time: "08.40 PM",
      image: patient2,
      images1: doctor_thumb_02,
    },
    {
      id: 10,
      MenteeName: "Walter Roberson",
      MentorName: "John Gibbs",
      Description: " ",
      Date: "11 Mar 2024",
      time: "05.5 PM",
      image: patient9,
      images1: doctor_thumb_09,
    },
  ];

  const columns = [
    {
      title: "Mentee Name",
      dataIndex: "MenteeName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.MenteeName.length - b.MenteeName.length,
    },
    {
      title: "Mentor Name",
      dataIndex: "MentorName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.images1} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.MentorName.length - b.MentorName.length,
    },
    {
      title: "Rating",
      dataIndex: "",
      render: () => (
        <span>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star text-warning"></i>
          <i className="fe fe-star-o text-secondary"></i>
        </span>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Description",
      dataIndex: "Description",
      render: () => (
        <p className="my-1">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit
        </p>
      ),
      sorter: (a, b) => a.Description.length - b.Description.length,
    },
    {
      title: "Date",
      render: (record) => (
        <>
          <span className="user-name">{record.Date}</span>
          <br />
          <span className="d-block " style={{ color: "black" }}>
            {record.time}
          </span>
        </>
      ),
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <Link
            href="#"
            className="me-1 btn btn-sm bg-danger-light"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="fe fe-trash"></i> Delete
          </Link>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
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
                <h3 className="page-title">Reviews</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Reviews</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      pagination={{
                        total: data.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={data}
                      rowKey={(record) => record.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="delete_modal"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-content p-2">
                <h4 className="modal-title">Delete</h4>
                <p className="mb-4">Are you sure want to delete?</p>
                <button type="button" className="btn btn-primary mx-1">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
