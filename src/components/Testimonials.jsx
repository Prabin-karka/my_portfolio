import React from "react";
import '../styles/Testimonials.css';
import marker from '../assets/marker.svg'
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
import client3 from '../assets/client3.jpg'
import client4 from '../assets/client4.jpg'

const testimonials = [
  {
    name: "Aiyana",
    role: "CEO / Web Design Company",
    img: client1,
    text: "Walter displays exemplary professionalism and is able to take on challenges. He learns quickly and is an asset to any team.",
  },
  {
    name: "Alexander",
    role: "CEO / Web Design Company",
    img: client2,
    text: "Walter displays exemplary professionalism and is able to take on challenges. He learns quickly and is an asset to any team.",
  },
  {
    name: "Ariya",
    role: "Web Developer",
    img: client3,
    text: "Walter is a great co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.",
  },
  {
    name: "Braiden",
    role: "Web Designer",
    img:client4,
    text: "Walter is a great co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <div className="marker">
                <img src={marker} alt="marker img" />
      </div>
      <div className="testimonials-grid fade-in-left ">
        {testimonials.map((t, index) => (
          <div className="testimonial-card fade-in-left" key={index}>
            <div className="testimonial-column">
            <div className="quote">❝</div>
            <p className="testimonial-text">{t.text}</p>
            </div>
            <div className="testimonial-footer">
              
              <div className="testimonial-info">
                <strong>{t.name}</strong>
                <div className="testimonial-role">{t.role}</div>
              </div>
              <img src={t.img} alt={t.name} className="testimonial-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
