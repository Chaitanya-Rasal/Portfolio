import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaJava, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiSpringboot, SiMongodb, SiMysql, SiBootstrap, SiHtml5, SiFlask, SiExpress } from 'react-icons/si';

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
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-500 dark:text-gray-300" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> }
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Mongoose", icon: <FaDatabase className="text-red-400" /> }
  ],
  "Tools & Technologies": [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-gray-300" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500" /> }
  ],
  "Core Concepts": [
    { name: "OOP", icon: null },
    { name: "Data Structures", icon: null },
    { name: "Text Preprocessing", icon: null },
    { name: "Problem Solving", icon: null }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Employment Application Review System (EARS)",
    description: "A comprehensive web-based recruitment management platform that simplifies the job application process for candidates and provides a robust admin dashboard to manage postings and review resumes efficiently.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Mongoose", "JavaScript"],
    githubUrl: "https://github.com/Chaitanya-Rasal/EARS",
    demoUrl: null
  },
  {
    id: 2,
    title: "Policy-Mind – Legal Document Q&A System",
    description: "An NLP-driven application that processes lengthy legal or policy documents. Features automated extractive summarization and a Q&A engine for retrieving specific insights from complex texts using TF-IDF.",
    image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Python", "Flask", "NLP", "TF-IDF", "HTML/CSS"],
    githubUrl: "https://github.com/Chaitanya-Rasal/Policy-Mind",
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
