import React from 'react';
import Gradient from '../Gradient/Gradient';
import './style.css';
const Testimonial = () => {
  return (
    <div className="testimonial">
      <h3>TESTIMONIAL</h3>
      <h1>
        What Our Users
        <br /> Say About Us?
      </h1>
      <div className="testimonial-main">
        <Gradient className="testimonial-gradient" />
        <img src="/testimonial.svg" alt="" width={713} />
        <div className="test-right">
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="users-imgs"></div>
          <p>Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
