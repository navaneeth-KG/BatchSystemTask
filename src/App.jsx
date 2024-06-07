import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cta from './components/Cta/Cta';
import Faq from './components/FAQ/Faq';
import Header from './components/Header/Header';
import Testimonial from './components/Testimonial/Testimonial';
import Features from './components/Features/Features';
import Copyright from './components/Copyright/Copyright';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Features/>
      <Testimonial/>
      <Faq/>      
      <Cta/>
      <Footer />
      <Copyright/>
    </div>
  );
};

export default App;
