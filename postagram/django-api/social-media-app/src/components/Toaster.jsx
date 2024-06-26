import React from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

function Toaster(props) {
  const { showToast, title, message, onClose, type } = props;

  return (
    <ToastContainer position="top-center">
      <Toast onClose={onClose} show={showToast} delay={3000} autohide bg={type}>
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>
          <p className="text-white">{message}</p>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;
