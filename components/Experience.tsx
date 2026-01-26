'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Software Engineering Student",
      company: "Universitas Indonesia",
      period: "2023 – Present",
      description: "Studying computer engineering with a focus on software development, algorithms, and system design. Working on various projects involving web development, competitive programming, and software engineering best practices."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">{exp.role}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{exp.period}</p>
                  <p className="text-slate-600 dark:text-slate-400">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}