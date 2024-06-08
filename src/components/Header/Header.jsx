import Button from '../Button/Button';
import Gradient from '../Gradient/Gradient';
import React from 'react';
import { motion } from 'framer-motion';

import './style.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left" 
     >
        <Gradient className="header-gradient1" />
        <h1 >
          Make The Best <br />
          Financial Decisions
        </h1>
        <p variants={{initial:{opacity:0},view:{opacity:1}}}>
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          <br />
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="header-btns" variants={{initial:{opacity:0},view:{opacity:1}}}>
          <Button image="/arrow.svg">Get Started</Button>
          <div className="watch-btn">
            <img src="/play.svg" alt="" />
            <p>Watch Video</p>
          </div>
        </div>

        <div className="img-cont" variants={{initial:{opacity:0},view:{opacity:1}}}>
          <img src="/layered.svg" alt="" className="layered" />
          <img
            src="/headerImg1.svg"
            alt=""
            width={500}
            className="headerImg1"
          />
        </div>
      </div>
      <motion.div
        className="header-right"
        variants={{
          initial: { opacity: 0,x:-200 },
          view: {
            opacity: 1,
            transition: { staggerChildren: 0.8, ease: 'linear' },
            x:0
          },
        }}
        initial="initial"
        animate="view"
        viewport={{ amount: 'all', once: true }}
      >
        <motion.img
          src="/Frame1.svg"
          alt=""
          width={500}
          className="layer-1"
          variants={{ initial: { opacity: 0 }, view: { opacity: 1 } }}
        />
        <motion.img
          src="/iPhone-13-Pro-Front.svg"
          alt=""
          width={500}
          className="layer-2"
          variants={{ initial: { opacity: 0 }, view: { opacity: 1 } }}
        />
        <motion.img
          src="/iPhone-13-Pro-Front (1).svg"
          alt=""
          width={500}
          className="layer-3"
          variants={{ initial: { opacity: 0 }, view: { opacity: 1 } }}
        />
        <Gradient
          className="header-gradient2"
          variants={{ initial: { opacity: 0 }, view: { opacity: 1 } }}
        />
      </motion.div>
    </div>
  );
};

export default Header;
