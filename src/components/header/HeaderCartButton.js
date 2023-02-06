import React, { useContext } from "react";

import CartContext from "../context/store/cart-context";
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items;

  console.log(`Abbas ${cartCtx.items}`);
  console.log([cartCtx.items]);
  return (
    <>
      <button className="flex rounded-full justify-around items-center font-bold border-r-[25px] py-3 px-12 p-3 border-none bg-teal-400 text-white hover:bg-teal-500">
        <span>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="bg-[#106980] rounded-full ml-4 font-bold py-1 px-4">
          {totalItems > 0 ? totalItems : 0}
        </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
