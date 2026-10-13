import React from 'react';
import logo from "../assets/logo.png";
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Tasty Burger Logo" />
        <h2>Tasty Burger</h2>
      </div>
      <ul className="nav-links">
        <li>About</li>
        <li>Our Menu</li>
        <li>Shop</li>
        <li>Contact</li>
        <li className="cart">🛒<span>2</span></li>
      </ul>
    </nav>
  );
};

export default Navbar;
