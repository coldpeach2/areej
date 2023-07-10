(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../assets"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../assets"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.assets);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _assets) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.testimonials = _exports.skills = _exports.projects = _exports.navLinks = _exports.experiences = void 0;
  const navLinks = [{
    id: "skills",
    title: "Skills"
  }, {
    id: "projects",
    title: "Projects"
  }, {
    id: "contact",
    title: "Let's Connect"
  }];
  _exports.navLinks = navLinks;
  const services1 = [{
    title: "Full Stack Developer",
    icon: _assets.web
  }, {
    title: "Backend Developer",
    icon: _assets.backend
  }];
  const skills = [{
    title: "Python",
    icon: _assets.python
  }, {
    title: "Java",
    icon: _assets.java
  }, {
    title: "React.js",
    icon: _assets.reactjs
  }, {
    title: "GraphQL",
    icon: _assets.graphql
  }, {
    title: "Node.js",
    icon: _assets.nodejs
  }, {
    title: "MongoDB",
    icon: _assets.mongodb
  }, {
    title: "SQLite",
    icon: _assets.sqlite
  }, {
    title: "Spring Boot",
    icon: _assets.spring
  }, {
    title: "Flask",
    icon: _assets.flask
  }, {
    title: "Apollo",
    icon: _assets.apollo
  }, {
    title: "Next.js",
    icon: _assets.next
  }, {
    title: "JavaScript",
    icon: _assets.javascript
  }];
  _exports.skills = skills;
  const experiences = [{
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: _assets.graphql,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: ["Developing and maintaining web applications using React.js and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers."]
  }, {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: _assets.graphql,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: ["Developing and maintaining web applications using React.js and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers."]
  }];
  _exports.experiences = experiences;
  const testimonials = [{
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  }, {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  }, {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }];
  _exports.testimonials = testimonials;
  const projects = [{
    name: "Toronto Fitness Club",
    description: "Designed a comprehensive platform for users to navigate, sign up, subscribe, and create their own schedules from gym studios based in Toronto",
    tags: [{
      name: "react",
      color: "blue-text-gradient"
    }, {
      name: "django",
      color: "green-text-gradient"
    }, {
      name: "sqlite",
      color: "pink-text-gradient"
    }],
    image: _assets.web,
    source_code_link: "https://github.com/"
  }, {
    name: "Spring Boot",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [{
      name: "springboot",
      color: "blue-text-gradient"
    }, {
      name: "restapi",
      color: "green-text-gradient"
    }, {
      name: "java",
      color: "pink-text-gradient"
    }],
    image: _assets.web,
    source_code_link: "https://github.com/"
  }, {
    name: "TechTutor",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [{
      name: "flask",
      color: "blue-text-gradient"
    }, {
      name: "SQLAlchemy",
      color: "green-text-gradient"
    }, {
      name: "cohere-api",
      color: "pink-text-gradient"
    }],
    image: _assets.techtutor,
    source_code_link: "https://github.com/"
  }];
  _exports.projects = projects;
});