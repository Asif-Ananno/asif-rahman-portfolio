import React from 'react';
import "./Navbar.css";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='home' className='navbar'>
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="nav-menu">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About Me</li>
        <li onClick={() => scrollToSection('education')}>Education</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('research')}>Research/Thesis</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('activities')}>Extra Curriculum Activities</li>

      </ul>
    </div>
  );
};

export default Navbar;
