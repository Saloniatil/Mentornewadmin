import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";

// import SidebarNav from '../sidebar';
import {
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_04,
  doctor_thumb_05,
  patient1,
  patient2,
  patient3,
  patient4,
  patient5,
} from "../imagepath";
import { Link } from "react-router-dom";
const AppointmentList = () => {
  const data = [
    {
      id: 1,
      MentorName: "James Amen",
      Speciality: "Dental ",
      MenteeName: "Charlene Reed",
      Earned: "$5000.00 ",
      Date: "27 Sep 2024",
      time: "11.00 AM - 11.15 AM",
      Amount: "$200.00",
      image: avatar01,
      images1: avatar06,
      Status: "checkbox",
    },
    {
      id: 2,
      MentorName: "Darren Elder",
      Speciality: "Dental ",
      MenteeName: "Travis Trimble",
      Earned: "$3300.00 ",
      Date: "1 Nov 2024",
      time: "11.00 PM - 11.35 PM",
      Amount: "$300.00",
      image: avatar02,
      images1: avatar07,
      Status: "checkbox",
    },
    {
      id: 3,
      MentorName: "Deborah Angel",
      Speciality: "Cardiology ",
      MenteeName: "Carl Kelly",
      Earned: "$4100.00",
      Date: "3 Nov 2024",
      time: "12.00 PM - 12.15 PM",
      Amount: "$150.00",
      image: avatar03,
      images1: avatar08,
      Status: "checkbox",
    },
    {
      id: 4,
      MentorName: "Sofia Brient",
      Speciality: "Urology ",
      MenteeName: "Michelle Fairfax",
      Earned: "$4000.00 ",
      Date: "16 Jun 2024",
      time: "1.00 PM - 1.20 PM",
      Amount: "$150.00",
      image: avatar04,
      images1: avatar09,
      Status: "checkbox",
    },
    {
      id: 5,
      MentorName: "Marvin Campbell",
      Speciality: "Orthopaedics ",
      MenteeName: "Gina Moore",
      Earned: "$2000.00 ",
      Date: "22 Aug 2024",
      time: "1.00 PM - 1.15 PM",
      Amount: "$200.00",
      image: avatar05,
      images1: avatar10,
      Status: "checkbox",
    },
  ];
  const columns = [
    {
      title: "Mentor Name",
      dataIndex: "MentorName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile" className="text-decoration-none">
            {text}
          </Link>
        </>
      ),
      sorter: (a, b) => a.MentorName.length - b.MentorName.length,
    },
    {
      title: "Speciality",
      dataIndex: "Speciality",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },

    {
      title: "Mentee Name",
      dataIndex: "MenteeName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.images1} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.MenteeName.length - b.MenteeName.length,
    },

    {
      title: "Apointment Time",
      render: (record) => (
        <>
          <span className="user-name">{record.Date}</span>
          <br />
          <span className="d-block">{record.time}</span>
        </>
      ),
      sorter: (a, b) => a.Date.length - b.time.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => {
        return (
          <div className="status-toggle">
            <input
              id={`rating${record?.id}`}
              className="check"
              type="checkbox"
              defaultChecked=""
            />
            <label
              htmlFor={`rating${record?.id}`}
              className="checktoggle checkbox-bg"
            >
              checkbox
            </label>
          </div>
        );
      },
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {/* Recent Orders */}
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
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
                  //  onChange={this.handleTableChange}
                />
              </div>
            </div>
          </div>
          {/* /Recent Orders */}
        </div>
      </div>
    </>
  );
};
export default AppointmentList;
