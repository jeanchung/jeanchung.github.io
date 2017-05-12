import React from 'react';

const SingleProject = props => (
  <div className="md-col md-col-6 px2">
    <div className="project-card">
      <a href="#" className="project-card-image">
        <img src={img} />
      </a>
      <div className="project-card-text">
        <h4 className="center">{title}</h4>
        <p>{summary}</p>
      </div>
    </div>
  </div>
);

export default SingleProject;
