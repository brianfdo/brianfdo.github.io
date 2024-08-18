import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Projects.css'
const projectsData = [
  {
    name: 'Music Recommender System',
    img: 'https://github.com/brianfdo/recommender_system/raw/main/images/recommendations.png?raw=true',
    description: "A full stack web application that provides personalized music recommendations based on users' Spotify listening data. It leverages the Spotify API to fetch user data, utilizes a content-based filtering model to generate recommendations, and presents the information through a responsive UI built with React.",
    languages: ['Python', 'JavaScript', 'HTML/CSS'],
    frameworks: ['React', 'Express', 'Node.js', 'Flask', 'scikit-learn'],
    github: 'https://github.com/brianfdo/recommender_system',
    link: 'View on Github'
  },
  {
    name: 'Portfolio Website',
    img: '/images/portfolio-website.png',
    description: 'This portfolio website built with React and Bootstrap to showcase my projects and skills.',
    languages: ['JavaScript', 'HTML/CSS'],
    frameworks: ['React', 'Bootstrap'],
    github: 'https://github.com/brianfdo/brianfdo.github.io',
    link: 'View on Github'
  },
  {
    name: 'Shell Interpreter',
    img: '/images/shell2.png',
    description: 'A custom shell interpreter built in C and C++, with features like process creation, file redirection, pipes, subshell, wildcard expansion, if statements, loops, and more. This project was completed for the Systems Programming course (CS 252) at Purdue University.',
    languages: ['C', 'C++', 'Bash'],
    frameworks: ['Lex', 'Yacc'],
  }, 
  {
    name: 'NBA Player Analysis',
    img: '/images/NBA_PCA.png',
    description: 'This project analyzes and clusters NBA players into specific roles to help understand player archetypes and team strengths/weaknesses. Futhermore, models were developed to predict standout players in an effort to predict the winners of NBA awards such as MVP, ROTY, DPOY, and CPOY. In addition, a custom high-level metric was created using SVM to evaluate the performance of a player.',
    languages: ['Python'],
    frameworks: ['numpy', 'pandas', 'scikit-learn', 'Selenium'],
  },

  {
    name: 'Screen Time Chrome Web Extension',
    img: '/images/screen_time.jpg',
    description: "This chrome web extension tracks when a user opens a new tab, when a tab changes to a different website, and how long a certain site is onscreen to provide a summary of the user's screen time habits. Namely, the chrome web extension displays the user's top 5 visited websites and the time spent on each of them. This way, the user can be conscious of their productivity/lack thereof and improve on it.",
    languages: ['JavaScript', 'HTML/CSS'],
    frameworks: ['Chart.js', 'Firebase'],
    github: 'https://github.com/ishaanzaveri/ChromeScreenTime',
    link: 'View on Github'
  },
  {
    name: 'IronHacks COVID-19 Data Science Hackathon Winner',
    img: 'https://www.nfid.org/wp-content/uploads/2023/03/Coronavirus.png',
    description: 'Using real-time time series data over the course of Spring-Summer 2021, I developed an accurate machine learning model to predict the weekly foot traffic at restaurants (and other places of interest) in Marion and Tippecanoe County, Indiana. The resulting predictions and insights generated from the model were used to inform citizens as well as the State of Indiana, the Protect Purdue team, and the City of Lafayette about the impact of COVID-19.',
    languages: ['Python', 'R', 'SQL'],
    frameworks: ['numpy', 'pandas', 'statsmodels', 'scikit-learn', 'BigQuery'],
    github: './images/BrianFernando_SS2021_1stPlace copy.pdf',
    link: 'View Certificate'
  }, 
];

function Projects() {
  return (
    <div id="projects" className="container my-5 p-2">
      <h2 className="text-center cool-font mb-4">Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="row mb-5 align-items-center">
          {index % 2 === 0 ? (
            <>
              <div className="col-md-6">
                <img 
                  src={project.img} 
                  className="img-fluid project-img" 
                  alt={project.name}
                />
              </div>
              <div className="col-md-6">
                <div className="project-details">
                  <h5 className="project-title">{project.name}</h5>
                  <p>{project.description}</p>
                  <p><strong>Languages:</strong> {project.languages.join(', ')}</p>
                  <p><strong>Frameworks:</strong> {project.frameworks.join(', ')}</p>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="btn btn-primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {project.link}
                    </a>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 order-md-2">
                <img 
                  src={project.img} 
                  className="img-fluid project-img" 
                  alt={project.name}
                />
              </div>
              <div className="col-md-6 order-md-1">
                <div className="project-details">
                  <h5 className="project-title">{project.name}</h5>
                  <p>{project.description}</p>
                  <p><strong>Languages:</strong> {project.languages.join(', ')}</p>
                  <p><strong>Frameworks:</strong> {project.frameworks.join(', ')}</p>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="btn btn-primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {project.link}
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;
