import React from 'react';
import type{ Burger } from '../Types/Burger';
import './BurgerCard.css';

const BurgerCard: React.FC<Burger> = ({ image, name, description, rating, price }) => {
  return (
    <div className="burger-card">
      <img src={image} alt={name} />
      <div className="burger-info">
        <p className="rating">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="price">৳{price}</button>
      </div>
    </div>
  );
};

export default BurgerCard;
