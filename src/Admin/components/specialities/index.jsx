import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import {
  user,
  user_1,
  user_2,
  user_3,
  user_4,
  user_5,
  user_6,
  user_7,
} from "../imagepath";
import { Link } from "react-router-dom";

const Specialities = () => {
  const data = [
    {
      id: 1,
      MenteeName: "1",
      Specialities: "Painting",
      Description: " ",
      Date: "27 Sep 2024",
      time: "03.40 PM",
      image: user_5,
    },
    {
      id: 2,
      MenteeName: "2",
      Specialities: "Interior",
      Description: " ",
      Date: "1 Nov 2024",
      time: "02.59 PM",
      image: user_1,
    },
    {
      id: 3,
      MenteeName: "3",
      Specialities: "Interior",
      Description: " ",
      Date: "3 Nov 2024",
      time: "09.59 PM",
      image: user_2,
    },
    {
      id: 4,
      MenteeName: "4",
      Specialities: "Construction",
      Description: " ",
      Date: "16 Jun 2024",
      time: "04.50 PM",
      image: user_3,
    },
    {
      id: 5,
      MenteeName: "5",
      Specialities: "Computer",
      Description: " ",
      Date: "22 Aug 2024",
      time: "01.50 PM",
      image: user_4,
    },
    {
      id: 6,
      MenteeName: "6",
      Specialities: "Cleaning",
      Description: " ",
      Date: "16 Jun 2024",
      time: "04.50 PM",
      image: user_6,
    },
    {
      id: 7,
      MenteeName: "7",
      Specialities: "Carpentry",
      Description: " ",
      Date: "22 Aug 2024",
      time: "01.50 PM",
      image: user_7,
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "MenteeName",
      sorter: (a, b) => a.MenteeName.length - b.MenteeName.length,
    },
    {
      title: "Category",
      dataIndex: "Specialities",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img src={record.image} className="avatar-img rounded-circle" />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.Specialities.length - b.Specialities.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a, b) => a.Date.length - b.Date.length,
    },
    {
      title: "Reviews",
      dataIndex: "",
      render: () => (
        <>
          <div className="text-center">
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star text-warning"></i>
            <i className="fe fe-star-o text-secondary"></i>
          </div>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Action",
      className: "text-end",
      dataIndex: "",
      render: () => (
        <div className="text-end">
          <Link
            className="btn btn-sm bg-success-light me-2"
            data-bs-toggle="modal" data-bs-target="#edit_modal"
            to="#edit_modal"
          >
            <i className="fe fe-pencil" />
            Edit
          </Link>
          <Link
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
            className="btn btn-sm bg-danger-light"
          >
            <i className="fe fe-trash" /> Delete
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
              <div className="col-sm-7 col-aut0">
                <h3 className="page-title">Categories</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Categories</li>
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
                      //  onChange={this.handleTableChange}
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
        id="edit_specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Specialities</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row form-row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Specialities</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Cardiology"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Save Changes
                </button>
              </form>
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
                  Save{" "}
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
      <div
        className="modal fade"
        id="Add_Specialities_details"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Specialities</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row form-row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Specialities</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <label>Image</label>
                      <input type="file" className="form-control" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Edit Modal */}
        <div
          className="modal fade"
          id="edit_modal"
          aria-hidden="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-content p-2">
                  <div className="modal-header border-0">
                    <h4 className="modal-title">Edit</h4>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <form
                        id="update_category"
                        method="post"
                        autoComplete="off"
                        encType="multipart/form-data"
                        noValidate="novalidate"
                        className="bv-form"
                      >
                        <button
                          type="submit"
                          className="bv-hidden-submit"
                          style={{
                            display: "none",
                            width: "0px",
                            height: "0px",
                          }}
                        />
                        <input
                          type="hidden"
                          name="csrf_token_name"
                          defaultValue="104dbdaf79d7d8e21e4ae9991d166669"
                        />
                        <div className="form-group">
                          <label>Category Name</label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Painting"
                            name="category_name"
                            id="category_name"
                            data-bv-field="category_name"
                          />
                          <input
                            className="form-control"
                            type="hidden"
                            defaultValue={8}
                            name="category_id"
                            id="category_id"
                          />
                          <small
                            className="help-block"
                            data-bv-validator="remote"
                            data-bv-for="category_name"
                            data-bv-result="NOT_VALIDATED"
                            style={{ display: "none" }}
                          >
                            This category name is already exist
                          </small>
                          <small
                            className="help-block"
                            data-bv-validator="notEmpty"
                            data-bv-for="category_name"
                            data-bv-result="NOT_VALIDATED"
                            style={{ display: "none" }}
                          >
                            Please enter category name
                          </small>
                        </div>
                        <div className="form-group">
                          <label>Category Image</label>
                          <input
                            className="form-control"
                            type="file"
                            name="category_image"
                            id="category_image"
                          />
                        </div>
                        <div className="form-group">
                          <div className="avatar">
                            <img
                              className="avatar-img rounded"
                              src={user}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button
                            className="btn btn-primary me-2"
                            name="form_submit"
                            value="submit"
                            type="submit"
                          >
                            Save Changes
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Modal */}
        {/* Delete Model */}
        <div
          className="modal fade"
          id="delete_modal"
          role="dialog"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/*	<div class="modal-header">
						<h5 class="modal-title">Delete</h5>
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>*/}
              <div className="modal-body">
                <div className="form-content p-2">
                  <h4 className="modal-title">Delete</h4>
                  <p className="mb-4">Are you sure want to delete?</p>
                  <button type="button" className="btn btn-primary">
                    Delete{" "}
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
        {/* Delete Model */}
      </div>
    </>
  );
};

export default Specialities;
