// import React from 'react';
// import '../styles/Contact.css'
// import marker from '../assets/marker.svg'

// const Contact = () => {
//   return (
//     <section className="contact-section">
//       <h2 className="contact-title">Contact Me</h2>
//       <div className="marker">
//                 <img src={marker} alt="marker img" />
//       </div>
//       <div className="contact-wrapper">

//          <div className="contact-container fade-in-scale">
//            <div className="contact-form ">
//              <label>Name</label>
//              <input type="text" placeholder="Your Name" />
   
//              <label>Email</label>
//              <input type="email" placeholder="Your Email" />
   
//              <label>Message</label>
//              <textarea placeholder="Your Message"></textarea>
   
//              <button type="submit">Send</button>
//            </div>
        

//         <div className="contact-info fade-in-scale">
//           <h3>Let’s talk how I can help you!</h3>
//           <p>If you like my work and want to avail my services then drop me a message using the contact form.</p>
//           <p>Or get in touch using my email or my contact number.</p>
//           <p>See you!</p>

//           <p><strong>Email:</strong> <a href="mailto:r.rajaprabinraj@gmail.com">r.rajaprabinraj@gmail.com</a></p>
//           <p><strong>Phone:</strong> <a href="tel:+91-9487082294">+91 9487082294</a></p>
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;





import React, { useState } from 'react';
import '../styles/Contact.css';
import marker from '../assets/marker.svg';
import axios from 'axios';

const FIREBASE_DB_URL = process.env.REACT_APP_FIREBASE_DB_URL; // CRA
// const FIREBASE_DB_URL = import.meta.env.VITE_FIREBASE_DB_URL; // Vite

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${FIREBASE_DB_URL}/contacts.json`, formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Try again!');
    }
    setLoading(false);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="marker">
        <img src={marker} alt="marker img" />
      </div>
      <div className="contact-wrapper">

        <div className="contact-container fade-in-scale">
          {/* Keep HTML structure intact */}
          <div className="contact-form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>

          <div className="contact-info fade-in-scale">
            <h3>Let’s talk how I can help you!</h3>
            <p>If you like my work and want to avail my services then drop me a message using the contact form.</p>
            <p>Or get in touch using my email or my contact number.</p>
            <p>See you!</p>

            <p><strong>Email:</strong> <a href="mailto:r.rajaprabinraj@gmail.com">r.rajaprabinraj@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+91-9487082294">+91 9487082294</a></p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
