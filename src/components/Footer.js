// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <Container>
        <span>By: Sankeerthini Dhandapani</span>
        <a href="https://github.com/sankeerthini" className="text-white mx-2">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://linkedin.com/in/sankeerthini-d" className="text-white mx-2">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
