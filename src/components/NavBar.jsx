import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext"; // <-- new

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { darkMode, toggle } = useTheme(); // <- use shared state

  const handleClick = () => {
  toggle();
  closeMenu();
};
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        <div></div><div></div><div></div>
      </div>

      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <Link to="about" smooth duration={500} offset={-30} onClick={closeMenu}>About</Link>
        <Link to="myskill" smooth duration={500} offset={-65} onClick={closeMenu}>Skills</Link>
        <Link to="portfolio" smooth duration={500} offset={-85} onClick={closeMenu}>Project</Link>
        <Link to="experience" smooth duration={500} offset={-65} onClick={closeMenu}>Experience</Link>
        <Link to="contact" smooth duration={500} offset={-50} onClick={closeMenu}>Contact</Link>

        <button onClick={handleClick} className="theme-toggle" aria-label="Toggle theme">
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Optional login button */}
        {/* <button onClick={() => { navigate("/login"); closeMenu(); }} className="navlogin-button">
          <FontAwesomeIcon icon={faCircleUser} /> <h3 className="hamlogin">Login</h3>
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;
