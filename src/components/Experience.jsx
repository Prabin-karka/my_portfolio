import React from 'react';
import '../styles/Experience.css';
import appDevelopmentIcon from '../assets/app-development.png'
import reacticon from '../assets/react.png'
import webDesignIcon from '../assets/web-design.png'
import fullStackIcon from '../assets/full-stack.svg'
import marker from '../assets/marker.svg'

const experiences = [
  {
    title: "React Developer",
    company: "Alo Info tech",
    Duration: "3 months",
    icon: reacticon,
  },
  // {
  //   title: "App Development",
  //   company: "MakeMyApp LLC",
  //   years: "2015–2018",
  //   icon: appDevelopmentIcon,
  // },
  // {
  //   title: "Web Design",
  //   company: "Webbie LLC",
  //   years: "2018–2020",
  //   icon: webDesignIcon,
  // },
  // {
  //   title: "Full Stack Development",
  //   company: "Coder Inc.",
  //   years: "2020–2021",
  //   icon: fullStackIcon,
  // },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience-title">Internship</h2>
      <div className="marker">
        <img src={marker} alt="marker img" />
      </div>
          <div className="experience-grid ">
              {experiences.map((exp, idx) => (
                <div className="experience-card fade-in-right" key={idx}>
                  <div className="experience-card-top">
                    <div>
                    <h3>{exp.title}</h3>
                    <p className="experience-company">
                    {exp.company} <span>({exp.Duration})</span>
                    </p>
                    </div>
                    <img src={exp.icon} alt={`${exp.title} icon`} className="experience-icon-img" />
                  </div>
            <div className="experience-card-bottom">
              <p>
               Worked on multiple web development projects with a strong focus on UI design and layout using HTML and CSS. Developed responsive and accessible front-end components in a React.js environment, collaborating closely with the team to implement design specifications and enhance overall user experience.</p>
              <p>
               Encourage a broad and innovative perspective by promoting workplace diversity and empowering teams to drive meaningful change.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
