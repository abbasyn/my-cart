import React, { useContext } from "react";
import Card from "./UI/Card";
import CartContext from "./context/store/cart-context";

const CardItem = (props) => {
  const ctx = useContext(CartContext);

  const addToCart = () => {
    ctx.addItem({ ...props });
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

        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[]">
          ${props.price}
        </span>
        <button
          onClick={addToCart}
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardItem;
