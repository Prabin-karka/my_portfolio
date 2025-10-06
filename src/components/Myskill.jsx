import React from 'react';
import '../styles/Myskill.css'; // make sure this file exists
import marker from '../assets/marker.svg'

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'PHP', level: 70 },
  { name: 'WordPress', level: 70 },
  { name: 'MySQL', level: 60 },
  { name: 'Photoshop', level: 60 },
];

const Myskill = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="marker">
        <img src={marker} alt="marker img" />
      </div>
      <p className="skills-subtitle">
        I am a quick learner and specialize in multitude of skills required for Web
        Application Development and Product Design
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item"><div className="skill-header">
            <span>{skill.name}</span>
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
