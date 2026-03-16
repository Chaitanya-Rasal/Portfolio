import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2,
        duration: 0.5
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 12 
      } 
    }
  };

  const skillBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="skills" className="section-container relative z-10 bg-gray-50/50 dark:bg-dark-bg/50 py-24">
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
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "70%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 right-0 h-1.5 bg-gradient-to-l from-primary-500 to-blue-500 rounded-full"
            />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            A comprehensive overview of the technologies and tools I utilize to craft modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
             <motion.div 
               key={category} 
               variants={itemVariants} 
               whileHover={{ y: -10 }}
               className="glass-card p-8 rounded-3xl group border-b-4 border-b-transparent hover:border-b-primary-500 transition-all duration-500 relative overflow-hidden h-full shadow-lg hover:shadow-2xl"
             >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-6xl font-black text-primary-500 select-none">{idx + 1}</span>
               </div>

               <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100 border-b border-gray-100 dark:border-white/5 pb-4">
                 {category}
               </h3>
               
               <motion.div 
                 className="flex flex-wrap gap-4"
                 variants={{
                   visible: { transition: { staggerChildren: 0.05 } }
                 }}
               >
                 {items.map((skill) => (
                   <motion.div 
                     key={skill.name} 
                     variants={skillBadgeVariants}
                     whileHover={{ scale: 1.1, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                     className="flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-white/5 rounded-xl shadow-sm border border-gray-100 dark:border-white/10 hover:border-primary-500/50 hover:shadow-md transition-all duration-300 cursor-default group/skill"
                   >
                     {skill.icon && <span className="text-2xl group-hover/skill:scale-110 transition-transform">{skill.icon}</span>}
                     <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                       {skill.name}
                     </span>
                   </motion.div>
                 ))}
               </motion.div>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
