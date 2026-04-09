import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import Magnetic from '../components/Magnetic';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const titleVariants = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Parallax Blobs */}
        <motion.div 
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/10 blur-[120px] animate-blob" 
        />
        <motion.div 
          style={{ x: blob2X, y: blob2Y }}
          className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-blob animation-delay-2000" 
        />
        <motion.div 
          style={{ x: blob3X, y: blob3Y }}
          className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-blob animation-delay-4000" 
        />

        {/* Floating Geometric Shapes */}
        <FloatingShape className="top-[15%] left-[10%]" size="w-20 h-20" color="bg-primary-500/20" shape="rounded-3xl" />
        <FloatingShape className="top-[60%] right-[15%]" size="w-16 h-16" color="bg-blue-500/20" shape="rounded-full" />
        <FloatingShape className="bottom-[20%] left-[20%]" size="w-24 h-24" color="bg-purple-500/20" shape="rounded-xl" />
      </div>

      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-5 py-2.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-primary-600 dark:text-primary-400 text-sm font-bold tracking-widest uppercase backdrop-blur-md shadow-xl">
              Available for New Projects
            </span>
          </motion.div>

          {/* Masked Headline for Cinematic Effect */}
          <div className="overflow-hidden">
            <motion.h1 
              variants={titleVariants}
              className="text-6xl md:text-8xl font-black tracking-tighter text-light-text dark:text-dark-text leading-[0.9]"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500">{personalInfo.name}</span>
            </motion.h1>
          </div>

          <motion.h2 
            variants={itemVariants} 
            className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2 hover:text-primary-500 transition-colors cursor-default">
              <FaMapMarkerAlt className="text-primary-500" />
              {personalInfo.location}
            </span>
            <Magnetic>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2">
                <FaPhone className="text-primary-500" />
                {personalInfo.phone}
              </a>
            </Magnetic>
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed font-medium"
          >
            {personalInfo.shortIntro}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mt-6 justify-center">
            <Magnetic strength={0.2}>
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 group relative overflow-hidden py-4 px-8 text-lg"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <FaDownload className="group-hover:-translate-y-1 transition-transform relative z-10" />
                <span className="relative z-10 font-bold">Download Resume</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="#projects" className="btn-secondary group py-4 px-8 text-lg font-bold">
                View My Work
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="inline-block ml-2 text-primary-500"
                >
                  →
                </motion.span>
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Links with Magnetic Effect */}
          <motion.div variants={itemVariants} className="flex gap-10 mt-12">
            <SocialIcon href={personalInfo.github} icon={<FaGithub />} />
            <SocialIcon href={personalInfo.linkedin} icon={<FaLinkedin />} />
            <SocialIcon href={`mailto:${personalInfo.email}`} icon={<FaEnvelope />} />
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

function SocialIcon({ href, icon }) {
  return (
    <Magnetic strength={0.5}>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 text-3xl p-4 block"
      >
        {icon}
      </a>
    </Magnetic>
  );
}

function FloatingShape({ className, size, color, shape }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${className} ${size} ${color} ${shape} blur-2xl opacity-20`}
    />
  );
}
