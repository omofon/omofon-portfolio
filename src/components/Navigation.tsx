import { Moon, Sun, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg font-semibold">Omofon</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm transition-colors ${
                activeSection === 'home'
                  ? 'text-foreground'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm transition-colors ${
                activeSection === 'services'
                  ? 'text-foreground'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm transition-colors ${
                activeSection === 'projects'
                  ? 'text-foreground'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-sm transition-colors ${
                activeSection === 'skills'
                  ? 'text-foreground'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm transition-colors ${
                activeSection === 'experience'
                  ? 'text-foreground'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm transition-colors ${
                activeSection === 'contact'
                  ? 'text-foreground'
                  : 'text-gray-600 dark:text-gray-400 hover:text-foreground'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Theme Toggle & GitHub */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}