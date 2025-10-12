import React from 'react';
import '../styles/Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <h2 class="na">Prabin Raj</h2>

      <p>Web Designer & React Developer</p>

      <div className="social-icons">
      <a href="https://www.linkedin.com/in/prabin-raj-prabin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      {/* <a href="#"><FontAwesomeIcon icon={faBehance} /></a> */}
    </div>


      <p className="footer-design">Designed by - <strong>Prabin Raj</strong></p>
    </footer>
  );
};

export default Footer;
