import './style.css';
import { motion } from 'framer-motion';
import React from 'react';

const FaqCard = ({ color = 'white', heading, content, text = 'black' }) => {
  return (
    <div
      className="faq-card"
      style={{ backgroundColor: color, color: text }}
      
    >
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
};

export default FaqCard;
