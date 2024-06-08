import React from 'react';
import './style.css';
import Button from '../Button/Button';
import { useState } from 'react';
import MenuList from '../MenuList/MenuList';

const Navbar = ({ theme, toggleTheme }) => {
  const [isInView, setIsInView] = useState(false);
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

      <Button className="download-btn">Download</Button>

      <Button className="theme-btn" onClick={toggleTheme}>
        {theme == 'light' ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </Button>

      <div
        className="hamburger"
        onClick={() => {
          setIsInView(true);
        }}
      >
        {' '}
        <i class="fa-solid fa-bars"></i>
      </div>
      {isInView && <MenuList setIsInView={setIsInView} />}
    </nav>
  );
};

export default Navbar;
