import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'R', 'Bash (UNIX)', 'MySQL', 'SAS', 'Cypher', 'Javascript', 'HTML/CSS'],
  },
  {
    category: 'Dev Tools',
    skills: ['Docker', 'Kubernetes', 'Snowflake', 'Spark', 'MLflow', 'scikit-learn', 'TensorFlow', 'Tableau', 'MongoDB', 'Flask', 'React'],
  },
  {
    category: 'Certifications',
    skills: ['AWS Certified Cloud Practitioner'],
  },
];

const languages = [
  { name: 'Python', level: 95 },
  { name: 'Java', level: 80 },
  { name: 'C', level: 70 },
  { name: 'C++', level: 60 },
  { name: 'R', level: 90 },
  { name: 'Bash (UNIX)', level: 70 },
  { name: 'MySQL', level: 90 },
  { name: 'SAS', level: 75 },
  { name: 'Cypher', level: 75 },
  { name: 'Javascript', level: 85 },
  { name: 'HTML/CSS', level: 90 },
];

function Skills() {
  return (
    <div id="skills" className="container my-5 p-2">
      <h2 className="text-center cool-font mb-4">Skills</h2>
      <div className="card shadow skill-card mx-auto">
        <div className="card-body">
          <h5 className="card-title">Programming Languages</h5>
          <ul className="list-unstyled skill-list">
            {languages.map((language, index) => (
              <li key={index} className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <span>{language.name}</span>
                  {/* <span>{language.level}%</span> */}
                </div>
                <div className="progress mt-1">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${language.level}%` }}
                    aria-valuenow={language.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
    </div>
  );
}

export default Skills;

