import React from 'react';
import { Container } from '../../components/Container';
import './education.css';
import { courses, skills } from './data.js';

const ENDPOINT =
  'https://engineering.calendar.utoronto.ca/search-courses?filter=';

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
          I'm currently a Computer Engineering student (Exp 2017-2021) at the
          <span> University Of Toronto St George</span>. Computer Engineering
          provided me with knowledge of both software and hardware. However my
          passion lies with Software, specifically Fullstack Development. Over
          the years I have spent alot of my time learning about Software both
          through academia and reading.
        </p>
        <div className="list-container">
          <div className="list education-body">
            <p>
              <span>{courses.title}</span>
            </p>
            <ul>
              {courses.list.map((course) => (
                <li key={course.title}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={
                      course.code
                        ? `${ENDPOINT}${course.code}&field_section_1_value=All&field_subject_area1_tid=All`
                        : course.href
                    }>
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="list education-body">
            <p>
              <span>{skills.title}</span>
            </p>
            {skills.lists.map(({ title, list }) => (
              <React.Fragment key={title}>
                <p>{title} :</p>
                <ul>
                  {list.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
