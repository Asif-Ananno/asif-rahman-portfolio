import React from 'react';
import './Skills.css'; // Create a separate CSS file for styles

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill python">
          <img src="src/assets/python.png" alt="Python" />
        
        </div>
        <div className="skill java">
          <img src="src/assets/java-logo-1.png" alt="Java" />
          
        </div>
        <div className="skill javascript">
          <img src="src/assets/js6.png" alt="JavaScript" />
          
        </div>
        <div className="skill php">
          <img src="src/assets/php3.svg" alt="PHP" />
          
        </div>
        <div className="skill laravel">
          <img src="src/assets/laravel5.webp" alt="Laravel" />
          
        </div>
        <div className="skill mern">
          <img src="src/assets/mern.webp" alt="MERN" />
         
        </div>
        <div className="skill mysql">
          <img src="src/assets/mysql-logo.svg" alt="MySQL" />
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
