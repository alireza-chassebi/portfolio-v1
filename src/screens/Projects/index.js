import React from 'react';
import { Container } from '../../components/Container';
import { Project } from '../../components/Project';
import './projects.css';

const Projects = () => {
  return (
    <div className="Projects">
      <p>Projects</p>
      <div className="Projects-list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
