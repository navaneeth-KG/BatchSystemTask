import Button from '../Button/Button';
import Gradient from '../Gradient/Gradient';
import React from 'react';

import './style.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Gradient className="header-gradient1" />
        <h1>
          Make The Best <br />
          Financial Decisions
        </h1>
        <p>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          <br />
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="header-btns">
          <Button image="/arrow.svg">Get Started</Button>
          <div className="watch-btn">
            <img src="/play.svg" alt="" />
            <p>Watch Video</p>
          </div>
        </div>

        <div className="img-cont">
          <img src="/layered.svg" alt="" className='layered'/>
          <img src="/headerImg1.svg" alt="" width={500} className='headerImg1' />
        </div>
      </div>

      <img src="/Frame1.svg" alt="" width={500} className="layer-1" />
      <img
        src="/iPhone-13-Pro-Front.svg"
        alt=""
        width={500}
        className="layer-2"
      />
      <img
        src="/iPhone-13-Pro-Front (1).svg"
        alt=""
        width={500}
        className="layer-3"
      />
      <Gradient className="header-gradient2" />
    </div>
  );
};

export default Header;
