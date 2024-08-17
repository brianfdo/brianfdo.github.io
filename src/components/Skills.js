import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';

const devTools = [
  { name: 'scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'TensorFlow', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iQyYphUHhLEUchqyhIwsRMe0G9aqVFjUaA&s' },
  { name: 'PyTorch', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABCjpuMscLQRv3Qn612CuXy7wBF23Xs9AOQ&s' },
  { name: 'Docker', img: 'https://cdn-icons-png.flaticon.com/512/919/919853.png' },
  { name: 'Kubernetes', img: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
  { name: 'Snowflake', img: 'https://avatars.githubusercontent.com/u/6453780?s=280&v=4' },
  { name: 'Spark', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/250px-Apache_Spark_logo.svg.png' },
  { name: 'MLflow', img: 'https://miro.medium.com/v2/resize:fit:1056/0*5Hubk4Nwe7BdQS2D' },
  { name: 'Databricks', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Databricks_Logo.png/800px-Databricks_Logo.png'},
  { name: 'Tableau', img: 'https://miro.medium.com/v2/resize:fit:700/1*P5bCzSH734DlqTXXpwLm_Q.png' },
  { name: 'GeoPandas', img: 'https://geopandas.org/en/latest/_images/geopandas_icon.png' },
  { name: 'Folium', img: 'https://python-visualization.github.io/folium/latest/_static/folium_logo.png' },
  { name: 'OpenCV', img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--tcMWlo3q--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://cdn.hashnode.com/res/hashnode/image/upload/v1618654038257/tM_8qo9Gt.jpeg' },
  { name: 'MongoDB', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74RF-PpTllXRP5J2TKWM_1BoKFw9fggC_mw&s' },
  { name: 'Selenium', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/1200px-Selenium_Logo.png'},
  { name: 'Flask', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s' },
  { name: 'React', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s' },
  { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' }
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
        {/* Programming Languages Card */}
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

        {/* Dev Tools Card */}
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

