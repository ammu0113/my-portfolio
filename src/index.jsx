import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faJs, 
  faPython, 
  faAws, 
  faDocker, 
  faJenkins,
  faHtml5,
  faCss3Alt,
  faReact,
  faVuejs,
  faNodeJs,
  faGithub,
  faGitAlt,
  faGitlab,
  faLinux,
  faWindows,
  faApple
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode,
  faCloud,
  faGlobe,
  faDatabase,
  faCodeBranch,
  faVial,
  faDesktop,
  faLayerGroup,
  faBars,
  faTimes,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faJs,
  faPython,
  faAws,
  faDocker,
  faJenkins,
  faHtml5,
  faCss3Alt,
  faReact,
  faVuejs,
  faNodeJs,
  faGithub,
  faGitAlt,
  faGitlab,
  faLinux,
  faWindows,
  faApple,
  faCode,
  faCloud,
  faGlobe,
  faDatabase,
  faCodeBranch,
  faVial,
  faDesktop,
  faLayerGroup,
  faBars,
  faTimes,
  faExternalLinkAlt
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 