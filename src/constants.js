// Skills Section Logo's
//frontend
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
//backend
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import Django from './assets/tech_logo/django.png';
import AiLogo from './assets/tech_logo/AiLogo.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
//languages
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
//tools
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import AppwriteLogo from './assets/tech_logo/AppwriteLogo.png';
import DockerLogo from './assets/tech_logo/Docker.png';
// Experience Section Logo's
import webguruLogo from './assets/company_logo/webguru.png';


// Education Section Logo's
import brainware from './assets/education_logo/brainware.png';
import naipur from './assets/education_logo/Naipur.png';
import classX from './assets/education_logo/classX.png';

// Project Section Logo's
import lms from './assets/work_logo/lms.png';
import job from './assets/work_logo/job_finder.png';
import youtube from './assets/work_logo/youtube_backend.png';
import bug from './assets/work_logo/bug_tracker.png';
import bug_video from './assets/work_logo/bug_Tracker.mp4';
import mediaTube_video from './assets/work_logo/mediaTube_video.mp4';
import lms_demo from './assets/work_logo/lms_demoVedio.mp4';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Django', logo: Django },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'django', logo: Django },
      { name: 'AI', logo: AiLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Appwrite', logo: AppwriteLogo },
      { name: 'Docker', logo: DockerLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webguruLogo,
    role: "Django Developer",
    company: "WebGuru Infosystems Pvt. Ltd.",
    date: "november 2024 - march 2025",
    desc: "Developed scalable web applications using Python and Django, integrating RESTful APIs and database systems • Built a web application named Twixter, with functionalities similar to Twitter, including posting, viewing, and managing tweets • Gained hands-on experience in backend development, API design •",
    skills: [
      "Python",
      "Django",
      "API Development",
      "Data Science",
      "MongoDB",
      "Tailwind CSS",
    ],
  }
];

export const education = [
  {
    id: 0,
    img: brainware,
    school: "BRAINWARE UNIVERSITY, Kolkata",
    date: "June 2021 - July 2025",
    grade: "8.7 CGPA",
    desc: "I have completed my B.Tech in Computer Science & Engineering from Brainware University, Kolkata. During my studies, I built a strong foundation in programming, software development, and computer science concepts. I have studied courses such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in workshops and technical events, which helped enhance my skills and knowledge. My experience at Brainware University has been key in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech (Computer Science & Engineering)",
  },
  {
    id: 1,
    img: naipur,
    school: "Naipur Santi Sudha Institutions, Purba Medinipur, West Bengal",
    date: "April 2019 - Feb 2021",
    grade: "78%",
    desc: "I completed my class 12 education from Naipur Santi Sudha Institution, where I studied Physics, Chemistry, Mathematics, and Biology (PCMB) under the WBCHSE board.",
    degree: "WBCHSE(XII) - PCMB",
  },

  {
    id: 2,
    img: classX,
    school: "Patashpur Harocharan Vidyapith, Purba Medinipur, West Bengal",
    date: "March 2019",
    grade: "73%",
    desc: "I completed my class 10 education from Patashpur Harocharan Vidyapith, Purba Medinipur, under the WBBSE, where I studied General Subjects.",
    degree: "WBBSE(X) - General",
  },
];

export const projects = [
  {
    id: 0,
    title: "Learning Management System",
    description:
      "A full-stack LMS platform that enables users to create accounts, explore courses, make secure payments via Razorpay, and manage their profiles. I integrated Gmail SMTP for automated email notifications, including sign-up confirmations, course purchases, and payment receipts. Additionally, I built an admin panel to manage users, courses, and transactions with real-time updates. The platform also utilizes Cloudinary for image and media storage, and I used Postman for API testing and debugging.",
    image: lms,
    tags: ["React.js", "Tailwaind", "MongoDB", "Node.js", "Express", "Razorpay", "Cloudinary", "SMTP", "Postman"],
    github: "https://github.com/SamidulSk/LearningPoint",
    video:lms_demo,
    webapp: "https://learningpoint-frontend.onrender.com/",
  },
  {
    id: 1,
    title: "Job Finder Application",
    description:
      "A full-stack Job Finder application that allows both users and companies to create accounts and manage their activities. Users can search and apply for jobs, update their profiles, and track applications, while companies can post job openings, review applications, and manage candidate interactions. The platform includes secure authentication with JWT-based authorization, along with an admin panel for managing users, companies, and job postings. I also integrated email notifications for updates and used Postman for API testing and debugging.",
    image: job,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Zod","ElasticSearch"],
    github: "https://github.com/SamidulSk/Job_Finder_Application",
    video:null,
    webapp: "https://github.com/SamidulSk/Job_Finder_Application",
  },
  {
    id: 2,
    title: "MediaHub",
    description:
      "This project is a backend system that supports user authentication, video uploads using Multer, and playlist management. It includes features such as likes, comments, tweet-style posts, and subscriptions to enhance user engagement. A performance dashboard was developed to track video metrics and user activity, while Cloudinary was integrated for secure media storage and Postman was used for API testing.",
    image: youtube,
    tags: ["Node.js", "MongoDB", "Express", "Appwrite","Pipeline","Multer","Cloudinary","Postman"],
    github: "https://github.com/SamidulSk/youtube-backend",
    video:mediaTube_video,
    webapp: "https://github.com/SamidulSk/youtube-backend",
  },
  {
    id: 3,
    title: "AI Powered Bug Tracker Application",
    description:
      "Bug Tracker application allow users and teams to create accounts, report bugs, assign tasks, and track issue resolution in real time. The platform includes role-based access control with secure JWT authentication, enabling admins to manage users, projects, and bug reports efficiently. It also provides features for status updates, priority management, and detailed bug history. Email notifications were integrated for updates, and Postman was used for API testing and debugging to ensure reliability.",
    image: bug,
    video:bug_video,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/SamidulSk/Bug_Tracker_WebApplication",
    webapp: "https://github.com/SamidulSk/Bug_Tracker_WebApplication",
  }
];  