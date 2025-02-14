import React from 'react';
import { FiDownload } from 'react-icons/fi';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1>Hi, I'm</h1>
          <h2 className="gradient-text">Amulya</h2>
          <h2 className="gradient-text">Bandla</h2>
          <h3>Senior Full Stack Developer</h3>
          <p>Senior Full Stack Developer with 7+ years of expertise in architecting and developing enterprise-scale applications using React.js, Node.js, and modern JavaScript ecosystems</p>
          <div className="hero__buttons">
            <button className="btn-primary">Get in Touch</button>
            <button className="btn-secondary">
              <FiDownload /> Download Resume
            </button>
          </div>
        </div>
        
        <div className="hero__right">
          <img 
            src="images/profile.jpg" 
            alt="Amulya Bandla" 
            className="hero__profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;