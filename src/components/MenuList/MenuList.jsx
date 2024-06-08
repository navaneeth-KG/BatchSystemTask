import React from 'react'
import Button from '../Button/Button'
import './style.css'

const MenuList = ({setIsInView}) => {
  return (
    <div className='menu-list'>
        <div className="close" onClick={()=>{setIsInView(false)}} >
        <i className="fa-solid fa-xmark" ></i>
        </div>
        <div>
        <ul>
            <li><h1>Home</h1></li>
            <li><h1>About Us</h1></li>
            <li><h1>Pricing</h1></li>
            <li><h1>Features</h1></li>
        </ul>
        </div>
        
        <div> <Button>Download</Button></div>
       
      
    </div>
  )
}

export default MenuList
