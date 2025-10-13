import React, { useState } from "react";
import "../styles/Portfolio.css";
import marker from "../assets/marker.svg";

import image1 from "../assets/p1.png";
import image2 from "../assets/p2.png";
import image3 from "../assets/p3.png";
import image4 from "../assets/p4.png";
import image5 from "../assets/p5.png";
import image6 from "../assets/p6.jpg";
import image7 from "../assets/p7.png";
import image8 from "../assets/p8.png";

const projects = [
  {
    id: 1,
    title: "WEB DESIGN",
    subtitle: "Dribbble.com",
    image: image1,
    description:
      "A creative web design projecvdifhduyfydfihwoudfuw6dr7qwydiqgu for modern websites.dkngdfysudgsiudhiusgdfuysdfiwdfusgduydhwid",
    link: "https://prabin-karka.github.io/my-website/", 
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    subtitle: "GitHub.com",
    image: image2,
    description:
      "A responsive and fully functional website built using HTML, CSS, and JavaScript with React integration.",
    link: "https://prabin-karka.github.io/my-website/", 
  },
  {
    id: 3,
    title: "AUDIO MIXING",
    subtitle: "Soundcloud.com",
    image: image3,
    description:
      "Professional audio mixing and mastering project showcasing balanced sound quality and clarity.",
    link: "https://prabin-karka.github.io/feane/",
  },
  {
    id: 4,
    title: "VIDEO EDITING",
    subtitle: "Adobe After Effects",
    image: image4,
    description:
      "A dynamic video editing showcase with smooth transitions and high-quality visuals for commercial use.",
    link: "#", 
  },
  {
    id: 5,
    title: "PHOTOGRAPHY",
    subtitle: "Adobe Photoshop",
    image: image5,
    description:
      "High-quality photography and post-processing project emphasizing light, contrast, and tone balance.",
    link: "#", 
  },
  {
    id: 6,
    title: "APP DEVELOPMENT",
    subtitle: "Android",
    image: image6,
    description:
      "An Android app built using Kotlin with modern UI components and backend integration.",
    link: "#", 
  },
  {
    id: 7,
    title: "APP DESIGN",
    subtitle: "Flutter",
    image: image7,
    description:
      "A mobile app design prototype created using Flutter, focusing on intuitive user experiences.",
    link: "https://prabin-karka.github.io/my_portfolio", 
  },
  {
    id: 8,
    title: "APP DEVELOPMENT",
    subtitle: "Flutter",
    image: image8,
    description:
      "A cross-platform app built using Flutter with Firebase backend and Material Design UI.",
    link: "#", 
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portfolio Project</h2>
      <div className="marker">
        <img src={marker} alt="marker" />
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item fade-in-scale"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              {project.title}
              <br />
              <span>{project.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Box */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <h3>{selectedProject.title}</h3>
            <p className="modal-subtitle">{selectedProject.subtitle}</p>
            <p className="modal-description">{selectedProject.description}</p>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;










// import React from 'react';
// import '../styles/Portfolio.css';
// import marker from '../assets/marker.svg';

// import image1 from '../assets/p1.png';
// import image2 from '../assets/p2.png';
// import image3 from '../assets/p3.png';
// import image4 from '../assets/p4.png';
// import image5 from '../assets/p5.png';
// import image6 from '../assets/p6.png';
// import image7 from '../assets/p7.png';
// import image8 from '../assets/p8.png';

// const Portfolio = () => {
//   return (
//     <div className="portfolio-container">
//       <h2 className="portfolio-title">Portfolio Project</h2>
//       <div className="marker">
//         <img src={marker} alt="marker img" />
//       </div>

//       <div className="portfolio-grid ">
//         <div className="portfolio-item fade-in-scale">
//   <img src={image1} alt="Portfolio 1" />
//   <div className="overlay">WEB DESIGN<br></br><span>Dribbble.com</span></div>
// </div>
//         <div className="portfolio-item fade-in-scale">
//           <img src={image2} alt="Portfolio 2" />
//            <div className="overlay">WEB DEVELOPMENT<br></br><span>GitHub.com</span></div>
//            </div>
//         <div className="portfolio-item fade-in-scale">
//           <img src={image3} alt="Portfolio 3" />
//            <div className="overlay">AUDIO MIXING<br></br><span>Soundcloud.com</span></div>
//            </div>
//         <div className="portfolio-item fade-in-scale">
//           <img src={image4} alt="Portfolio 4" />
//            <div className="overlay">VIDEO EDITING<br></br><span>Adobe After Effects</span></div>
//            </div>
//         <div className="portfolio-item fade-in-scale">
//           <img src={image5} alt="Portfolio 5" />
//           <div className="overlay">PHOTOGRAPHY<br></br><span>Adobe Photoshop</span></div>
//            </div>
//         <div className="portfolio-item fade-in-scale">
//           <img src={image6} alt="Portfolio 6" />
//           <div className="overlay">APP DEVELOPMENT<br></br><span>Android</span></div>
//            </div>
//         <div className="portfolio-item fade-in-scale">
//           <img src={image7} alt="Portfolio 7" />
//            <div className="overlay">APP DESIGN<br></br><span>Flutter</span></div>
//            </div>
//         <div className="portfolio-item fade-in-scale">
//           <img src={image8} alt="Portfolio 8" />
//            <div className="overlay">APP DEVELOPMENT<br></br><span>Flutter</span></div>
//            </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
