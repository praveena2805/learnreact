import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MyWebsite</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
