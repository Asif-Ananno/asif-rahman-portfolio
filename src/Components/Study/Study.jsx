import React, { useEffect } from 'react';
import './Study.css';

const Study = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    const handleScroll = () => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run the function once to check the position on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="education" className="study-container">
      <h1>Education</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h2>Bachelor of Science in Computer Science and Engineering</h2>
            <p>BRAC University</p>
            <p className="timeline-date">2020-2024</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h2>Higher Secondary Certificate</h2>
            <p>Dinajpur Government City College, Dinajpur</p>
            <p className="timeline-date">2019</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <div className="timeline-content">
            <h2>Secondary School Certificate</h2>
            <p>Dinajpur Zilla School, Dinajpur</p>
            <p className="timeline-date">2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
