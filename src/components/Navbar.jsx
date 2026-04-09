import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [theme, setTheme] = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Magnetic strength={0.2}>
          <a 
            href="#home" 
            className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 p-2 block"
          >
            {personalInfo.name.split(' ')[0]}<span className="text-light-text dark:text-dark-text">.dev</span>
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2 relative">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                className="relative"
              >
                <Magnetic strength={0.3}>
                  <a 
                    href={link.href} 
                    className="px-4 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative z-10 block"
                  >
                    {link.name}
                  </a>
                </Magnetic>
              </motion.li>
            ))}
            
            {/* Sliding hover indicator (optional, but let's stick to a simpler hover for now or just add a focus underline) */}
          </ul>
          
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="ml-4 p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-white/5"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5" />}
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5 text-yellow-400" /> : <FiMoon className="w-5 h-5 text-gray-700" />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-900 dark:text-gray-100"
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] p-6 md:hidden z-40"
          >
            <motion.div 
              className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <ul className="flex flex-col p-4">
                {navLinks.map((link, idx) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-4 text-xl font-bold text-gray-800 dark:text-gray-100 hover:bg-primary-500/10 hover:text-primary-600 rounded-2xl transition-all"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
