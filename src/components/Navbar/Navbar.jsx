import React from 'react';
import './style.css';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {' '}
        <div className="logo">
          <img src="/logo.svg" alt="" />
          <h1>Uifry</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>

      <Button>Download</Button>
    </nav>
  );
};

export default Navbar;
