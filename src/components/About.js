import React from 'react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/About.css';

const About = () => {

  const images = [
    '../images/hiking.jpg',
    '../images/hiking3.jpeg',
    '../images/beach.jpeg',
    '../images/bryce.jpeg',
    '../images/hiking4.jpeg',
    '../images/hiking5.jpeg',
    '../images/hiking6.jpeg',
    '../images/hiking7.jpeg',
    '../images/hiking8.jpeg',
  ];

  return (
    <div id='about' className="container my-5 p-4">
      <div className="row align-items-center">
        <div className="col-md-4 text-center position-relative">
          <div className='carousel-container'>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="about-image"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="col-md-5 about-text">
          <h2>About Me</h2>
          <p>
            Currently, I am pursuing my Master's in Statistics at the University of California, Berkeley. I completed my undergraduate studies at Purdue University, where I earned a BS in Computer Science, Data Science, and Applied Statistics.
          </p>
          <p>
            I am passionate about working in the realm of data, where I can leverage AI/ML to solve complex problems and extract meaningful insights. My goal is to create impactful solutions that drive innovation within data science and beyond.
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
