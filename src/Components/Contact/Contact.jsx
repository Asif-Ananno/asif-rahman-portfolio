import React from 'react';
import './Contact.css'; // Separate CSS for styling

// Import logos with correct paths
import fbLogo from '../../assets/fb.webp';
import githubLogo from '../../assets/github2.svg';
import linkedinLogo from '../../assets/linkedin.png';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-message">If you'd like to connect, feel free to reach out to me!</p>
      <div className="contact-icons">
        <a href="https://www.facebook.com/asif.ananno.1" target="_blank" rel="noopener noreferrer">
          <img src={fbLogo} alt="Facebook" className="contact-logo" />
        </a>
        <a href="https://github.com/Asif-Ananno" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="contact-logo" />
        </a>
        <a href="https://www.linkedin.com/in/asif-ananno-16966318a" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="contact-logo" />
        </a>
      </div>
      <div className="email-section">
        <p>Email: <a href="mailto:your-email@example.com" className="email-link">asifananno.000@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
