import React from 'react';
import Gradient from '../Gradient/Gradient';
import { motion } from 'framer-motion';
import './style.css';

const Features = () => {
  return (
    <div className="features">
      <div className="row row1">
        <Gradient className="feature1-gradient-1" />
        <img src="/feature1.svg" alt="" className="feature1-img" />
        <div className="feature1">
          <div>
            <h3>FEATURES</h3>
            <h1>Uifry Premium</h1>
          </div>

          <div className="logo-text">
            <img src="/star-05.svg" alt="" />
            <h4>Budgeting Intervals</h4>
          </div>

          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
          </p>
          <div className="logo-text">
            {' '}
            <img src="/cube-02.svg" alt="" />
            <h4>Budgeting Intervals</h4>
          </div>

          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor
          </p>
          <div className="logo-text">
            <img src="/cube-04.svg" alt="" />
            <h4>Budgeting Intervals</h4>
          </div>

          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <Gradient className="feature1-gradient-2" />
        </div>
      </div>
      <div className="row row2">
        {' '}
        <div className="feature2">
          <div>
            {' '}
            <h3>ADVANTAGES</h3>
            <h1>Why Choose Uifry?</h1>
          </div>

          <div className="logo-text">
            <img src="/bell.svg" alt="" />
            <h2>Clever Notifications</h2>
          </div>

          <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <img src="/feature2.svg" alt="" className="feature2-img" />
        <Gradient className="feature2-gradient" />
      </div>
      <div className="row row3">
        <Gradient className="feature3-gradient" />
        <img src="/feature3.svg" alt="" className="feature3-img" />
        <div className="feature3">
          <div className="logo-text">
            <img src="/starIcon.svg" alt="" />
            <h2>Fully Customizable</h2>
          </div>

          <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
