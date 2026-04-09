import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-container relative py-24 overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-primary-500/5 blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            Get In Touch
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-2 -left-0 h-1.5 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"
            />
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Have a question or want to work together? Feel free to reach out. I'm currently open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Cards */}
          <motion.div variants={containerVariants} className="flex flex-col gap-6">
            <ContactCard 
              href={`mailto:${personalInfo.email}`}
              icon={<FaEnvelope />}
              label="Email"
              value={personalInfo.email}
              color="primary"
            />
            <ContactCard 
              href={personalInfo.linkedin}
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="Connect with me"
              color="blue"
            />
            <ContactCard 
              href={personalInfo.github}
              icon={<FaGithub />}
              label="GitHub"
              value="Check my repositories"
              color="gray"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card p-12 rounded-3xl flex flex-col items-center justify-center text-center h-full border border-green-500/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <FaCheckCircle className="text-7xl text-green-500 mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-primary-500 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card p-8 md:p-10 rounded-3xl flex flex-col gap-8 shadow-2xl border border-white/10"
                >
                  <div className="space-y-6">
                    <FormField 
                      label="Name" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe" 
                    />
                    <FormField 
                      label="Email" 
                      id="email" 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                    />
                    <FormField 
                      label="Message" 
                      id="message" 
                      name="message" 
                      isTextArea 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="How can I help you?" 
                    />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={isSubmitting}
                    className={`btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg font-bold shadow-lg shadow-primary-500/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <FaPaperPlane className="text-xl" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactCard({ href, icon, label, value, color }) {
  const colorMap = {
    primary: 'bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white',
    blue: 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white',
    gray: 'bg-gray-500/10 text-gray-500 group-hover:bg-gray-800 group-hover:text-white',
  };

  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      whileHover={{ x: 10 }}
      className="glass-card p-6 rounded-2xl flex items-center gap-6 group transition-all duration-300 border border-white/10 hover:border-primary-500/30"
    >
      <div className={`p-5 rounded-2xl transition-all duration-300 ${colorMap[color]}`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{label}</p>
        <p className="text-xl font-bold text-gray-800 dark:text-gray-100">{value}</p>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
         <span className="text-2xl text-primary-500">→</span>
      </div>
    </motion.a>
  );
}

function FormField({ label, id, name, value, onChange, placeholder, type = "text", isTextArea = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</label>
      {isTextArea ? (
        <textarea 
          id={id} 
          name={name} 
          value={value}
          onChange={onChange}
          required
          rows={5}
          className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-100 transition-all shadow-inner"
          placeholder={placeholder}
        />
      ) : (
        <input 
          type={type} 
          id={id} 
          name={name} 
          value={value}
          onChange={onChange}
          required
          className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-100 transition-all shadow-inner"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
