'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <style jsx global>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(6deg); }
            50% { transform: translateY(-20px) rotate(6deg); }
          }
          @keyframes modal-slide-up {
            from { 
              opacity: 0; 
              transform: translateY(50px) scale(0.95); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        
        <Navbar />
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}