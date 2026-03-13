import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/20 blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen" />

      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-500">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-primary-500" />
              {personalInfo.location}
            </span>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <FaPhone className="text-primary-500" />
              {personalInfo.phone}
            </a>
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            {personalInfo.shortIntro}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4 justify-center">
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 group"
            >
              <FaDownload className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            <a href="#projects" className="btn-secondary">
              View Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 mt-8">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-text dark:hover:text-dark-text transition-colors text-2xl hover:scale-110 transform duration-200">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl hover:scale-110 transform duration-200">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors text-2xl hover:scale-110 transform duration-200">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-400"
      >
        <span className="text-sm font-medium mb-2">Scroll</span>
        <div className="w-[1px] h-8 bg-gray-400" />
      </motion.div>
    </section>
  );
}
