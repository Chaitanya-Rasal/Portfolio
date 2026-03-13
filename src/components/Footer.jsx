import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-bg py-8 md:py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
            {personalInfo.name.split(' ')[0]}<span className="text-gray-800 dark:text-gray-200">.dev</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Building digital experiences with code and creativity.
          </p>
        </div>

        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="GitHub">
            <FaGithub className="text-xl" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="text-xl" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors" aria-label="Email">
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          <p>&copy; {currentYear} {personalInfo.name}.</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
