import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import './Education.scss';

const Education = () => {
  const { education } = usePortfolio();

  return (
    <section id="education" className="education">
      <div className="education__container">
        <h2 className="section-title">Education</h2>
        <div className="education__grid">
          {education.map((edu, index) => (
            <div key={index} className="education__item">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <span className="period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 