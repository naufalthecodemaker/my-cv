'use client';

import React, { useState, useEffect } from 'react';

// Circular Progress Component
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

function CircularProgress({ percentage, size = 80, strokeWidth = 6 }: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-slate-200 dark:text-slate-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-sm font-bold text-slate-700 dark:text-slate-300">{progress}%</span>
    </div>
  );
}

// Skills Component
export default function Skills() {
  const skills = [
    { name: 'React', percentage: 90, category: 'Frontend' },
    { name: 'Next.js', percentage: 85, category: 'Frontend' },
    { name: 'TypeScript', percentage: 80, category: 'Frontend' },
    { name: 'Tailwind CSS', percentage: 95, category: 'Frontend' },
    { name: 'Node.js', percentage: 75, category: 'Backend' },
    { name: 'Python', percentage: 85, category: 'Backend' },
    { name: 'C++', percentage: 80, category: 'Backend' },
    { name: 'PostgreSQL', percentage: 70, category: 'Backend' },
    { name: 'Git', percentage: 90, category: 'Tools' },
    { name: 'Docker', percentage: 65, category: 'Tools' },
    { name: 'Linux', percentage: 75, category: 'Tools' },
    { name: 'AWS', percentage: 60, category: 'Tools' },
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Technologies and tools I work with to bring ideas to life
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CircularProgress percentage={skill.percentage} />
              <div className="text-center">
                <p className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}