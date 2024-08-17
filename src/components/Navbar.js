// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-card container shadow-lg p-3 my-5">
      <h1 className="text-center mb-2">Brian Fernando</h1>
      <div className="d-flex justify-content-center">
        <ul className="nav">
          <li className="nav-item mx-2">
            <Link 
              className="nav-link" 
              to="about" 
              smooth={true} 
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link 
              className="nav-link" 
              to="projects" 
              smooth={true} 
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link 
              className="nav-link" 
              to="skills" 
              smooth={true} 
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item mx-2">
            <a 
              className="nav-link" 
              href="https://drive.google.com/file/d/1k956jTjXa-YngLx2HG-xT0ebdJnLR4SK/view?usp=sharing" 
            >
              Resume
            </a>
          </li>
          <li className="nav-item mx-2">
            <Link 
              className="nav-link" 
              to="contact" 
              smooth={true} 
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;





