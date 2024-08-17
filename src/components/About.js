import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <div id='about' className="container my-5 p-4">
      <div className="row align-items-center">
        <div className="col-md-4 text-center position-relative">
          <img 
            src="../images/hiking.jpg" 
            alt="Brian Fernando" 
            className="img-fluid about-image"
          />
        </div>
        <div className="col-md-5 about-text">
          <h2>About Me</h2>
          <p>
            Currently, I am pursuing my Master's in Statistics at the University of California, Berkeley. I completed my undergraduate studies at Purdue University, where I earned a BS in Computer Science, Data Science, and Applied Statistics.
          </p>
          <p>
            I am passionate about working in the realm of data, where I can leverage AI/ML to solve complex problems and extract meaningful insights. My goal is to create impactful solutions that drive innovation in data science and beyond.
          </p>
          <p>
            Beyond my academic pursuits, I enjoy hiking, skiing, playing tennis, and fulfilling my adventurous spirit outdoors. I am working towards my personal goal of visiting every national park in the US!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
