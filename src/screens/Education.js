import React from 'react';
import { Container } from '../components/Container';
import './education.css';

const Education = () => {
  return (
    <Container>
      <div className="Education">
        <p>
          Education
          <span role="img" aria-label="education">
            🎓
          </span>
        </p>
        <p className="education-body">
          I'm currently a Computer Engineering student at the
          <span> University Of Toronto St George</span>. Computer Engineering
          provided me with knowledge of both software and hardware. However my
          passion lies with Software, specifically Fullstack Development. Over
          the years I have spent alot of my time learning about Software both
          through academia and reading.
        </p>
        <div className="list-container">
          <div className="list education-body">
            <p>
              <span>Software Courses</span>
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://engineering.calendar.utoronto.ca/search-courses?filter=Aps106&field_section_1_value=All&field_subject_area1_tid=All">
                  APS106 (Python , OOP)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://engineering.calendar.utoronto.ca/search-courses?filter=PROGRAMMING+FUNDAMENTALS&field_section_1_value=All&field_subject_area1_tid=All">
                  ECE244 (C++ , Large Software)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.eecg.utoronto.ca/~vaughn/ece297/ECE297/course_overview/syllabus.pdf">
                  ECE297 (GIS Project , TSP competition)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://engineering.calendar.utoronto.ca/search-courses?filter=ECE344&field_section_1_value=All&field_subject_area1_tid=All">
                  ECE344 (OS)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://engineering.calendar.utoronto.ca/search-courses?filter=ECE345&field_section_1_value=All&field_subject_area1_tid=All">
                  ECE345 (Algorithims & DS)
                </a>
              </li>
              <li>
                <a
                  href="https://engineering.calendar.utoronto.ca/search-courses?filter=ECE444&field_section_1_value=All&field_subject_area1_tid=All"
                  target="_blank"
                  rel="noopener noreferrer">
                  ECE444 (Web Dev , SDLC , Testing)
                </a>
              </li>
              <li>
                <a
                  href="https://fas.calendar.utoronto.ca/course/csc343h1"
                  target="_blank"
                  rel="noopener noreferrer">
                  CSC343 (SQL , DB design)
                </a>
              </li>
              <li>
                <a
                  href="https://engineering.calendar.utoronto.ca/search-courses?filter=ece568&field_section_1_value=All&field_subject_area1_tid=All"
                  target="_blank"
                  rel="noopener noreferrer">
                  ECE568 (Security , Auth , SSL)
                </a>
              </li>
            </ul>
          </div>
          <div className="list education-body">
            <p>
              <span>Technical Skills</span>
            </p>
            <p>Front End:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>React Native</li>
            </ul>
            <p>Back End:</p>
            <ul>
              <li>C/C++</li>
              <li>Python</li>
              <li>Node.js - Express</li>
              <li>Ruby - RoR (basic)</li>
            </ul>
            <p>Databases:</p>
            <ul>
              <li>Postgresql</li>
              <li>MongoDB</li>
            </ul>
            <p>Tools:</p>
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>Travis CI</li>
              <li>Heroku</li>
              <li>Docker</li>
              <li>ES Lint</li>
              <li>Babel</li>
              <li>React Dev Tools</li>
              <li>Postman</li>
            </ul>
            <p>Other:</p>
            <ul>
              <li>Agile</li>
              <li>Waterfall</li>
              <li>TDD</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
