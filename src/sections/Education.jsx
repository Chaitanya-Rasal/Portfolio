import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="education" className="section-container relative bg-gray-50/50 dark:bg-dark-bg/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            Education
            <span className="absolute -bottom-2 right-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            A look back at my academic journey and the foundational knowledge that shaped my career.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary-200 dark:border-primary-900/50 ml-6 md:mx-auto md:w-full max-w-2xl pl-6 md:pl-0 md:border-none">
          {education.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className={`mb-12 relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 -left-[33px] md:-left-auto md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-dark-bg shadow`}></div>

              {/* Timeline Line for Desktop (centered) */}
              <div className="hidden md:block absolute top-0 bottom-[-3rem] left-1/2 w-0.5 bg-primary-200 dark:bg-primary-900/50 -ml-px"></div>

              <div className={`glass-card p-6 md:p-8 rounded-2xl md:w-[45%] group hover:-translate-y-1 transition-transform relative z-10 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-primary-600 dark:text-primary-400 font-bold mb-2 block tracking-wider text-sm">
                  {item.period}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {item.degree}
                </h3>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                  {item.institution}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
