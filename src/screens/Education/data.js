const skills = {
  title: 'Technical Skills',
  lists: [
    {
      title: 'Front End',
      list: ['HTML5', 'CSS', 'Javascript', 'React', 'React Native'],
    },
    {
      title: 'Back End',
      list: ['C/C++', 'Python', 'Node.js - Express'],
    },
    {
      title: 'Databases',
      list: ['Postgresql', 'MongoDB'],
    },
    {
      title: 'Tools',
      list: [
        'Git',
        'Github',
        'TravisCI',
        'Heroku',
        'Docker',
        'ES Lint',
        'Babel',
        'React Dev Tools',
        'Postman',
        'npm',
      ],
    },
    {
      title: 'Other',
      list: ['Agile', 'Waterfall', 'TDD', 'CI/CD', 'Jest'],
    },
  ],
};

const courses = {
  title: 'Software Courses',
  list: [
    { title: 'APS106 (Python , OOP)', code: 'aps106' },
    { title: 'ECE244 (C++ , Large Software)', code: 'ece244' },
    {
      title: 'ECE297 (GIS Project , TSP competition)',
      href:
        'https://www.eecg.utoronto.ca/~vaughn/ece297/ECE297/course_overview/syllabus.pdf',
    },
    { title: 'ECE344 (OS)', code: 'ece344' },
    { title: 'ECE345 (Algorithims & DS)', code: 'ece345' },
    { title: 'ECE444 (Web Dev , SDLC , Testing)', code: 'ece444' },
    {
      title: 'CSC343 (SQL , DB design)',
      href: 'https://fas.calendar.utoronto.ca/course/csc343h1',
    },
    { title: 'ECE568 (Security , Auth , SSL)', code: 'ece568' },
  ],
};

export { skills, courses };
