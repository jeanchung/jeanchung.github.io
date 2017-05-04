import React from 'react';

const ProjectCard = ({ title, summary, img }) => (
  <div className="md-col md-col-6 px2">
    <div className="project-card">
      <a href="#" className="project-card-image">
        <img src={img} />
      </a>
      <div className="project-card-text">
        <h4 className="h3 center">{title}</h4>
        <p>{summary}</p>
      </div>
    </div>
  </div>
);

export default ProjectCard;
