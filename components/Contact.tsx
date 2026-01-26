'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; 
import { profile } from '@/data/profile';

export default function Contact() {
  const baseButtonClass = "px-6 py-3 sm:px-8 sm:py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800";

  return (
    <section id="contact" className="pt-24 bg-white/40 dark:bg-slate-900/20 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-700/30">
      <div className="mx-auto max-w-5xl px-6 pb-24 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseButtonClass} 
              hover:text-black hover:border-black/30 
              dark:hover:text-white dark:hover:border-white/50`} 
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseButtonClass} 
              hover:text-[#0077b5] hover:border-[#0077b5]/30 
              dark:hover:text-[#38bdf8] dark:hover:border-[#38bdf8]/50`} 
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profile.social.email}`}
            className={`${baseButtonClass} 
              hover:text-purple-600 hover:border-purple-600/30 
              dark:hover:text-purple-400 dark:hover:border-purple-400/50`} 
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>

          {profile.social.whatsapp && (
            <a
              href={`https://wa.me/${profile.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseButtonClass} 
                hover:text-[#25D366] hover:border-[#25D366]/30 
                dark:hover:text-[#4ade80] dark:hover:border-[#4ade80]/50`} 
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          )}

          {profile.social.instagram && (
            <a
              href={`https://instagram.com/${profile.social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseButtonClass} 
                hover:text-[#E1306C] hover:border-[#E1306C]/30 
                dark:hover:text-[#f472b6] dark:hover:border-[#f472b6]/50`} 
            >
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          )}
        </div>
      </div>

      <div className="w-full h-24 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center bg-slate-50 dark:bg-slate-950/50 backdrop-blur-sm">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} | {profile.name}'s CV | Built with Next.js, React & Tailwind CSS
        </p>
      </div>

    </section>
  );
}