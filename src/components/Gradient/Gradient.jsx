import './style.css';
import React from 'react';
import { motion } from 'framer-motion';

const Gradient = ({ className }) => {
  return <motion.div className={`gradient ${className}`}></motion.div>;
};

export default Gradient;
