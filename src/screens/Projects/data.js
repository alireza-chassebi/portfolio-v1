const projects = [
  {
    title: 'Portfolio-V1',
    description:
      'First iteration of my website built with React and hosted on Vercel.',
    technologies: ['HTML', 'CSS', 'React'],
    github: 'https://github.com/alireza-chassebi/portfolio-v1',
    website: 'http://localhost:3000/',
  },
  {
    title: 'Palette',
    description:
      'Color palette repository built for Android and IOS using React Native. Palettes are stored on the devices local storage and can be deleted with a simple swipe.',
    technologies: ['Expo', 'ReactNative', 'Gesture-Handler'],
    github: 'https://github.com/alireza-chassebi/Palette-RN',
  },

  {
    title: 'VidMe',
    description:
      'REST api for a movie rental app. Allows users to rent and return movies. Authentication is done using JWT. Front End coming SOON!',
    technologies: ['Express', 'MongoDB', 'Jest', 'JWT'],
    github: 'https://github.com/alireza-chassebi/VidMe',
  },
  {
    title: 'Websocket Editor',
    description:
      'Simple rich text editor built for groups. Conventional hotkeys can be used to change text styling and the URL can be shared to add people to the group.',
    technologies: ['Docker', 'Socket.io', 'React', 'Websockets'],
    github: 'https://github.com/alireza-chassebi/websocket-editor',
    website: 'https://websocket-editor.herokuapp.com/',
  },
  {
    title: 'TodoHooks',
    description: 'Todo list I built to try out MUI.',
    technologies: ['React', 'MUI'],
    github: 'https://github.com/alireza-chassebi/react-hooks-todo',
    website: 'https://react-hooks-todo.vercel.app/',
  },
  {
    title: 'Pokedex',
    description:
      'Utilized the pokeapi to build a pokedex that displays each pokemons unique stats.',
    technologies: ['React', 'React-Router', 'Bootstrap'],
    website: 'https://pokedex-ruby.vercel.app/',
  },
  {
    title: 'Game Of Life',
    description: "Conway's game of life simulation.",
    technologies: ['React', 'MUI'],
    github: 'https://github.com/alireza-chassebi/game-of-life',
    website: 'https://alirezas-game-of-life.herokuapp.com/',
  },
  {
    title: 'Timing',
    description:
      'Stopwatch I built for my phone because I did not like the one on my phone.',
    technologies: ['Expo', 'ReactNative'],
    github: 'https://github.com/alireza-chassebi/timing',
  },
  {
    title: 'Faisal Al-Khateeb',
    description:
      'The first website I ever created! A freelance project for a fellow UofT student.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    website: 'http://faisalkhateeb.com/',
  },
];

const schoolProjects = [
  {
    title: 'ECE297 GIS',
    description:
      'Graphical Information System built over 2 months in a team of 3. We basically built a primitive version of "Google Maps".',
    technologies: ['C++', 'GTK', 'LibCurl'],
  },
  {
    title: 'ECE444 StudyBuddy',
    description:
      'Web application built over 2 months in a team of 5. The purpose of the app was to provide a platform for students to hire tutors, make study groups and share/rate notes.',
    technologies: ['RoR', 'Stripe', 'Bootstrap', 'Postgresql'],
  },
];

export { projects, schoolProjects };
// title, description, technologies, github, website
