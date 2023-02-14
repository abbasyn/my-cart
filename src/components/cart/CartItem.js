import React from "react";

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 p-1 pb-3">
      <div>
        <h2>{props.name}</h2>
        <div>
          <span>{price}</span>
          <span>{props.amount}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="px-2 bg-red-800 rounded" onClick={props.onRemove}>
          -
        </button>
        <button className="px-2 bg-red-800 rounded" onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
