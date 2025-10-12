import React from 'react';
import '../styles/Myskill.css'; // make sure this file exists
import marker from '../assets/marker.svg'

const skills = [
  { name: 'HTML5', level: 85 },
  { name: 'CSS3', level: 80 },
  { name: 'Bootstrap', level: 70 },
  { name: 'Material UI', level: 70 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 75 },
  { name: 'Firebase', level: 60 },
  { name: 'Photoshop', level: 70 },
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
          <div key={index} className="skill-item"><div className="skill-header">
            <h3>{skill.name}</h3>
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
