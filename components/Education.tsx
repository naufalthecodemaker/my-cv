'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="mb-8 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">Computer Engineering</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Universitas Indonesia</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">2023 - Present</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Studying computer engineering with a focus on software development, 
                    algorithms, data structures, and system design. Active in programming competitions 
                    and software development projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}