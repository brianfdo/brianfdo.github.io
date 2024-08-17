import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from 'react-icons/fa';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container container text-center my-5">
      <div className="welcome-image-container">
        <img src="../images/pfp.jpg" alt="Brian Fernando" className="welcome-image" />
      </div>
      <div className="card shadow-sm my-4 p-2">
        <h2>Welcome! <span class="wave">👋🏾</span></h2>
        <p>Hi, I'm Brian Fernando, a passionate Data Scientist and Machine Learning Engineer focused on crafting intelligent, data-driven solutions. Feel free to explore my work and get in touch!</p>
      </div>
      <div className="welcome-links">
        <a href="https://github.com/brianfdo" target="_blank" rel="noopener noreferrer"><FaGithub className='mx-2 github' /></a>
        <a href="https://linkedin.com/in/brianfdo" target="_blank" rel="noopener noreferrer"><FaLinkedin className='mx-2 linkedin'/></a>
        <a href="https://open.spotify.com/user/soccerguy333" className='mx-2 spotify' target="_blank" rel="noopener noreferrer"><FaSpotify className='mx-2 spotify'/></a>
        <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              
              style={{ cursor: 'pointer' }}
            >
              <FaEnvelope size={30} className="mx-2 email"/>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
