import React from 'react';
// import './styles/style.css'; // Import your CSS file
import Header from './components/Header';
import Hero from './components/Hero';
import Choose from './components/choose';
import Services from './components/services';
import Stat from './components/stat';
import Portfolio from './components/tab';
import Innovating from './components/innovating';
import Testimonials from './components/testimonail';
import Contact from './components/Contact';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Innovating/>
      <Services />
      <Choose />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;