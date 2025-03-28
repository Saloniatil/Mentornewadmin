import React from "react";
import { Modal, Table } from "react-bootstrap";

function ShowSessionList({ show, handleClose, data }) {
    return (
        <Modal show={show} size="lg" onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Tracks Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Session Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((session, index) => (
                                <tr key={index}>
                                    <td>{session.sessionTitle}</td>
                                    <td>{session.description}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="text-center">
                                    No sessions available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    );
}

export default ShowSessionList;
