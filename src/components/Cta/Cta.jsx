import React from 'react'
import Gradient from '../Gradient/Gradient'
import './style.css'

const Cta = () => {
  return (
    <div className='cta'>
      <Gradient className='cta-gradient'/>
        <img src="cta.png" alt=""  style={{width:'100%'}} />
      
    </div>
  )
}

export default Cta
