import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/It profile.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="animated-heading">
            Hello! I’m <span className="typing-text">
              <span className="text-one">Prabin Raj</span>
              <span className="text-two">a React Developer</span>
            </span>
          </h2>

          <p>
            I am an aspiring Front-End Developer with a Master’s degree in Mathematics and a growing passion for web development.I have built strong skills in HTML, CSS, Bootstrap, Material-UI, JavaScript, React.js, and Firebase, and I focus on creating responsive
            and accessible user interfaces. During my front-end internship at Alo Info-Tech, Nagercoil, I contributed to two web projects by designing and implementing UI layouts. I translate design requirements
            into functional code, collaborate effectively with teams, and consistently seek opportunities to learn new technologies.I am eager to work on innovative projects and continue growing as a developer in a dynamic tech environment.
          </p>

          <div className="info-list">
            <p><strong>Age:</strong> <span>24</span></p>
            <p><strong>Email:</strong> <span>r.rajaprabinraj@gmail.com</span></p>
            <p><strong>Phone:</strong> <span>+91 9487082294</span></p>
            <p><strong>Address:</strong> <span>Marthandam, Tamil Nadu, India</span></p>
            <p><strong>Status:</strong> <span>Available - open to work</span></p>
          </div>
        </div>

        <div className="about-image fade-in-right">
          <img src={profileImage} alt="profile_img" />
        </div>
      </div>
    </section>
  );
};

export default About;
