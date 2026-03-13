import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.8 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="about" className="section-container relative">
      <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] rounded-[50%] bg-primary-300/10 blur-[80px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 relative group perspective-1000"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative glass-card shadow-2xl transition-transform duration-500 group-hover:rotate-y-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent z-10" />
              <img
                src="/img.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Fresher | Full Stack Java Developer
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-card/50 border border-gray-100 dark:border-gray-800 text-center">
                <h4 className="font-bold text-3xl text-primary-500 mb-1">2</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Projects Built</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-card/50 border border-gray-100 dark:border-gray-800 text-center">
                <h4 className="font-bold text-3xl text-primary-500 mb-1">5+</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Technologies</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-card/50 border border-gray-100 dark:border-gray-800 text-center">
                <h4 className="font-bold text-3xl text-primary-500 mb-1">MCA</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Pursuing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
