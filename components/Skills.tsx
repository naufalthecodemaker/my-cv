'use client';

import React, { useState, useEffect } from 'react';
import { skills } from '@/data/skills';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript,    
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiCplusplus, 
  SiC,            
  SiPostgresql, 
  SiMongodb,       
  SiGit, 
  SiVercel,        
  SiClerk,         
  SiFigma,
  SiNeo4J,
  SiSupabase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Box } from "lucide-react"; 

const getIcon = (name: string) => {
  const n = name.toLowerCase();

  if (n.includes('react')) return <SiReact className="w-8 h-8 text-[#61DAFB]" />;
  if (n.includes('next')) return <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('typescript')) return <SiTypescript className="w-8 h-8 text-[#3178C6]" />;
  if (n.includes('javascript')) return <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />;
  if (n.includes('tailwind')) return <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />;

  if (n.includes('node')) return <SiNodedotjs className="w-8 h-8 text-[#339933]" />;
  if (n.includes('python')) return <SiPython className="w-8 h-8 text-[#3776AB]" />;
  if (n.includes('java')) return <FaJava className="w-8 h-8 text-[#007396]" />;
  if (n.includes('c++')) return <SiCplusplus className="w-8 h-8 text-[#00599C]" />;
  if (n === 'c') return <SiC className="w-8 h-8 text-[#A8B9CC]" />; 
  
  if (n.includes('neon')) return <SiPostgresql className="w-8 h-8 text-[#00E599]" />; 
  if (n.includes('postgres')) return <SiPostgresql className="w-8 h-8 text-[#4169E1]" />;
  if (n.includes('mongo')) return <SiMongodb className="w-8 h-8 text-[#47A248]" />;
  if (n.includes('supabase')) return <SiSupabase className="w-8 h-8 text-[#3ECF8E]" />;
  if (n.includes('neo4j')) return <SiNeo4J className="w-8 h-8 text-[#008CC1]" />;

  if (n.includes('git')) return <SiGit className="w-8 h-8 text-[#F05032]" />;
  if (n.includes('vercel')) return <SiVercel className="w-8 h-8 text-black dark:text-white" />;
  if (n.includes('clerk')) return <SiClerk className="w-8 h-8 text-[#6C47FF]" />;
  if (n.includes('figma')) return <SiFigma className="w-8 h-8 text-[#F24E1E]" />;

  return <Box className="w-8 h-8 text-slate-400" />;
};


const getLevelLabel = (percentage: number) => {
  if (percentage >= 85) return "Expert";
  if (percentage >= 70) return "Advanced";
  if (percentage >= 50) return "Intermediate";
  return "Beginner";
};
interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  icon: React.ReactNode;
}

function CircularProgress({ percentage, size = 100, strokeWidth = 8, icon }: CircularProgressProps) { // Size diperbesar sedikit
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
          className="text-slate-100 dark:text-slate-800"
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
      
      <div className="absolute flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Tools']; 

  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section id="skills" className="py-24 px-6 bg-white/40 dark:bg-slate-900/20 backdrop-blur-md border-y border-slate-200/50 dark:border-slate-700/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            My technical proficiency and tools I use regularly.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx} 
              className="
                group relative flex flex-col items-center gap-4 p-6 rounded-2xl 
                bg-slate-50 dark:bg-slate-800/80 
                border border-slate-200 dark:border-slate-700/50 
                transition-all duration-500 ease-out
                hover:scale-110 hover:-translate-y-2
                hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]
                dark:hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.4)]
                hover:border-blue-400 dark:hover:border-cyan-400
                hover:z-10
              "
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/10 transition-colors duration-500" />

              <CircularProgress 
                percentage={skill.percentage} 
                icon={getIcon(skill.name)} 
              />
              
              <div className="text-center relative z-10">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {getLevelLabel(skill.percentage)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}