import React from "react";

import Card from "./UI/Card";
import Cart from "./cart/Cart";
import FruitItem from "./product/FruitItem";
import { FRUITS } from "./product/Products";
// const AvailableFruits = () => {
//   const fruitsList = fruits.map((fruit) => (

//   ));

const Main = () => {
  return (
    <>
      <h2 className="text-center p-6 text-6xl font-bold">All Items</h2>
      <Card className="mx-auto flex justify-between">
        {FRUITS.map((fruit) => (
          <FruitItem
            key={fruit.id}
            id={fruit.id}
            title={fruit.title}
            desc={fruit.description}
            price={fruit.price}
            imgUrl={fruit.imgUrl}
            amount={fruit.amount}
          />
        ))}
      </Card>
    </>
  );
};

export default Main;
