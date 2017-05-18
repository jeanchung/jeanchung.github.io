import React from 'react';
import ProjectCard from './ProjectCard';

import projects from '../projectData';

const Projects = ({ openModal }) => (
  <div className="projects-container">
    <h3 className="section-title white">Projects</h3>
    <div className="project-card-container">
      {projects.map(project =>
        <ProjectCard
          {...project}
          key={project.key}
          openModal={() => openModal(project.key)}
        />)
      }
    </div>
  </div>
);

export default Projects;
