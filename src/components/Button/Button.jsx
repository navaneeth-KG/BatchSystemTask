import React from 'react';
import './style.css';

const Button = ({ children,image,className}) => {
  return <button className={`btn ${className}`}>{children}{image&&<img src={image}></img>}</button>;
}

export default Button;
