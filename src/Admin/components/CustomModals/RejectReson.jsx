import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function RejectReason({ show, handleClose, onSubmit }) {
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
                <Modal.Title>Rejection Reason</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter Rejection Reason</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Type the reason here..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RejectReason;
