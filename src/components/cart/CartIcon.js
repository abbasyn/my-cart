import React from "react";

const CartIcon = () => {
  return (
    <svg
      className="w-8 h-8 mr-2 "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="25" height="25" fill="none" />
      <circle cx="80" cy="216" r="12" />
      <circle cx="184" cy="216" r="12" />
      <path
        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </svg>
  );
};

export default CartIcon;
