import React from 'react';
import { Project } from '../../components/Project';
import './projects.css';
import { projects, schoolProjects } from './data';

const Projects = () => {
  return (
    <div className="Projects">
      <p>Projects</p>
      <div className="Projects-list">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
        {schoolProjects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
