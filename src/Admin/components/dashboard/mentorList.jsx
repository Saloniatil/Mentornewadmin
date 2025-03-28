import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import {
  avatar03,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_04,
  doctor_thumb_05,
} from "../imagepath";
import { Link } from "react-router-dom";
const MentorListDashboard = () => {
  const data = [
    {
      id: 1,
      MentorName: "Ruby Perrin",
      Speciality: "Maths",
      Earned: "$3200.00 ",
      Date: "27 Sep 2024",
      time: "03.40 PM",
      image: avatar08,
    },
    {
      id: 2,
      MentorName: "Darren Elder",
      Speciality: "Business Maths",
      Earned: "$3100.00 ",
      Date: "1 Nov 2024",
      time: "02.59 PM",
      image: avatar07,
    },
    {
      id: 3,
      MentorName: "Deborah Angel",
      Speciality: "Algebra",
      Earned: "$4000.00",
      Date: "3 Nov 2024",
      time: "09.59 PM",
      image: avatar03,
    },
    {
      id: 4,
      MentorName: "Sofia Brient",
      Speciality: "Integrated Sum",
      Earned: "$3200.00 ",
      Date: "16 Jun 2024",
      time: "04.50 PM",
      image: avatar06,
    },
    {
      id: 5,
      MentorName: "Marvin Campbell",
      Speciality: "Flow chart",
      Earned: "$3500.00 ",
      Date: "22 Aug 2024",
      time: "01.50 PM",
      image: avatar05,
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
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.MentorName.length - b.MentorName.length,
    },
    {
      title: "Course",
      dataIndex: "Speciality",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },

    {
      title: "Earned",
      dataIndex: "Earned",
      sorter: (a, b) => a.Earned.length - b.Earned.length,
    },
    {
      title: "Review",
      dataIndex: "Rating",
      render: () => (
        <>
          <span>
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star-o text-secondary" />
          </span>
        </>
      ),
      sorter: (a, b) => a.Rating.length - b.Rating.length,
    },
  ];
  return (
    <>
      <div className="col-md-6 d-flex">
        {/* Recent Orders */}
        <div className="card card-table flex-fill">
          <div className="card-header">
            <h4 className="card-title">Mentor List</h4>
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
    </>
  );
};
export default MentorListDashboard;
