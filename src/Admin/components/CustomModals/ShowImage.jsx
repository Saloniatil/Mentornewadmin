import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ShowImage({show, handleClose,image}) {
  return (
      <div>
          <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                  <Modal.Title>Image Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                  <img
                      src="https://via.placeholder.com/400" // Replace with your image URL
                      alt="Preview"
                      className="img-fluid rounded"
                  />
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
    </div>
  )
}

export default ShowImage