'use client';

import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, Github, X, Sparkles, Star, ChevronRight, Calendar, Users } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  duration: string;
  team: string;
  status: string;
  github?: string;
  demo?: string;
}

// Project Detail Modal Component
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

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

  const projects: Project[] = [
    {
      title: "Modern Portfolio Website",
      description: "A responsive CV and portfolio website built with Next.js, React, Tailwind CSS, and Shadcn UI. Features dark mode, smooth animations, and modern design.",
      fullDescription: "A fully responsive portfolio website showcasing modern web development practices. Built with Next.js 14 for optimal performance, featuring server-side rendering, image optimization, and seamless navigation. The design system uses Tailwind CSS for utility-first styling and Shadcn UI for accessible components.",
      tech: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
      features: [
        "Fully responsive design across all devices",
        "Dark mode with smooth transitions",
        "Optimized performance with Next.js 14",
        "SEO-friendly with meta tags and sitemap",
        "Accessible UI components from Shadcn",
        "Smooth scroll animations and transitions"
      ],
      duration: "2 weeks",
      team: "Solo",
      status: "Completed",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application for visualizing sorting and pathfinding algorithms. Built to help students understand algorithm concepts better.",
      fullDescription: "An educational web application that brings computer science algorithms to life through interactive visualizations. Users can step through sorting algorithms like Quick Sort, Merge Sort, and Bubble Sort, as well as pathfinding algorithms like A* and Dijkstra's. Built with React and Canvas API for smooth animations.",
      tech: ["React", "TypeScript", "Canvas API", "Tailwind"],
      features: [
        "Visualize 8+ sorting algorithms",
        "Interactive step-by-step execution",
        "Adjustable animation speed",
        "Code explanation for each algorithm",
        "Pathfinding visualization with obstacles",
        "Performance comparison metrics"
      ],
      duration: "1 month",
      team: "Solo",
      status: "Completed",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Full-stack task management application with user authentication, real-time updates, and team collaboration features.",
      fullDescription: "A comprehensive task management solution for teams. Features include real-time collaboration, project boards with drag-and-drop, task assignments, deadlines, and progress tracking. Built with Next.js for the frontend, PostgreSQL for data persistence, and NextAuth for secure authentication.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
      features: [
        "User authentication with multiple providers",
        "Real-time task updates with WebSockets",
        "Drag-and-drop Kanban boards",
        "Team collaboration and assignments",
        "File attachments and comments",
        "Email notifications for deadlines"
      ],
      duration: "2 months",
      team: "3 people",
      status: "In Progress",
      github: "https://github.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce platform with shopping cart, payment integration, and admin dashboard for managing products and orders.",
      fullDescription: "A full-featured e-commerce platform with customer-facing store and admin dashboard. Integrated with Stripe for payments, features product search, filtering, reviews, and order tracking. Admin panel allows inventory management, order processing, and sales analytics.",
      tech: ["Next.js", "MongoDB", "Stripe", "Redis"],
      features: [
        "Product catalog with search and filters",
        "Shopping cart with persistent storage",
        "Secure payment with Stripe integration",
        "Order tracking and history",
        "Admin dashboard for management",
        "Real-time inventory updates"
      ],
      duration: "3 months",
      team: "2 people",
      status: "Completed",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-800">
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
              <div key={idx} className="group p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg">
                    <Code className="w-5 h-5" />
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
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
                    <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400">
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