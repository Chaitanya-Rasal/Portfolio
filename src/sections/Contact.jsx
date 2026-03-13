import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
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
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container relative">
      <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-[50%] bg-primary-500/10 blur-[100px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text dark:text-dark-text relative inline-block">
            Get In Touch
            <span className="absolute -bottom-2 -left-4 w-full h-1 bg-primary-500 rounded-full"></span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Have a question or want to work together? Feel free to reach out. I'm currently open to new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8 justify-center">
             <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                  Contact Information
                </h3>
                
                <div className="flex flex-col gap-6">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group">
                    <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-xl group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                      <FaEnvelope className="text-xl text-primary-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">Email</p>
                      <p className="text-sm">{personalInfo.email}</p>
                    </div>
                  </a>

                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <FaLinkedin className="text-xl text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">LinkedIn</p>
                      <p className="text-sm">Connect with me</p>
                    </div>
                  </a>

                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group">
                    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                      <FaGithub className="text-xl text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">GitHub</p>
                      <p className="text-sm">Check my repositories</p>
                    </div>
                  </a>
                </div>
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              
              {submitMessage && (
                <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-center font-medium">
                  {submitMessage}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-bg/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-100 transition-shadow"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-bg/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-100 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-dark-bg/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-100 transition-shadow resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center gap-2 py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
