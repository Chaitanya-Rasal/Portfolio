import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3, 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section id="about" className="section-container relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-primary-500/5 blur-[80px] -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] left-[5%] w-48 h-48 rounded-full bg-blue-500/5 blur-[60px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            About Me
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
            />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Get to know me better - my journey, my skills, and what drives me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Image Column with 3D Tilt */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm aspect-square group cursor-none"
            >
              <div 
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 rounded-3xl overflow-hidden glass-card shadow-2xl border border-white/20 dark:border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/40 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60" />
                <img
                  src="/img.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700 ease-out"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                style={{ transform: "translateZ(100px)" }}
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white dark:bg-dark-card shadow-xl border border-gray-100 dark:border-white/5 z-20"
              >
                <p className="text-primary-500 font-bold text-center">Available<br/><span className="text-gray-400 text-xs font-medium">to hire</span></p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400">
                Fresher | Full Stack Java Developer
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard number="2" label="Projects Built" />
              <StatCard number="5+" label="Technologies" />
              <StatCard number="MCA" label="Pursuing" />
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
                Let's Talk
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-center transition-colors hover:border-primary-500/30 group"
    >
      <h4 className="font-extrabold text-4xl text-primary-500 mb-2 group-hover:scale-110 transition-transform duration-300">{number}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}
