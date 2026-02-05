// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import kodnestLogo from './assets/company_logo/kodnest_logo.png';

// Education Section Logo's
import revaLogo from './assets/education_logo/revalogo.jpg';
import bgs from './assets/education_logo/bgas.png';
import ppec from './assets/education_logo/ppeclogo.png';

// Project Section Logo's
import agri from './assets/work_logo/agri.png';
import gemini from './assets/work_logo/gemini.png';
import movierecLogo from './assets/work_logo/netflix.png';
import weatherLogo from './assets/work_logo/weather.png';
import portfolio from './assets/work_logo/myportfolio.png';
import imagesearchLogo from './assets/work_logo/imagesearch.png';





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: kodnestLogo,
      role: "Fullstack Developer Course",
      company: "Kodnest Technologies, Bengaluru, Karnataka, India",
      date: "May 2025 - Present",
      desc: " Gained practical exposure during course at KodNest by working on real projects utilizing Java, MySQL, Frontend Technology, and Manual Testing. Learned from industry experts, improving coding, database management, and software quality assurance skills while adapting to professional software development standards.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Java",
        "MySQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: revaLogo,
      school: "REVA University, Bengaluru",
      date: "DEC 2021 - JUNE 2025",
      grade: "8.0 CGPA",
     desc: "I completed my Bachelor's degree in Computer Science and Information Technology from Reva University, Bengaluru. Throughout my studies, I was immersed in a variety of subjects that depened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Reva University allowed me to work on projects that applied theoretical concepts to real-world problems." ,      
    degree: "Bachelor of Engineering - B.E. (Computer Science)",
    },
    {
      id: 1,
      img: bgs,
      school: "BGS PU College Chikkamagaluru",
      date: "July 2021",
      grade: "86.16%",
     desc : "I completed my class 12 education from BGS PU College Chikkamagaluru, under the State board, where I studied Physics, Chemistry, Mathematics and Computer Science.",      degree: "Bachelor of Science - BSC (Computer Science)",
     degree: "Pre-University Course - PUC (PCMC)",
    },
    {
      id: 2,
      img: ppec,
      school: "Poorna Prajna Education center, Chikkamagaluru",
      date: "Apr-2019",
      grade: "89.76%",
     desc : "I completed my class 10 education from Poorna Prajna Education center, Chikkamagaluru, under the State board.",     
    degree: "Secondary School Leaving Certificate - SSLC",},
    
  ];
  
  export const projects = [

    {
      id: 0,
      title: "CineWave - Movie Streaming Platform",
      description:
          "Created a Netflix-inspired streaming platform website with advanced functionalities using HTML,CSS, and JavaScript. Engineered core features like video streaming, user authentication, and content recommendation algorithms, ensuring responsive interface across devices and mirroring the professional quality seen in leading entertainment applications",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Vivek-KA/CineWave-Movie-Recommendation",
      webapp: "https://cine-wave-movie-recommendation.vercel.app/",
    },
    
     {
      id: 1,
      title: "My-Portfolio Website",
      description:
      "This is my personal portfolio website designed to showcase my skills, projects, and experience as a web developer. The portfolio features a modern, clean, and responsive user interface with smooth navigation and visually appealing layouts. It is built to provide a clear overview of my technical expertise, problem-solving abilities, and hands-on project experience. ",      
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
      github: "https://github.com/Vivek-KA/My-Portfolio?tab=readme-ov-file",
      webapp: "https://my-portfolio-red-iota-82.vercel.app/",
    },
    
    {
      id: 2,
      title: "Agriculture Equipment Rental system",
      description:
        "Personal Team Project Worked effectively in a team to build a rental price prediction system utilizing XGBoost, where I contributed to both the machine learning pipeline and front-end development. Processed and analyzed .csv datasets to train the model, resulting in improved accessibility and cost savings for farmers.",
      image: agri,
      tags: ["HTML", "CSS", "JavaScript", "Python", "XGBoost", "Machine Learning"],
      github: "https://github.com/Vivek-KA/Agriculture-Equipment-Rental-System",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
   
    {
      id: 3,
      title: "Image Search Engine",
      description:
          " A simple and responsive Image Search Website built using HTML, CSS, and JavaScript, powered by the Unsplash API. Users can search for images by keyword and view high-quality photos dynamically loaded from Unsplash.",    
        image: imagesearchLogo,
      tags: ["HTML", "CSS", "JavaScript", "Unsplash API"],
      github: "https://github.com/Vivek-KA/image-search-engine",
      webapp: "https://image-search-engine-livid.vercel.app//",
    },
    {
      id: 4,
      title: "WeatherUpdate",
      description:
      "A simple and elegant weather application that shows current weather conditions for any city. Built with HTML, CSS, and JavaScript using the OpenWeatherMap API.",
        image: weatherLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/Vivek-KA/Weather-App",
      webapp: "https://image-search-engine-xh4s.vercel.app/i",
    },
   
    {
      id: 5,
      title: "Gemini Clone",
      description:
        " This project represent the interface of the gemini AI which is built using React, JavaScript, HTML/CSS,and it is connected through the Gemini API to reply for realtime chating. ",
       image: gemini,
        tags: ["React JS", "TMDB API", "HTML", "CSS", "JavaScript"],
       github: "https://github.com/Vivek-KA/Gemini-Clone",
      // webapp: "https://csprep.netlify.app/",
    },
    
    
  ];  