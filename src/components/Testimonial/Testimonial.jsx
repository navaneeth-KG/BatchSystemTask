import React from 'react';
import Gradient from '../Gradient/Gradient';
import { motion } from 'framer-motion';
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
        <img src="/testimonial.svg" alt="" width={713} className="test-img" />
        <motion.div
          className="test-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 'all', once: true }}
        >
          <h2>The Best Financial Accounting App Ever!</h2>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="users-imgs">
            <img src="/Group 28.svg" alt="" />
            <img src="/Group 27.svg" alt="" />
            <img src="/Group 29.svg" alt="" />
            <img src="/Group 30.svg" alt="" />
            <img src="/Group 31.svg" alt="" />
          </div>
          <h4>Nick Jonas</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
