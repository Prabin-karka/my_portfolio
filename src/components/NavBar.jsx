import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    console.log("Hamburger clicked");
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <button
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Portfolio
      </button>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <Link to="about" smooth={true} duration={500} offset={-30} onClick={closeMenu}>
          About
        </Link>
        <Link to="myskill" smooth={true} duration={500} offset={-65} onClick={closeMenu}>
          Skills
        </Link>
        <Link to="portfolio" smooth={true} duration={500} offset={-85} onClick={closeMenu}>
          Project
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-65} onClick={closeMenu}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-50} onClick={closeMenu}>
          Contact
        </Link>

        {/* If you re-enable login button */}
        {/* <button onClick={() => { navigate("/login"); closeMenu(); }} className="navlogin-button">
          <FontAwesomeIcon icon={faCircleUser} /> <h3 className="hamlogin">Login</h3>
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
