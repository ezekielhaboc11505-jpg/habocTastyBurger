import React from 'react';
import BurgerCard from './BurgerCard';
import type { Burger } from '../Types/Burger';
import "./BurgerList.css";

import crispy from "../assets/crispy.jpg";
import bacon from "../assets/bacon.jpg";
import blacksheep from "../assets/blacksheep.jpg";
import vegan from "../assets/vegan.jpg";




const BurgerList: React.FC = () => {
 const burgers: Burger[] = [
  { image: crispy, name: "Crispy Chicken", description: "...", rating: 5, price: 99.15 },
  { image: bacon, name: "Ultimate Bacon", description: "...", rating: 5, price: 99.32 },
  { image: blacksheep, name: "Black Sheep", description: "...", rating: 4, price: 69.15 },
  { image: vegan, name: "Vegan Burger", description: "...", rating: 3, price: 99.25 },
];


  return (
    <section className="burger-list">
      <h1 className="title">OUR CRAZY BURGERS</h1>
      <p className="subtitle">
        Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces.
      </p>
      <div className="cards">
        {burgers.map((b, i) => (
          <BurgerCard key={i} {...b} />
        ))}
      </div>
    </section>
  );
};

export default BurgerList;
