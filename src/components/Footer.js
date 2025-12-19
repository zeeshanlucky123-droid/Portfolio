import React from 'react';
import { FaHeart, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Zeeshan Ahmed. All rights reserved.</p>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/zeeshan-ahmed-576822215/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:zeeshanlucky123@gmail.com"
              className="footer-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/zeeshanlucky123-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
          <p>Designed & Developed with <FaHeart className="heart-icon" /></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

