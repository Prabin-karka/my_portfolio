import React from 'react';
import '../styles/Experience.css';
import appDevelopmentIcon from '../assets/app-development.png'
import uiUxIcon from '../assets/ui-ux.png'
import webDesignIcon from '../assets/web-design.png'
import fullStackIcon from '../assets/full-stack.svg'
import marker from '../assets/marker.svg'

const experiences = [
  {
    title: "UI/UX Design",
    company: "Designerr Inc.",
    years: "2012–2014",
    icon: uiUxIcon,
  },
  {
    title: "App Development",
    company: "MakeMyApp LLC",
    years: "2015–2018",
    icon: appDevelopmentIcon,
  },
  {
    title: "Web Design",
    company: "Webbie LLC",
    years: "2018–2020",
    icon: webDesignIcon,
  },
  {
    title: "Full Stack Development",
    company: "Coder Inc.",
    years: "2020–2021",
    icon: fullStackIcon,
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience-title">Experience</h2>
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
                    {exp.company} <span>({exp.years})</span>
                    </p>
                    </div>
                    <img src={exp.icon} alt={`${exp.title} icon`} className="experience-icon-img" />
                  </div>
            <div className="experience-card-bottom">
              <p>
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
              </p>
              <p>
                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
