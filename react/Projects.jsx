import React from 'react';
import ProjectCard from './ProjectCard';

import projects from '../projectData';

const Projects = props => (
  <div>
    <h3 className="h2 section-title">Projects</h3>
    <div className="project-card-container">
      <div className="clearfix mxn2">
        {projects.map(project => <ProjectCard {...project} key={project.title} />)}
      </div>
    </div>
  </div>
);


export default Projects;
