import React from 'react';
import '../styles/Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <h2>Prabin Raj</h2>
      <p>Web Designer & React Developer</p>

      <div className="social-icons">
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="#"><FontAwesomeIcon icon={faBehance} /></a>
    </div>

      <p className="footer-note">© Super Folio. All rights reserved.</p>
      <p className="footer-design">Design - <strong>TemplateFlip</strong></p>
    </footer>
  );
};

export default Footer;
