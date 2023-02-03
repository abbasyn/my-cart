import React from "react";

import Card from "./UI/Card";
import Cart from "./Cart";
import CardItem from "./CardItem";
import { FRUITS } from "../products";
// const AvailableFruits = () => {
//   const fruitsList = fruits.map((fruit) => (

//   ));

const Main = () => {
  return (
    <>
      <h2 className="text-center p-6 text-6xl font-bold">All Items</h2>
      <div className="flex">
        {FRUITS.map((fruit) => {
          return (
            <CardItem
              key={fruit.id}
              title={fruit.title}
              desc={fruit.description}
              price={fruit.price}
              imgUrl={fruit.imgUrl}
              amount={fruit.amount}
            />
          );
        })}
      </div>

      <Cart />
    </>
  );
};

export default Main;
