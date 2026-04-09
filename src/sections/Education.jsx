import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { education } from '../data/portfolioData';

export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scrollLine = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.4, delayChildren: 0.1 } 
    }
  };

  return (
    <section id="education" className="section-container relative bg-gray-50/50 dark:bg-dark-bg/50 py-24 overflow-hidden">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block"
          >
            Education
            <motion.span 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="absolute -bottom-2 right-0 h-1.5 bg-primary-500 rounded-full"
            />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg"
          >
            A look back at my academic journey and the foundational knowledge that shaped my career.
          </motion.p>
        </div>

        <div className="relative mt-24">
          {/* Animated Timeline Line (Desktop Centered) */}
          <div className="absolute left-6 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/5" />
          <motion.div 
            style={{ scaleY: scrollLine }}
            className="absolute left-6 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500 origin-top z-10"
          />

          {education.map((item, index) => (
            <TimelineItem 
               key={item.id} 
               item={item} 
               index={index} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
      className={`mb-20 relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Dot with Glow */}
      <div className="absolute left-6 md:left-1/2 md:-ml-2.5 top-2 w-5 h-5 z-20">
         <motion.div 
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 10 }}
           className="w-full h-full rounded-full bg-white dark:bg-dark-bg border-4 border-primary-500 relative"
         >
           <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
         </motion.div>
      </div>

      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative border border-white/10"
        >
          <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-bold rounded-lg text-sm mb-4 tracking-wider uppercase">
            {item.period}
          </span>
          <h3 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">
            {item.degree}
          </h3>
          <h4 className="text-lg font-bold text-primary-500/80 dark:text-primary-400/80 mb-4 pb-4 border-b border-gray-100 dark:border-white/5">
            {item.institution}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            {item.description}
          </p>
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
             <span className="text-5xl font-black">{index + 1}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
