import React from "react";

import banner from "../../assets/banner.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className="flex justify-between shadow-md z-10  px-[10%] items-center fixed top-0 left-0 right-0 w-full bg-[#53bfdb] h-20">
        <h1 className="font-bold">Fruit Shop</h1>
        <HeaderCartButton />
      </header>
      <div className="w-full h-[22rem] mt-20 z-0">
        <img
          className=" w-full h-full object-cover"
          src={banner}
          alt="Food Shop background image"
        ></img>
      </div>
    </>
  );
};

export default Header;
