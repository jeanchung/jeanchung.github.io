import React from 'react';

const ProjectCard = ({ title, summary, img }) => (
  <div className="md-col md-col-6 px2">
    <div className="project-card">
      <h4 className="h3 center">{title}</h4>
      <img src={img} />
      <p>{summary}</p>
    </div>
  </div>
);

export default ProjectCard;
