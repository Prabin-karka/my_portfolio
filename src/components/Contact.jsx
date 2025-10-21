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

const FIREBASE_DB_URL = process.env.REACT_APP_FIREBASE_DB_URL;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields!');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email!');
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${FIREBASE_DB_URL}/contacts.json`, {
        ...formData,
        createdAt: Date.now(), // timestamp
      });

      alert('Your message just made my day 😊 I’ll reply shortly.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong😓. Try again!');
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
          <div className="contact-form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name, so I know who to reply to 😊"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email, so I can get back to you"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message here… I’m excited to read it!"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>

          <div className="contact-info fade-in-scale">
            <h3>Drop Me a Message❤️</h3>
            <h3>Your message could spark something amazing. Don’t hesitate to reach out.</h3>
            <p>
              (Your message means a lot! It’s safely stored and will reach me through Firebase, so I
              can read it and get back to you as soon as possible. Thank you for taking the time to
              connect — I truly appreciate it!)
            </p>

            <h3>
              <strong>Email:</strong>{' '}
              <a href="mailto:r.rajaprabinraj@gmail.com">r.rajaprabinraj@gmail.com</a>
            </h3>
            <h3>
              <strong>Phone:</strong> <a href="tel:+91-9487082294">+91 9487082294</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
