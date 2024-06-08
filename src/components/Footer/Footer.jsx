import React from 'react';
import Button from '../Button/Button';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="div contact">
        <div>
          <img src="/Vector.svg" alt="" />
          <h1>Uifry</h1>
        </div>
        <div>
          <img src="/mail.svg" alt="" />
          <p>Help@Frybix.com</p>
        </div>
        <div>
          <img src="/phone.svg" alt="" />
          <p>+1234 456 678 89</p>
        </div>
      </div>
      <div className="div">
        <h2>Links</h2>
        <p>Home</p>
        <p>About Us</p>
        <p>Bookings</p>
        <p>Blog</p>
      </div>
      <div className="div">
        <h2>Legal</h2>
        <p>Terms Of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <div className="div">
        <h2>Product</h2>
        <p>Take Tour</p>
        <p>Live Chat</p>
        <p>Reviews</p>
      </div>{' '}
      <div className="div news-div">
        <h2>Newsletter</h2>
        <p>stay Up To Date</p>
        <div className="inp-container">
          <input placeholder="Your email" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
