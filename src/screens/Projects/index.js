import React, { useState } from 'react';
import Project from '../../components/Project';
import Input from '../../components/Input';
import './projects.css';
import projectsData from './data';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const projectContainsQuery = (technologies, title) => {
    const lowerCaseQuery = query.toLowerCase();
    if (title.toLowerCase().indexOf(lowerCaseQuery) !== -1) return true;

    for (const tech of technologies) {
      if (tech.toLowerCase().indexOf(lowerCaseQuery) !== -1) return true;
    }

    return false;
  };

  const filteredProjects = query
    ? projects.filter(({ technologies, title }) =>
        projectContainsQuery(technologies, title)
      )
    : projects;

  return (
    <div className="Projects">
      <p>Projects</p>
      <Input
        onChange={handleQueryChange}
        placeholder="Enter a technology or a name"
        type="text"
      />
      {filteredProjects.length > 0 && (
        <footer>
          Note: Not all technologies are listed on the cards below
        </footer>
      )}
      <div className="Projects-list">
        {filteredProjects.map((project) => (
          <Project
            {...project}
            key={project.title}
            technologies={project.technologies.slice(0, 3)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
