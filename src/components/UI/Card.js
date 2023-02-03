import React from "react";

const Card = ({ children }) => {
  return (
    <div className="containerr rounded overflow-hidden shadow-lg pb-5">
      {children}
    </div>
  );
};

export default Card;
