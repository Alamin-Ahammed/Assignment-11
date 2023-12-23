import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size="2em" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size="2em" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter size="2em" />
        </a>
      </div>
      <ul className="contact-list">
        <li>Email: ahammedAlamin@example.com</li>
        <li>Phone: 0199888888</li>
      </ul>
      <p>&copy; 2023 React.dev. All rights reserved.</p>
      <p>Designed And Developed with ❤️ by Alamin Ahammed</p>
    </footer>
  );
};

export default Footer;


