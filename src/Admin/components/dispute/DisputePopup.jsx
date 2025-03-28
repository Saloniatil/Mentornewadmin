import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function DisputePopup({ show, handleClose, onSubmit }) {
    const [reason, setReason] = useState("");

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(reason);
        }
        handleClose(); // Close modal after submission
    };

    return (
        <Modal show={show} size="lg" onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Refund</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <button className="btn btn-primary mx-2" onClick={handleClose}>
                    Refund Current Session
                </button>
                <button className="btn btn-primary " onClick={handleClose}>
                    Refund Remaining Session
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClose}>
                    Refund Current & Remaining Sessions
                </button>
            </Modal.Body>

        </Modal>
    );
}

export default DisputePopup;
