import React, { useContext } from "react";

import CartContext from "./context/store/cart-context";
import Card from "./UI/Card";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const numbersOfItemsInCart = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  console.log(numbersOfItemsInCart);

  return (
    <Card>
      <h2 className="p-6 text-center font-bold text-5xl text-cyan-400">
        My Cart
      </h2>
      {cartCtx.items.map((item, i) => {
        return (
          <div
            className="flex items-center justify-between p-4 shadow-lg"
            key={item + i}
          >
            <div className="flex items-center justify-center gap-4">
              <img src={item.imgUrl} width={100} />
              <p className="font-bold p-2">{item.title}</p>
            </div>

            <span>$ {item.price}</span>
            <span>Quantity {numbersOfItemsInCart}</span>

            <div className="flex items-center justify-center gap-3 p-4 text-lg font-bold">
              <button className="px-3 bg-red-800 rounded :">-</button>
              <button className="px-2 bg-red-800 rounded">+</button>
            </div>

            <div>
              <button className="px-2 bg-red-800 rounded">Remove</button>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

export default Cart;
