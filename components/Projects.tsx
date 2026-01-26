'use client';

import { useState, useEffect } from 'react';
import { Code, ExternalLink, Github, X, Sparkles, Star, ChevronRight, Calendar, Users } from 'lucide-react';
import { projects, ProjectModalProps, Project } from '@/data/projects';

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl transform transition-all duration-300 scale-100" 
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'modal-slide-up 0.3s ease-out' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl">
              <Code className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Project Overview
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-600" />
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <p className="text-sm text-slate-500 dark:text-slate-400">Duration</p>
              <p className="font-semibold">{project.duration}</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-purple-600" />
              <p className="text-sm text-slate-500 dark:text-slate-400">Team Size</p>
              <p className="font-semibold">{project.team}</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
              <Code className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-sm text-slate-500 dark:text-slate-400">Status</p>
              <p className="font-semibold">{project.status}</p>
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex gap-3 pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Projects Component
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <>
      <section id="projects" className="py-24 px-6 bg-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Some of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
              key={idx} 
              className="
                group p-6 rounded-xl 
                bg-white dark:bg-slate-900 
                border border-slate-200 dark:border-slate-700 
              "
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg">
                  <Code className="w-5 h-5" />
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </button>
              </div>
              
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}