import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Skills.css';

const devTools = [
  { name: 'scikit-learn', img: './images/Scikit_learn_logo_small.svg' },
  { name: 'TensorFlow', img: './images/tensorflow.png' },
  { name: 'PyTorch', img: './images/Pytorch.png' },
  { name: 'Docker', img: './images/docker.png' },
  { name: 'Kubernetes', img: './images/Kubernetes_logo_without_workmark.svg' },
  { name: 'Snowflake', img: './images/Snowflake.png' },
  { name: 'Spark', img: './images/Apache_Spark_logo.svg.png' },
  { name: 'MLflow', img: './images/mlflow.png' },
  { name: 'Databricks', img: './images/Databricks_Logo.png'},
  { name: 'Tableau', img: './images/Tableau.png' },
  { name: 'GeoPandas', img: './images/geopandas_icon.webp' },
  { name: 'Folium', img: './images/folium_logo.png' },
  { name: 'OpenCV', img: './images/OpenCV.jpeg' },
  { name: 'MongoDB', img: './images/mongoDB_icon.jpeg' },
  { name: 'Selenium', img: './images/1200px-Selenium_Logo.png'},
  { name: 'Flask', img: './images/Flask.png' },
  { name: 'React', img: './images/React.png' },
  { name: 'Node.js', img: './images/Node.js_logo.svg' }
];

const languages = [
  { name: 'Python', level: 95 },
  { name: 'Java', level: 85 },
  { name: 'R', level: 90 },
  { name: 'C', level: 70 },
  { name: 'C++', level: 60 },
  { name: 'Bash (UNIX)', level: 70 },
  { name: 'SQL', level: 90 },
  { name: 'SAS', level: 85 },
  { name: 'Cypher', level: 75 },
  { name: 'Javascript', level: 85 },
  { name: 'HTML/CSS', level: 90 },
];

function Skills() {
  return (
    <div id="skills" className="container my-5 p-3">
      <h2 className="text-center cool-font mb-4">Skills</h2>
      <div className="row justify-content-center">

        
        <div className="col-md-6 d-flex justify-content-center">
          <div className="card shadow skill-card mx-4">
            <div className="card-body">
              <h5 className="card-title">Programming Languages</h5>
              <ul className="list-unstyled skill-list">
                {languages.map((language, index) => (
                  <li key={index} className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{language.name}</span>
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

        <div className="col-md-6 d-flex justify-content-center">
          <div className="card shadow skill-card mx-4">
            <div className="card-body">
              <h5 className="card-title">Tools and Frameworks</h5>
              <div className="row">
                {devTools.map((tool, index) => (
                  <div key={index} className="col-4 text-center mb-2">
                    <img
                      src={tool.img}
                      alt={tool.name}
                      className="img-fluid dev-tool-img mb-2"
                    />
                    <p>{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;