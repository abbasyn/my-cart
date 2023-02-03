import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const exiItem = items.find((cartItem) => cartItem.title === item.title);

    console.log({ exiItem });

    setItems((pre) => [...pre, item]);
  };
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
