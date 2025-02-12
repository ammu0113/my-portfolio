import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePortfolio } from '../../context/PortfolioContext';
import './Skills.scss';

const getSkillConfig = (category) => {
  const configs = {
    languages: {
      icon: ['fab', 'js'],
      unicode: '\uf3b8',
      color: '#F7DF1E'
    },
    cloudTechnologies: {
      icon: ['fab', 'aws'],
      unicode: '\uf375',
      color: '#FF9900'
    },
    webTechnologies: {
      icon: ['fab', 'html5'],
      unicode: '\uf13b',
      color: '#E34F26'
    },
    reactEcosystem: {
      icon: ['fab', 'react'],
      unicode: '\uf41b',
      color: '#61DAFB'
    },
    databaseEnvironments: {
      icon: ['fas', 'database'],
      unicode: '\uf1c0',
      color: '#336791'
    },
    versionControlTools: {
      icon: ['fab', 'git-alt'],
      unicode: '\uf841',
      color: '#F05032'
    },
    automationTesting: {
      icon: ['fas', 'vial'],
      unicode: '\uf492',
      color: '#8BC34A'
    },
    operatingSystems: {
      icon: ['fab', 'linux'],
      unicode: '\uf17c',
      color: '#185886'
    }
  };
  return configs[category] || { icon: ['fas', 'code'], unicode: '\uf121', color: '#607D8B' };
};

const getSkillLogos = (skillName) => {
  const logos = {
    'JavaScript': ['fab', 'js'],
    'TypeScript': ['fab', 'js'],
    'Python': ['fab', 'python'],
    'React.js': ['fab', 'react'],
    'Vue.js': ['fab', 'vuejs'],
    'Node.js': ['fab', 'node-js'],
    'HTML5': ['fab', 'html5'],
    'CSS3': ['fab', 'css3-alt'],
    'AWS': ['fab', 'aws'],
    'Docker': ['fab', 'docker'],
    'Jenkins': ['fab', 'jenkins'],
    'Git': ['fab', 'git-alt'],
    'GitHub': ['fab', 'github'],
    'GitLab': ['fab', 'gitlab'],
    'MongoDB': ['fas', 'database'],
    'PostgreSQL': ['fas', 'database'],
    'MySQL': ['fas', 'database'],
    'Linux': ['fab', 'linux'],
    'Ubuntu': ['fab', 'ubuntu'],
    'Windows': ['fab', 'windows'],
    'MacOS': ['fab', 'apple']
  };
  return logos[skillName] || null;
};

const getSkillColor = (index) => {
  const colors = [
    { light: '#E3F2FD', dark: '#1E88E5' }, // Blue
    { light: '#F3E5F5', dark: '#8E24AA' }, // Purple
    { light: '#E8F5E9', dark: '#43A047' }, // Green
    { light: '#FFF3E0', dark: '#FB8C00' }, // Orange
    { light: '#E1F5FE', dark: '#039BE5' }, // Light Blue
    { light: '#FCE4EC', dark: '#D81B60' }, // Pink
    { light: '#F1F8E9', dark: '#7CB342' }, // Light Green
    { light: '#FFEBEE', dark: '#E53935' }  // Red
  ];
  return colors[index % colors.length];
};

const Skills = () => {
  const { skills } = usePortfolio();

  const skillCategories = [
    { key: 'languages', title: 'Programming Languages' },
    { key: 'cloudTechnologies', title: 'Cloud & DevOps' },
    { key: 'webTechnologies', title: 'Web Technologies' },
    { key: 'reactEcosystem', title: 'React Ecosystem' },
    { key: 'databaseEnvironments', title: 'Database Technologies' },
    { key: 'versionControlTools', title: 'Version Control' },
    { key: 'automationTesting', title: 'Testing & QA' },
    { key: 'operatingSystems', title: 'Operating Systems' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills__grid">
          {skillCategories.map((category, index) => {
            const config = getSkillConfig(category.key);
            return (
              <div 
                key={category.key} 
                className="skills__category"
                data-category={category.key}
                data-icon={config.unicode}
              >
                <div className="skills__category-header">
                  <div 
                    className="skills__category-icon"
                    style={{ background: config.color }}
                  >
                    <FontAwesomeIcon icon={config.icon} />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <div className="skills__items">
                  {skills[category.key].map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag"
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      {getSkillLogos(skill) && (
                        <FontAwesomeIcon 
                          icon={getSkillLogos(skill)} 
                          className="skill-tag__icon"
                        />
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 