import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__copyright">
            © {currentYear} Amulya Bandla. All rights reserved.
          </div>
          <div className="footer__social">
            <a 
              href="https://github.com/ammu0113" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <FiGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/amulya-bandla-666b97318/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 