'use client';

import { Briefcase } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/40 dark:bg-slate-900/20 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-700/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="
                group relative p-6 rounded-xl 
                bg-slate-50 dark:bg-slate-800 
                border border-slate-200 dark:border-slate-700 
                
                /* Base Transition */
                transition-all duration-300 ease-out
                
                /* HOVER EFFECT: Lift Up & Scale */
                hover:-translate-y-2 hover:scale-[1.02]
                
                /* HOVER EFFECT: Shadow & Border Color */
                hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.3)]
                dark:hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.2)]
                hover:border-purple-500/50 dark:hover:border-purple-400/50
              "
            >
              {/* Gradient Border Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-start gap-4 relative z-10">
                
                {/* Icon Box */}
                <div 
                  className="
                    p-3 rounded-lg shrink-0
                    bg-purple-100 dark:bg-purple-900/30 
                    text-purple-600 dark:text-purple-400
                    transition-all duration-300
                    
                    /* Icon Animation on Hover */
                    group-hover:bg-purple-600 group-hover:text-white
                    group-hover:shadow-lg group-hover:shadow-purple-500/30
                    group-hover:-rotate-6
                  "
                >
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-700/50 px-3 py-1 rounded-full group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}