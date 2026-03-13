import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } }
  };

  return (
    <section id="projects" className="section-container relative">
       {/* Background Decoration */}
      <div className="absolute top-[30%] left-[-5%] w-[20%] h-[20%] rounded-[50%] bg-blue-400/10 blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[20%] h-[20%] rounded-[50%] bg-purple-400/10 blur-[100px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 right-1/4 w-1/2 h-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            A selection of my recent work. These projects demonstrate my expertise in full-stack development, UI/UX design, and solving complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-white text-white hover:text-gray-900 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-primary-500 text-white transition-colors">
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-semibold rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
