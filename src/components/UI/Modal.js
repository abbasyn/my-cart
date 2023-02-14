import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"
      onClick={props.onClose}
    ></div>
  );
};

const ModelOverlay = (props) => {
  return (
    <div className="fixed top-20 min-h-[30%] z-30 left-[5%] w-11/12 p-3 rounded-2xl bg-white shadow-lg">
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  console.log(props.children, "modal children");
  return ReactDOM.createPortal(
    <>
      <BackDrop onClose={props.onClose} />
      <ModelOverlay>{props.children}</ModelOverlay>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
