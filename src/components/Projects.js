import React from 'react';

function Projects() {
  return (
    <section id="projects" className="my-5">
      <h2>Projects</h2>
      <hr />
      <div>
        <h5>IronHacks COVID-19 Data Science Hackathon</h5>
        <p>Developed an ARIMA model using real-time time series data to predict the weekly foot traffic at restaurants (and other places of interest) in Marion and Tippecanoe County, Indiana.</p>
        <p>Synthesized a report with resulting predictions and insights generated from the model to inform the State of Indiana, the Protect Purdue team, and the City of Lafayette about the impact of COVID-19.</p>
      </div>
      <div>
        <h5>MaskMandator</h5>
        <p>Utilized Keras, TensorFlow, and OpenCV to create an application that uses real-time image recognition to identify whether a person is wearing a mask.</p>
        <p>Trained CNN model with 92% validation accuracy for face mask object detection using Kaggle’s Facemask dataset.</p>
      </div>
    </section>
  );
}

export default Projects;
