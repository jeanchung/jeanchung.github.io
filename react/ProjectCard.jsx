import React from 'react';

const ProjectCard = ({ title, summary, img }) => (
  <div className="md-col md-col-6 px2">
    <div className="project-card">
      <div className="project-card-image">
        <a href="#">
          <img src={img} />
        </a>
      </div>
      <h4 className="h3 center">{title}</h4>
      <p>{summary}</p>
    </div>
  </div>
);

export default ProjectCard;
