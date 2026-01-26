export interface Project {
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

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const projects: Project[] = [
    {
      title: "iBuiltThis App",
      description: "A community platform for developers to showcase projects with a dynamic voting and trending system.",
      fullDescription: "Designed and built a full-stack platform allowing users to share and discover creative web projects via URLs. The system implements a real-time voting mechanism where projects exceeding a specific threshold (100+ votes) are automatically promoted to the 'Trending' section to maximize visibility. Focused on community engagement and seamless content discovery.",
      tech: ["Next.js", "Tailwind CSS", "React", "Clerk", "NeonDB", "Shadcn UI"], 
      features: [
        "Project submission via URL preview",
        "Real-time upvoting system",
        "Automated 'Trending' algorithm (100+ votes)",
        "User dashboard for managing submissions",
        "Responsive grid layout for project showcase",
        "Search and filter functionality"
      ],
      duration: "4 days", 
      team: "Solo",
      status: "Completed",
      github: "https://github.com/naufalthecodemaker/iBuiltThis-app",
      demo: "https://i-built-this-app.vercel.app/" 
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive personal portfolio built with Next.js and Tailwind CSS to showcase my work and skills.",
      fullDescription: "Designed and developed this personal portfolio website to establish a professional online presence. The application utilizes Next.js App Router for optimal performance and SEO. It features a fully responsive layout with dark mode support, custom animations, and a modular component architecture. The project demonstrates proficiency in modern frontend development practices, including TypeScript for type safety and Tailwind CSS for rapid, utility-first styling.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
      features: [
        "Fully responsive modern design",
        "Dark mode & Light mode support",
        "Interactive project modals",
        "Server-side rendering with Next.js",
        "Type-safe development with TypeScript",
        "Optimized performance and accessibility"
      ],
      duration: "1 day",
      team: "Solo",
      status: "Completed",
      github: "https://github.com/naufalthecodemaker/my-cv", 
      demo: "https://naufal-cv.vercel.app/" 
    },
    
  ];