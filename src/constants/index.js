import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    python,
    techtutor,
    java,
    graphql,
    spring,
    flask,
    apollo,
    next,
    sqlite
  } from "../assets";
  
  export const navLinks = [
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Let's Connect",
    },
  ];
  
  const services1 = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const skills = [

    {
      title: "Python",
      icon: python,
    },
    {
      title: "Java",
      icon: java,
    },
    {
      title: "React.js",
      icon: reactjs,
    },
    {
      title: "GraphQL",
      icon: graphql,
    },
    {
      title: "Node.js",
      icon: nodejs,
    },
    {
      title: "MongoDB",
      icon: mongodb,
    },
    {
      title: "SQLite",
      icon: sqlite,
    },
    {
      title: "Spring Boot",
      icon: spring,
    },
    {
      title: "Flask",
      icon: flask,
    },
    {
      title: "Apollo",
      icon: apollo,
    },
    {
      title: "Next.js",
      icon: next,
    },
    {
      title: "JavaScript",
      icon: javascript,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: graphql,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: graphql,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Toronto Fitness Club",
      description:
        "Designed a comprehensive platform for users to navigate, sign up, subscribe, and create their own schedules from gym studios based in Toronto",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "sqlite",
          color: "pink-text-gradient",
        },
      ],
      image: web,
      source_code_link: "https://github.com/",
    },
    {
      name: "Spring Boot",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: web,
      source_code_link: "https://github.com/",
    },
    {
      name: "TechTutor",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "SQLAlchemy",
          color: "green-text-gradient",
        },
        {
          name: "cohere-api",
          color: "pink-text-gradient",
        },
      ],
      image: techtutor,
      source_code_link: "https://github.com/",
    },


  ];
  
  export { skills, experiences, testimonials, projects };