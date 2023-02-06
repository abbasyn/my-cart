import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`containerr rounded overflow-hidden shadow-lg pb-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
