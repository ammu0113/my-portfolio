import React from 'react';
// Font Awesome icons
import { 
  FaCode, 
  FaDatabase, 
  FaCloud, 
  FaReact, 
  FaGitAlt, 
  FaRobot, 
  FaDesktop,
  FaAws,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaVuejs
} from 'react-icons/fa';

// Simple Icons
import { 
  SiTypescript, 
  SiJavascript, 
  SiBootstrap, 
  SiTailwindcss, 
  SiNextdotjs,
  SiKubernetes, 
  SiTerraform, 
  SiAnsible,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiOracle,
  SiGraphql,
  SiJest,
  SiCypress,
  SiSelenium,
  SiStorybook
} from 'react-icons/si';

import './Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="icon-code" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="icon-javascript" /> },
        { name: "TypeScript", icon: <SiTypescript className="icon-typescript" /> },
        { name: "Python", icon: <FaPython className="icon-python" /> }
      ]
    },
    {
      title: "Cloud Technologies",
      icon: <FaCloud className="icon-cloud" />,
      skills: [
        { name: "AWS - EC2", icon: <FaAws className="icon-aws" /> },
        { name: "Lambda", icon: <FaAws className="icon-aws" /> },
        { name: "S3", icon: <FaAws className="icon-aws" /> },
        { name: "API Gateway", icon: <FaAws className="icon-aws" /> },
        { name: "RDS", icon: <FaAws className="icon-aws" /> },
        { name: "DynamoDB", icon: <FaAws className="icon-aws" /> },
        { name: "CloudWatch", icon: <FaAws className="icon-aws" /> },
        { name: "CloudFront", icon: <FaAws className="icon-aws" /> },
        { name: "Route53", icon: <FaAws className="icon-aws" /> },
        { name: "SQS", icon: <FaAws className="icon-aws" /> },
        { name: "SNS", icon: <FaAws className="icon-aws" /> },
        { name: "Elastic Beanstalk", icon: <FaAws className="icon-aws" /> },
        { name: "Docker", icon: <FaDocker className="icon-docker" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="icon-kubernetes" /> },
        { name: "Jenkins", icon: <FaJenkins className="icon-jenkins" /> },
        { name: "CI/CD pipelines", icon: <FaJenkins className="icon-jenkins" /> },
        { name: "Terraform", icon: <SiTerraform className="icon-terraform" /> },
        { name: "Ansible", icon: <SiAnsible className="icon-ansible" /> }
      ]
    },
    {
      title: "Web Technologies",
      icon: <FaCode className="icon-code" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="icon-html5" /> },
        { name: "CSS3", icon: <FaCss3 className="icon-css3" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="icon-javascript" /> },
        { name: "React.js", icon: <FaReact className="icon-react" /> },
        { name: "Vue.js", icon: <FaVuejs className="icon-vuejs" /> },
        { name: "Node.js", icon: <FaNodeJs className="icon-nodejs" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="icon-bootstrap" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="icon-tailwindcss" /> },
        { name: "GraphQL", icon: <SiGraphql className="icon-graphql" /> },
        { name: "Next.js", icon: <SiNextdotjs className="icon-nextjs" /> }
      ]
    },
    {
      title: "React Ecosystem",
      icon: <FaReact className="icon-react" />,
      skills: [
        { name: "Redux-Saga", icon: <FaReact className="icon-react" /> },
        { name: "Redux Toolkit", icon: <FaReact className="icon-react" /> },
        { name: "React Lifecycle", icon: <FaReact className="icon-react" /> },
        { name: "Performance Optimization", icon: <FaReact className="icon-react" /> },
        { name: "Custom Hooks", icon: <FaReact className="icon-react" /> },
        { name: "Component Patterns", icon: <FaReact className="icon-react" /> },
        { name: "HOCs", icon: <FaReact className="icon-react" /> },
        { name: "Render Props", icon: <FaReact className="icon-react" /> }
      ]
    },
    {
      title: "Database Environments",
      icon: <FaDatabase className="icon-sqlserver" />,
      skills: [
        { name: "Oracle", icon: <SiOracle className="icon-oracle" /> },
        { name: "SQL Server", icon: <FaDatabase className="icon-sqlserver" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="icon-postgresql" /> },
        { name: "MongoDB", icon: <SiMongodb className="icon-mongodb" /> },
        { name: "Redis", icon: <SiRedis className="icon-redis" /> },
        { name: "Firebase", icon: <SiFirebase className="icon-firebase" /> },
        { name: "DynamoDB", icon: <FaAws className="icon-aws" /> },
        { name: "Cassandra", icon: <FaDatabase className="icon-cassandra" /> },
        { name: "Influx DB", icon: <FaDatabase className="icon-influxdb" /> }
      ]
    },
    {
      title: "Version Control",
      icon: <FaGitAlt  className="icon-git" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="icon-git" /> },
        { name: "GitHub", icon: <FaGithub className="icon-github" /> },
        { name: "GitLab", icon: <FaGitAlt className="icon-gitlab" /> },
        { name: "Bitbucket", icon: <FaGitAlt className="icon-bitbucket" /> },
        { name: "SVN", icon: <FaGitAlt className="icon-svn" /> }
      ]
    },
    {
      title: "Testing & Automation",
      icon: <FaRobot className="icon-robot" />,
      skills: [
        { name: "Jest", icon: <SiJest className="icon-jest" /> },
        { name: "React Testing Library", icon: <FaReact className="icon-reacttestinglibrary" /> },
        { name: "Cypress", icon: <SiCypress className="icon-cypress" /> },
        { name: "Selenium", icon: <SiSelenium className="icon-selenium" /> },
        { name: "Cucumber", icon: <FaRobot className="icon-cucumber" /> },
        { name: "Playwright", icon: <FaRobot className="icon-playwright" /> },
        { name: "Storybook", icon: <SiStorybook className="icon-storybook" /> },
        { name: "Karma", icon: <FaRobot className="icon-karma" /> },
        { name: "Jasmine", icon: <FaRobot className="icon-jasmine" /> }
      ]
    },
    {
      title: "Operating Systems",
      icon: <FaDesktop className="icon-windows" />,
      skills: [
        { name: "Windows", icon: <FaDesktop className="icon-windows" /> },
        { name: "MacOS", icon: <FaDesktop className="icon-macos" /> },
        { name: "Linux", icon: <FaDesktop className="icon-linux" /> },
        { name: "UNIX", icon: <FaDesktop className="icon-unix" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills__category">
              <div className="skills__category-header">
                <div className="skills__category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills__items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    <span className="skill-tag__icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
