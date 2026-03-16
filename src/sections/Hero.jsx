import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax transforms for background blobs
  const blob1X = useTransform(mouseX, [-500, 500], [-50, 50]);
  const blob1Y = useTransform(mouseY, [-500, 500], [-50, 50]);
  const blob2X = useTransform(mouseX, [-500, 500], [50, -50]);
  const blob2Y = useTransform(mouseY, [-500, 500], [50, -50]);
  const blob3X = useTransform(mouseX, [-500, 500], [-30, 30]);
  const blob3Y = useTransform(mouseY, [-500, 500], [30, -30]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradients with Parallax */}
      <motion.div 
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/20 blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen" 
      />
      <motion.div 
        style={{ x: blob2X, y: blob2Y }}
        className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" 
      />
      <motion.div 
        style={{ x: blob3X, y: blob3Y }}
        className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen" 
      />

      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 animate-gradient-x">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2 hover:text-primary-500 transition-colors">
              <FaMapMarkerAlt className="text-primary-500" />
              {personalInfo.location}
            </span>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <FaPhone className="text-primary-500" />
              {personalInfo.phone}
            </a>
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-medium"
          >
            {personalInfo.shortIntro}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-6 justify-center">
            <a 
              href={personalInfo.resumeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <FaDownload className="group-hover:-translate-y-1 transition-transform relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
            <a href="#projects" className="btn-secondary group">
              View My Work
              <motion.span 
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="inline-block ml-2"
              >
                →
              </motion.span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-8 mt-10">
            <SocialIcon href={personalInfo.github} icon={<FaGithub />} color="hover:text-black dark:hover:text-white" />
            <SocialIcon href={personalInfo.linkedin} icon={<FaLinkedin />} color="hover:text-blue-600" />
            <SocialIcon href={`mailto:${personalInfo.email}`} icon={<FaEnvelope />} color="hover:text-red-500" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-400/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, icon, color }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`text-gray-400 ${color} transition-all duration-300 text-3xl hover:scale-125 transform`}
    >
      {icon}
    </a>
  );
}
