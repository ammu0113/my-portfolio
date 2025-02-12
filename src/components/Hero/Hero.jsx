import React from 'react';
import { FiDownload } from 'react-icons/fi';
import './Hero.scss';
import { usePortfolio } from '../../context/PortfolioContext';

const Hero = () => {
  const { personalInfo, summary } = usePortfolio();

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1>
            <span className="hero__greeting">Hi, I'm</span>
            <span className="hero__name">{personalInfo.firstname} {personalInfo.lastname}</span>
          </h1>
          <h2 className="hero__title">Senior Full Stack Developer</h2>
          <p className="hero__summary">{summary[0]}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a 
              href="/documents/AmulyaBandlaReactDeveloper.pdf"
              download="Amulya_Bandla_Resume.pdf"
              className="hero__resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 