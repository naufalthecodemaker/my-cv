'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = ['About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'];

  const iconBaseClass = "w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out transform";

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-200 dark:border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2 z-50"> 
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            NR
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Naufal's CV
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 relative h-9 w-9 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 overflow-hidden"
            aria-label="Toggle menu"
          >
            <Menu className={`${iconBaseClass} ${
              isMobileMenuOpen 
                ? 'rotate-90 opacity-0 scale-75'  
                : 'rotate-0 opacity-100 scale-100' 
            }`} />

            <X className={`${iconBaseClass} ${
              isMobileMenuOpen 
                ? 'rotate-0 opacity-100 scale-100' 
                : '-rotate-90 opacity-0 scale-75'   
            }`} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <nav className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}