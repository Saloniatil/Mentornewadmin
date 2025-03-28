import React from "react";
import { Modal, Table } from "react-bootstrap";

function PaymentDetails({ show, handleClose }) {
    return (
        <Modal show={show} size="lg" onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Payment Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount (₦)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total Bundle Fee (Excl. VAT)</td>
                            <td>₦ 100,000</td>
                        </tr>
                        <tr>
                            <td>VAT (0%)</td>
                            <td>₦ 0,00</td>
                        </tr>
                        <tr>
                            <td>Gross Earnings</td>
                            <td>₦ 100,000</td>
                        </tr>
                        <tr>
                            <td>Platform Commission (10%)</td>
                            <td>-₦ 10,000</td>
                        </tr>
                        <tr>
                            <td>VAT on Commission (7.5%)</td>
                            <td>-₦ 750</td>
                        </tr>
                        <tr>
                            <td>Withholding Tax (10%)</td>
                            <td>-₦ 10,000</td>
                        </tr>
                        <tr style={{ borderTop: "3px solid black", fontWeight: "bold" }}>
                            <td>Net Amount Paid (After 5 Sessions)</td>
                            <td>₦ 79,250</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    );
}

export default PaymentDetails;
