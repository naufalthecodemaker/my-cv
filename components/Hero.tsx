'use client';

import { Download, Github, Linkedin, Mail, Sparkles, ChevronRight } from 'lucide-react';
import { profile } from "@/data/profile";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                {profile.role}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {profile.headline}
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={profile.social.github}
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={profile.social.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Tombol Email */}
              <a
                href={profile.social.email}
                // Tidak perlu target="_blank" untuk email, karena biasanya dia membuka popup aplikasi mail
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="w-full aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-6 animate-float"></div>
            <div className="absolute inset-0 w-full aspect-square bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-9xl font-bold text-slate-100 dark:text-slate-700">LW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}