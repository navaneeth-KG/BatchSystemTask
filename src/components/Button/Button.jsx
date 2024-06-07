import React from 'react';
import './style.css';

const Button = ({ children,image}) => {
  return <button className="btn">{children}{image&&<img src={image}></img>}</button>;
}

export default Button;
