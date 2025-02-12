import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import './Experience.scss';

const Experience = () => {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <h2 className="section-title">Professional Journey</h2>
        <div className="experience__timeline">
          {experience.map((job, index) => (
            <div key={index} className="experience__item">
              <div className="experience__header">
                <div className="experience__role">
                  <h3>{job.position}</h3>
                  <span className="company">{job.company}</span>
                </div>
                <div className="experience__meta">
                  <span className="period">{job.period}</span>
                  <span className="location">{job.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 