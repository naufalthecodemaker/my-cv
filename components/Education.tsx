'use client';

import { GraduationCap, School } from 'lucide-react'; 

export default function Education() {
  const educationData = [
    {
      id: 1,
      school: "Universitas Indonesia",
      degree: "Bachelor of Computer Engineering",
      year: "2024 - Present",
      description: "Studying Software Engineering and System Architecture. Deepening knowledge in Data Structures, Algorithms, and Object-Oriented Programming (OOP). Actively sharpening problem-solving skills through programming exercise and hands-on full-stack development projects while maintaining a strong academic focus.",
      icon: <GraduationCap className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />,
    },
    {
      id: 2,
      school: "SMA Negeri 37 Jakarta", 
      degree: "Mathematics & Science (MIPA)",
      year: "2021 - 2024",
      description: "Majored in Natural Sciences (IPA). Focused on building a strong foundation in mathematics, logic, and analytical thinking skills necessary for engineering studies.", 
      icon: <School className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />,
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-transparent">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
            
            {educationData.map((edu) => (
              <div key={edu.id} className="relative group">
                <div 
                  className="
                    absolute -left-[41px] top-0 w-4 h-4 rounded-full 
                    bg-white dark:bg-slate-900 border-4 border-blue-500 
                    transition-all duration-300 ease-out
                    group-hover:scale-150 group-hover:bg-blue-600 group-hover:border-blue-300
                    group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]
                  "
                ></div>
        
                <div 
                  className="
                    p-6 rounded-xl bg-white dark:bg-slate-900 
                    border border-slate-200 dark:border-slate-800 
                    transition-all duration-500 ease-out
                    group-hover:-translate-y-2
                    group-hover:border-blue-400/50 dark:group-hover:border-blue-500/50
                    group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] 
                    dark:group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]
                  "
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="
                        p-3 rounded-lg shrink-0 
                        bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400
                        transition-all duration-500
                        group-hover:bg-blue-600 group-hover:text-white
                        group-hover:scale-110 group-hover:shadow-lg
                      "
                    >
                      {edu.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                          {edu.year}
                        </span>
                      </div>
                      
                      <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">
                        {edu.school}
                      </p>
                      
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}