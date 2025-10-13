import React from 'react';
import '../styles/Myskill.css';
import marker from '../assets/marker.svg';

// ✅ Correct icon imports (all verified working)
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiMaterialdesign, SiJavascript, SiFirebase, SiAdobe } from 'react-icons/si';

const skills = [
  { name: 'HTML5', level: 85, icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', level: 80, icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'Bootstrap', level: 70, icon: <FaBootstrap color="#7952B3" /> },
  { name: 'Material UI', level: 70, icon: <SiMaterialdesign color="#007FFF" /> },
  { name: 'JavaScript', level: 70, icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'React', level: 75, icon: <FaReact color="#61DAFB" /> },
  { name: 'Firebase', level: 60, icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Photoshop', level: 70, icon: <SiAdobe color="#FF0000" /> },
];



const Myskill = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="marker">
        <img src={marker} alt="marker img" />
      </div>
      <h4 className="skills-subtitle">
        I am a quick learner and specialize in multitude of skills required for Front-End Development and Web Design.
      </h4>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <h3 className="skill-name">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </h3>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myskill;
