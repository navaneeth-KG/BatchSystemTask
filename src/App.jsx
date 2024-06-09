import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cta from './components/Cta/Cta';
import Faq from './components/FAQ/Faq';
import Header from './components/Header/Header';
import Testimonial from './components/Testimonial/Testimonial';
import Features from './components/Features/Features';
import Copyright from './components/Copyright/Copyright';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="app" id={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <Features />
      <Testimonial />
      <Faq />
      <Cta />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
