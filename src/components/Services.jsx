import React from 'react';
import '../styles/Services.css';
import webIcon from '../assets/web-design.png';
import graphicIcon from '../assets/graphic-design.png';
import uiuxIcon from '../assets/ui-ux.png';
import appIcon from '../assets/app-development.png';
import marker from '../assets/marker.svg'

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="marker">
                <img src={marker} alt="marker img" />
      </div>
      <p className="section-description">
        I offer services fit for any website or app. I can quickly maximize timely deliverables for real-time schemas.
      </p>

      <div className="services-grid fade-in">
        <div className="service-card fade-in">
          <img src={webIcon} alt="Web Design" />
          <h3>Web Design</h3>
        </div>
        <div className="service-card fade-in">
          <img src={graphicIcon} alt="Graphic Design" />
          <h3>Graphic Design</h3>
        </div>
        <div className="service-card fade-in">
          <img src={uiuxIcon} alt="UI/UX" />
          <h3>UI/UX</h3>
        </div>
        <div className="service-card fade-in">
          <img src={appIcon} alt="App Development" />
          <h3>App Development</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
