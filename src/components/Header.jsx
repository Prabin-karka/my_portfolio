import React from 'react';
import heroImage from '../assets/bg_main.svg'; 
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll';
import marker from '../assets/marker.svg';

const Header = () => {
  return (
    <section className={styles.header_section}>
      <div className={styles.subMain1}>
        <div className={styles.image}>
          <img src={heroImage} alt="sitting boy" />
        </div>
        <div className={styles.subMain2}>
          <p className={styles.greeting}>HELLO!</p>
         <h1 className={`${styles.name} fade-in`}>I’m Walter Patterson</h1>

          <div className={`${styles.marker} fade-in`}>
            <img src={marker} alt="marker img" />
          </div>
          <p className={`${styles.role} fade-in`}>Web Developer & Mobile Application Developer</p>
          <div className={`${styles.social_icons} fade-in`}>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faBehance} /></a>
          </div>
          <div className={`${styles.accessContact} fade-in`}>
            <button>
              <Link to="contact" smooth={true} duration={500} offset={-50}>
                <span>Get in touch <FontAwesomeIcon icon={faArrowRight} /></span>
              </Link>
            </button>
          </div>
        </div>
      </div>
       <div className={styles.wave_wrapper}></div>
    </section>
  );
};

export default Header;
