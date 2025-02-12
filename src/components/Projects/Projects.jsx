import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { usePortfolio } from '../../context/PortfolioContext';
import './Projects.scss';

const Projects = () => {
  const { projects } = usePortfolio();

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card__image">
                <img src={project.thumbnail} alt={project.title} />
                <div className="project-card__links">
                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <div className="project-card__tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 