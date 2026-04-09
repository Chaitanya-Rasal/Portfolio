import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import GlowCard from '../components/GlowCard';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1,
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 70, 
        damping: 15 
      } 
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <section id="projects" className="section-container relative py-24">
       {/* Background Decoration */}
      <div className="absolute top-[30%] left-[-5%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[120px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            Featured Projects
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 rounded-full"
            />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            A selection of my recent work. These projects demonstrate my expertise in full-stack development, UI/UX design, and solving complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="h-full"
            >
              <GlowCard className="h-full !p-0 overflow-hidden flex flex-col group transition-all duration-500">
                {/* Image Container with Overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Glossy Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 backdrop-blur-[2px] z-20">
                    {project.githubUrl && (
                      <motion.a 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-4 bg-white/15 hover:bg-white rounded-full text-white hover:text-gray-900 transition-all duration-300 border border-white/20"
                      >
                        <FaGithub className="text-2xl" />
                      </motion.a>
                    )}
                    {project.demoUrl && (
                      <motion.a 
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-4 bg-primary-500/20 hover:bg-primary-500 rounded-full text-white transition-all duration-300 border border-primary-500/30"
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <motion.div 
                    className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100 dark:border-white/5"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } }
                    }}
                  >
                    {project.techStack.map((tech) => (
                      <motion.span 
                        key={tech} 
                        variants={techBadgeVariants}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-primary-500/5 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
