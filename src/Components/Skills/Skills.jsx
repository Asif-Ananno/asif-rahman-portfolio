import React from 'react';
import pythonLogo from '../../assets/python.png';
import javaLogo from '../../assets/java-logo-1.png';
import jsLogo from '../../assets/js6.png';
import phpLogo from '../../assets/php3.svg';
import laravelLogo from '../../assets/laravel5.webp';
import mernLogo from '../../assets/mern.webp';
import mysqlLogo from '../../assets/mysql-logo.svg';
import './Skills.css'; // Create a separate CSS file for styles

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill python">
          <img src={pythonLogo} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill java">
          <img src={javaLogo} alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill javascript">
          <img src={jsLogo} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill php">
          <img src={phpLogo} alt="PHP" />
          <p>PHP</p>
        </div>
        <div className="skill laravel">
          <img src={laravelLogo} alt="Laravel" />
          <p>Laravel</p>
        </div>
        <div className="skill mern">
          <img src={mernLogo} alt="MERN" />
          <p>MERN</p>
        </div>
        <div className="skill mysql">
          <img src={mysqlLogo} alt="MySQL" />
          <p>MySQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
