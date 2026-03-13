import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className="section-container relative z-10 bg-gray-50/50 dark:bg-dark-bg/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            My Arsenal
            <span className="absolute -bottom-2 right-0 w-2/3 h-1 bg-primary-500 rounded-full"></span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            A comprehensive overview of the technologies and tools I utilize to craft modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
             <motion.div 
               key={category} 
               variants={itemVariants} 
               className="glass-card p-6 rounded-2xl group border-t-4 border-t-transparent hover:border-t-primary-500 transition-all duration-300"
             >
               <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-2">
                 {category}
               </h3>
               
               <div className="flex flex-wrap gap-4">
                 {items.map((skill) => (
                   <div 
                     key={skill.name} 
                     className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
                   >
                     {skill.icon && <span className="text-xl">{skill.icon}</span>}
                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                       {skill.name}
                     </span>
                   </div>
                 ))}
               </div>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
