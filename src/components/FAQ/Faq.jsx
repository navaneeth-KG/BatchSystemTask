import React from 'react';
import FaqCard from '../FaqCard/FaqCard';
import { motion } from 'framer-motion';
import './style.css';
const data = {
  heading: 'The Best Financial Accounting App Ever!',
  content:
    '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.',
};

const Faq = () => {
  return (
    <div className="faq">
      <div>
        {' '}
        <h3>FAQ</h3>
        <h1>
          Frequently Asked
          <br /> Questions
        </h1>
      </div>

      <div className="faqs-container">
        <FaqCard
          heading={data.heading}
          content={data.content}
          color="#FF5555"
          text="white"
        />

        <FaqCard heading={data.heading} content={data.content} />

        <FaqCard heading={data.heading} content={data.content} />
        <FaqCard
          heading={data.heading}
          content={data.content}
          color="#FF5555"
          text="white"
        />
        <FaqCard
          heading={data.heading}
          content={data.content}
          color="#FF5555"
          text="white"
        />
        <FaqCard heading={data.heading} content={data.content} />
      </div>
      <div className="faqs-container2">
        <FaqCard
          heading={data.heading}
          content={data.content}
          color="#FF5555"
          text="white"
        />

        <FaqCard heading={data.heading} content={data.content} />
        <FaqCard
          heading={data.heading}
          content={data.content}
          color="#FF5555"
          text="white"
        />

        <FaqCard heading={data.heading} content={data.content} />

        <FaqCard
          heading={data.heading}
          content={data.content}
          color="#FF5555"
          text="white"
        />
        <FaqCard heading={data.heading} content={data.content} />
      </div>
    </div>
  );
};

export default Faq;
