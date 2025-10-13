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
    title: "🌐 Web Page",
    subtitle: "HTML5 & CSS3",
    image: image1,
    description:
      "A responsive personal portfolio webpage created using HTML5 and CSS3. The layout automatically adapts to different screen sizes, offering a seamless browsing experience on mobile, tablet, and desktop devices. The design emphasizes simplicity, readability, and smooth user interaction.",
    link: "https://prabin-karka.github.io/my-website/", 
  },
  {
    id: 2,
    title: "FRONT-END FRAMEWORK",
    subtitle: "Bootstrap5",
    image: image2,
    description:
      "Used Bootstrap, a modern front-end framework, to design a fully responsive and elegant user interface with minimal effort.",
    link: "https://prabin-karka.github.io/my-website/", 
  },
  {
    id: 3,
    title: "🍔FOOD WEBSITE",
    subtitle: "HTML5, CSS3, JS in React.js",
    image: image3,
    description:
      "This is a frontend-only Food Website built as a React component using HTML5, CSS3, and JavaScript.The layout is fully responsive and visually engaging, showcasing menus and food items with interactive UI elements like buttons and hover effects. The modular React component structure makes it easy to reuse and extend.",
    link: "https://prabin-karka.github.io/feane/",
  },
  {
    id: 4,
    title: "TO-DO-LIST",
    subtitle: "Javascript & React.js",
    image: image4,
    description:
     `This is a dynamic To-Do List web application built using React and JavaScript. 
It allows users to add, edit, delete, and mark tasks as completed, with a responsive and interactive interface. 
The project demonstrates component-based architecture, state management using React hooks, and clean, reusable code for front-end functionality.` ,
    link: "https://prabin-karka.github.io/todo_list/", 
  },
  {
    id: 5,
    title: "🖼️PHOTO EDITING",
    subtitle: "Adobe Photoshop",
    image: image5,
    description:
      "Basic experience using Adobe Photoshop for image editing, retouching, and creating visually appealing graphics.",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/faca7059896081.5a32f4cacc280.jpg", 
  },
  {
    id: 6,
    title: "OLD PORTFOLIO",
    subtitle: "Material UI, React & Vercel",
    image: image8,
    description:
      `This is a modern personal portfolio website built using React and Material-UI. 
It showcases projects, skills, and contact information with a clean and interactive UI. 
The project leverages Material-UI components for responsive layouts, theming, and professional styling, demonstrating modular React architecture and reusable components and also used versel for deployment.`,
    link: "https://old-portfolio-dun.vercel.app/", 
  },
  {
    id: 7,
    title: "WEB DEVELOPMENT",
    subtitle: " ",
    image: image7,
    description:
      `Built using React.js, GitHub, Firebase, and Axios, this portfolio project demonstrates a modern, responsive, and fully functional web application.
      “View Live Project”
“Open Project”
“See It in Action”`,
    link: "https://prabin-karka.github.io/my_portfolio", 
  },
  {
    id: 8,
    title: "AUTHENTICATION",
    subtitle: "Javascript- Local Storage",
    image: image6,
    description:
      `AUTHENTICATION:
Login validation using JavaScript if/else statements – secure and interactive user access.`,
    link: "https://todolist-tod.web.app/", 
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
