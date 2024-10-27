import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile.jpg';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          hero.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run the function once to check the position on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='about' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>Hi!! I am Asif Ananno.</span> I am a Computer Science and Engineering graduate from BRAC University</h1>
      <p> I’m passionate about problem-solving and love generating new ideas. Web development excites me, and I have a deep interest in machine learning and artificial intelligence. I’m always exploring ways to innovate and make an impact in the tech field.</p>
      <div className="hero-action">
        
        <div className="hero-connect" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Connect with me
        </div>
  
        <div className="hero-resume" onClick={() => window.open('/resume.pdf', '_blank')}>
          My resume
        </div>
  
        <div className="hero-github" onClick={() => window.open('https://github.com/Asif-Ananno', '_blank')}>
          View My GitHub
        </div>
  
      </div>
    </div>
  );
};

export default Hero;
