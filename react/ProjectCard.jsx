import React from 'react';

const ProjectCard = ({ title, summary, img, openModal }) => (
  <div className="project-card-wrapper">
    <div className="project-card">
      <button onClick={openModal} className="project-card-image">
        <img src={img} />
      </button>
      <div className="project-card-text">
        <h4 className="center-text">{title}</h4>
        <p>{summary}</p>
      </div>
    </div>
  </div>
);

export default ProjectCard;
