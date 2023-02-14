import React, { useContext } from "react";

import CartContext from "../context/store/cart-context";
import Card from "../UI/Card";
import CartItem from "./CartItem";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // console.log(cartCtx.items);

  // const numbersOfItemsInCart = cartCtx.items.reduce((curNum, item) => {
  //   return curNum + item.amount;
  // }, 0);

  //console.log(numbersOfItemsInCart);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {/* <ul className="p-2 ml-8 ">
        {cartCtx.map((item) => (
          <li key={item.id}>
            {item.title}
            <br /> Price : $ {item.price}
          </li>
        ))}
      </ul> */}
      {cartItems}
      {/* {cartCtx.items.map((item, i) => {
        return (
          <div
            className="flex items-center justify-between p-4 shadow-lg"
            key={item + i}
          >
            <div className="flex items-center justify-center gap-4">
              <img src={item.imgUrl} width={100} />
              <p className="font-bold p-2">{item.title}</p>
            </div>

            <span className="text-[#ee923f]"> $ {item.price}</span>
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
      })} */}
      <div className="p-4 gap-4 z-50">
        <div className="flex justify-between ">
          <span className=""> Total Items:</span>
          <span className="ml-2">{totalAmount}</span>
        </div>
      </div>
      {/* <span>{numbersOfItemsInCart}</span> */}
      <div className="text-center  font-bold z-50">
        <button
          onClick={props.onClose}
          className="bg-cyan-500 p-1 w-24 rounded-full  hover:bg-cyan-600"
        >
          Close
        </button>
        {hasItems && (
          <button className="bg-cyan-500 p-1 w-24 rounded-full ml-3 hover:bg-cyan-600">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
