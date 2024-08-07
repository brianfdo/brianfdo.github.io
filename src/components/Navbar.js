import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <div className="top-card container shadow-lg p-4 my-5">
      <h1 className="text-center mb-4">Brian Fernando</h1>
      <div className="d-flex justify-content-center">
        <ul className="nav">
          <li className="nav-item mx-2">
            <Link 
              className="nav-link" 
              to="education" 
              smooth={true} 
              duration={500}
            >
              Education
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link 
              className="nav-link" 
              to="experience" 
              smooth={true} 
              duration={500}
            >
              Experience
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;




