import React from "react";
import "./modal.css";

const Modal = ({ modalId,isOpen, children, ...props }) => {
  const modalClass = isOpen ? "block" : "hidden";
  

  return (
    <div>
      <div
        className={`modal fixed rounded-md shadow-md ${modalClass} ${props.className}`}
      >
        <div className="absolute top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
