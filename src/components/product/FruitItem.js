import React, { useContext } from "react";

import FruitItemForm from "./FruitItemForm";

import Card from "../UI/Card";
import CartContext from "../context/store/cart-context";

const FruitItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });

    //cartCtx.addItem({ ...props });
  };
  return (
    <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#"></a>
      <div className="p-5 flex flex-col justify-center items-center">
        <img src={props.imgUrl} width={180} height={120}></img>

        <span>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </span>

        <span>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.desc}
          </h5>
        </span>

        <span className="mb-3 font-bold text-[#ee923f] dark:text-gray-400 text-[]">
          $ {price}
        </span>

        <FruitItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default FruitItem;
