import React from 'react';
import '../styles/Portfolio.css';
import marker from '../assets/marker.svg';

import image1 from '../assets/p1.png';
import image2 from '../assets/p2.png';
import image3 from '../assets/p3.png';
import image4 from '../assets/p4.png';
import image5 from '../assets/p5.png';
import image6 from '../assets/p6.png';
import image7 from '../assets/p7.png';
import image8 from '../assets/p8.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="marker">
        <img src={marker} alt="marker img" />
      </div>

      <div className="portfolio-grid ">
        <div className="portfolio-item fade-in-scale">
  <img src={image1} alt="Portfolio 1" />
  <div className="overlay">WEB DESIGN<br></br><span>Dribbble.com</span></div>
</div>
        <div className="portfolio-item fade-in-scale">
          <img src={image2} alt="Portfolio 2" />
           <div className="overlay">WEB DEVELOPMENT<br></br><span>GitHub.com</span></div>
           </div>
        <div className="portfolio-item fade-in-scale">
          <img src={image3} alt="Portfolio 3" />
           <div className="overlay">AUDIO MIXING<br></br><span>Soundcloud.com</span></div>
           </div>
        <div className="portfolio-item fade-in-scale">
          <img src={image4} alt="Portfolio 4" />
           <div className="overlay">VIDEO EDITING<br></br><span>Adobe After Effects</span></div>
           </div>
        <div className="portfolio-item fade-in-scale">
          <img src={image5} alt="Portfolio 5" />
          <div className="overlay">PHOTOGRAPHY<br></br><span>Adobe Photoshop</span></div>
           </div>
        <div className="portfolio-item fade-in-scale">
          <img src={image6} alt="Portfolio 6" />
          <div className="overlay">APP DEVELOPMENT<br></br><span>Android</span></div>
           </div>
        <div className="portfolio-item fade-in-scale">
          <img src={image7} alt="Portfolio 7" />
           <div className="overlay">APP DESIGN<br></br><span>Flutter</span></div>
           </div>
        <div className="portfolio-item fade-in-scale">
          <img src={image8} alt="Portfolio 8" />
           <div className="overlay">APP DEVELOPMENT<br></br><span>Flutter</span></div>
           </div>
      </div>
    </div>
  );
};

export default Portfolio;
