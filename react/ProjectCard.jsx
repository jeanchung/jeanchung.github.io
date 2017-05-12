import React from 'react';
// import { Link } from 'react-router-dom';

const ProjectCard = ({ title, summary, img, openModal }) => (
  <div className="md-col md-col-6 p2">
    <div className="project-card">
      <button onClick={openModal} className="project-card-image">
        <img src={img} />
      </button>
      <div className="project-card-text">
        <h4 className="h3 center">{title}</h4>
        <p>{summary}</p>
      </div>
    </div>
  </div>
);

export default ProjectCard;
