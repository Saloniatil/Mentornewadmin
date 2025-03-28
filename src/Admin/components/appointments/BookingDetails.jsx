import React from "react";
import { Modal, Table } from "react-bootstrap";

function BookingDetails({ show, onHide }) {
    const sessionData = [
        {
            meetingLink: "https://zoom.us/j/123456789",
            dateTime: "2025-03-10 10:00 AM",
            mentorStart: "2025-03-10 10:05 AM",
            menteeStart: "2025-03-10 10:07 AM",
            mentorEnd: "2025-03-10 11:00 AM",
            menteeEnd: "2025-03-10 11:02 AM",
        },
        {
            meetingLink: "https://meet.google.com/abc-defg-hij",
            dateTime: "2025-03-11 02:00 PM",
            mentorStart: "2025-03-11 02:05 PM",
            menteeStart: "2025-03-11 02:07 PM",
            mentorEnd: "2025-03-11 03:00 PM",
            menteeEnd: "2025-03-11 03:02 PM",
        },
    ];
    return (
        <Modal show={show} size="lg" onHide={onHide} fullscreen centered>
            <Modal.Header closeButton>
                <Modal.Title>Booking Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="table-responsive custom-table">
                    <table className="table">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Meeting Link</th>
                                <th className="border p-2">Link Added Date & Time</th>
                                <th className="border p-2">Session Start By Mentor</th>
                                <th className="border p-2">Session Start By Mentee</th>
                                <th className="border p-2">Session End By Mentor</th>
                                <th className="border p-2">Session End By Mentee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sessionData.map((session, index) => (
                                <tr key={index} className="border">
                                    <td className="border p-2">
                                        <a
                                            href={session.meetingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            Link
                                        </a>
                                    </td>
                                    <td className="border p-2">{session.dateTime}</td>
                                    <td className="border p-2">{session.mentorStart}</td>
                                    <td className="border p-2">{session.menteeStart}</td>
                                    <td className="border p-2">{session.mentorEnd}</td>
                                    <td className="border p-2">{session.menteeEnd}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default BookingDetails;
