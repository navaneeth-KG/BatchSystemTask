import React from 'react';
import './style.css';

const Button = ({ children,image,className,onClick}) => {
  return <button onClick={onClick} className={`btn ${className}`}>{children}{image&&<img src={image}></img>}</button>;
}

export default Button;
