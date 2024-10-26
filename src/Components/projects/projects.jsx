import React, { useEffect } from 'react';
import './projects.css';

const Projects = () => {
  useEffect(() => {
    const handleScroll = () => {
      const projectItems = document.querySelectorAll('.project-item');
      projectItems.forEach((item) => {
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
    <div id='projects' className='projects-container'>
      <h1>My Projects</h1>
      <div className='projects-grid'>
        <div className='project-item'>
          <h2>Chakri-Chai</h2>
          <p>Chakri-Chai is an online job platform built using the MERN stack (MongoDB, Express.js, React, and Node.js) designed to connect employers with job seekers. Employers can post new job listings with ease, while job seekers can browse, search, and apply for positions that match their skills and interests. The platform simplifies the hiring process by providing a user-friendly interface for both employers and applicants, making job opportunities more accessible and the recruitment process more efficient. Chakri-Chai aims to be a one-stop solution for job hunting and talent acquisition, delivering a seamless experience for all users.</p>
        </div>
        <div className='project-item'>
          <h2>Online Examination Platform</h2>
          <p>This e-learning platform, developed using Laravel, offers a streamlined environment for scheduling and administering exams across multiple courses. Teachers can effortlessly create, schedule, and manage exams tailored to each course, setting designated times for students to complete them. Students benefit from an organized platform where they can access and attempt exams during the scheduled times, ensuring a smooth and efficient assessment process. This platform enhances the learning experience by promoting structured exam management and convenient access to assessments.</p>
        </div>
        <div className='project-item'>
          <h2>Donation Management System</h2>
          <p>This PHP-based donation management platform facilitates seamless connections between organizations in need of funding and generous donors. Organizations can create listings to raise awareness about their causes and request donations. Donors, in turn, can browse these listings and contribute funds directly to the initiatives they wish to support. The platform simplifies the donation process, ensuring transparency and ease of use for both organizations and donors, ultimately fostering a more impactful and efficient philanthropic environment.</p>
        </div>
        <div className='project-item'>
          <h2>Heart Disease Prediction Project</h2>
          <p>This machine learning project leverages various models—including K-Nearest Neighbors (KNN), Logistic Regression, Support Vector Machine (SVM), and Decision Tree—to predict the likelihood of heart disease in patients. Each model is trained on relevant health data to assess patterns and risk factors associated with heart disease, aiming to provide accurate predictions and support early intervention. By comparing the performance of these models, the project identifies the most effective algorithms for heart disease prediction, offering a data-driven approach to healthcare diagnostics.</p>
        </div>
        <div className='project-item'>
          <h2>Space Surviving Game</h2>
          <p>This is a survival game developed in Python, using basic geometric shapes like circles and lines to create a minimalistic, engaging gaming experience. Players navigate through a series of obstacles and challenges crafted from simple shapes, focusing on strategy and quick reflexes to survive. The game’s straightforward design showcases Python’s graphics capabilities and emphasizes gameplay mechanics over complex visuals, making it both accessible and challenging for players.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
