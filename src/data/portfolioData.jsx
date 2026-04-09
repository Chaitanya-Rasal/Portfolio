import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaJava, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiSpringboot, SiMongodb, SiMysql, SiBootstrap, SiHtml5, SiFlask, SiExpress, SiApachetomcat, SiLangchain } from 'react-icons/si';

export const personalInfo = {
  name: "Chaitanya Rasal",
  role: "Full Stack Java Developer",
  shortIntro: "Motivated Java Full Stack Developer with a strong foundation in object-oriented programming, databases, and web development — passionate about building efficient, scalable, and user-centric applications.",
  summary: "I'm a fresher Java Full Stack Developer with hands-on experience building full-stack web applications using React, Node.js, and MongoDB. I love writing clean, maintainable code and solving real-world problems through technology. I'm currently pursuing my MCA from SIMCA, Pune, and actively looking for opportunities to grow and contribute.",
  email: "chaitanya.rasal12345@gmail.com",
  phone: "+91 9075919253",
  location: "Pune, Maharashtra",
  github: "https://github.com/Chaitanya-Rasal",
  linkedin: "https://www.linkedin.com/in/chaitanya-rasal/",
  resumeUrl: "/resume.pdf"
};

export const skills = {
  "Programming Languages": [
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "C", icon: <FaCode className="text-gray-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-500" /> }
  ],
  "Frontend": [
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCode className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> }
  ],
  "Backend": [
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-500 dark:text-gray-300" /> },
    { name: "JSP", icon: <SiApachetomcat className="text-yellow-600" /> }
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Mongoose", icon: <FaDatabase className="text-red-400" /> }
  ],
  "Tools & Technologies": [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-gray-300" /> },
    { name: "JDBC", icon: <FaDatabase className="text-blue-600" /> },
    { name: "LangChain", icon: <SiLangchain className="text-green-600" /> },
    { name: "Apache Tomcat", icon: <SiApachetomcat className="text-yellow-600" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500" /> }
  ],
  "Core Concepts": [
    { name: "OOP", icon: null },
    { name: "Data Structures", icon: null },
    { name: "SDLC", icon: null },
    { name: "Problem Solving", icon: null }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Employment Application Review System (EARS)",
    description: "A full-stack recruitment management platform that automates the job application workflow. Candidates can apply online while recruiters manage postings, review resumes, and shortlist applicants through a dedicated admin dashboard.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
    techStack: ["React 19", "React Router DOM", "Node.js", "MySQL", "Axios", "Bootstrap 5", "Formik", "Yup"],
    githubUrl: "https://github.com/Chaitanya-Rasal/EARS",
    demoUrl: null
  },
  {
    id: 2,
    title: "Policy-Mind – AI Legal Document Q&A",
    description: "An AI-powered web application for summarizing complex legal and policy documents. Upload PDF or TXT files to get automated extractive summaries and ask specific questions using an interactive NLP-driven Q&A interface.",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Python 3.9", "Flask", "LangChain", "NLP", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/Chaitanya-Rasal/Policy-Mind",
    demoUrl: null
  },
  {
    id: 3,
    title: "Exam Portal – Online Examination System",
    description: "A complete multi-role online examination system supporting separate Admin and Student workflows. Admins can create and manage exams while students can securely log in, attempt assessments, and view results in real time.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Java", "JSP", "MySQL", "JDBC", "Apache Tomcat", "HTML/CSS"],
    githubUrl: "https://github.com/Chaitanya-Rasal/Exam_Portal",
    demoUrl: null
  },
  {
    id: 4,
    title: "DailyTaskManager – Console Task Management",
    description: "An advanced console-based task management application built with Core Java. Features full user authentication with session management, complete CRUD operations for tasks, and persistent storage powered by MySQL via JDBC.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Core Java", "JDBC", "MySQL", "OOP", "Session Management"],
    githubUrl: "https://github.com/Chaitanya-Rasal/DailyTaskManager",
    demoUrl: null
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Sinhagad Institute of Management & Computer Application (SIMCA), Pune",
    period: "2025 – Pursuing",
    description: "Pursuing MCA with a focus on advanced software engineering, system design, and full-stack development."
  },
  {
    id: 2,
    degree: "B.Sc. Computer Science",
    institution: "Samarth College of Computer Science, Belhe",
    period: "2022 – 2025",
    description: "Studied core computer science fundamentals including Data Structures, Algorithms, Database Management, OOP, and Web Technologies."
  }
];
