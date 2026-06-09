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
    title: "Ruang Aksara",
    description: "A digital reading PWA and multi-role CMS featured with an integrated Markdown Author Studio, analytical dashboards, and gamified reading streaks.",
    fullDescription: "Developed during an intensive development cycle at Exercise FTUI, Ruang Aksara is a comprehensive digital reading ecosystem and content management system. The platform bridges the gap between authors and readers through an integrated Markdown Studio that converts raw text into seamless HTML layouts. It features extensive administrative control panels, detailed data visualization widgets for user interaction metrics, and gamification mechanics such as experience points (XP) and daily consistency tracking. Performance is highly optimized using strict server-side caching and atomic state rendering.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Lucide React"],
    features: [
      "Robust Multi-Role CMS architecture (custom interfaces for Readers, Authors, and Admins)",
      "Advanced Markdown Author Studio with instantaneous live Markdown-to-HTML compilation",
      "Interactive Analytical Dashboards displaying engagement maps and work performance graphs",
      "Immersive, distraction-free reading mode with highly customizable typography scales and themes",
      "Dynamic community involvement assets including nested comment voting and chapter reactions",
      "Retention-driving gamification engine built with custom persistent streak counters and XP milestones"
    ],
    duration: "22 days",
    team: "Group (Exercise FTUI)",
    status: "Completed",
    github: "https://github.com/Camn0/ruang-aksara",
    demo: "https://ruang-aksara-chi.vercel.app/onboarding"
  },
  {
    title: "FraudLens Engine",
    description: "A proactive financial crime detection network and identity intelligence platform built on top of cloud graph database models.",
    fullDescription: "FraudLens Engine is a next-generation anti-money laundering and syndicated fraud detection infrastructure. Moving away from conventional isolated relational database models, this application structures transaction profiles into an interconnected Property Graph Model via Neo4j AuraDB. This design pivot enables the real-time uncovering of tightly woven structural patterns like device collusion networks, synthetic identities, and circular money laundering loops. The system natively integrates a high-performance 2D/3D force-directed canvas layout to render massive data linkages fluidly inside the UI.",
    tech: ["Next.js", "TypeScript", "Neo4j AuraDB", "Cypher Query", "Tailwind CSS", "React Force Graph"],
    features: [
      "Paradigm-shifting conversion from flat datasets into optimized property graph database schemas",
      "Real-time visual pattern tracking for device collusion paths and synthetic profile footprints",
      "Advanced recursive transaction tracing loops optimized to discover circular money-laundering schemes",
      "Interactive 2D/3D graph canvas visualization built on top of high-performance D3.js engines",
      "Secure backend serverless architecture handling cloud database driver instances and Cypher queries",
      "Fully responsive multi-faceted search filter system tailored for digital financial investigators"
    ],
    duration: "4 days",
    team: "Group (Academic Project)",
    status: "Completed",
    github: "https://github.com/naufalthecodemaker/Kelompok-6_FraudLens-Engine",
    demo: "https://kelompok-6-fraud-lens-engine.vercel.app/"
  },
  {
    title: "KanteKuy",
    description: "An interactive web guide and digitalized menu ecosystem for the local engineering canteen at Universitas Indonesia.",
    fullDescription: "KanteKuy reimagines the typical campus food court journey by transforming physical bottleneck configurations into a fluid web directory application. Serving as the frontend lead, I translated wireframes into scalable TypeScript components and seamlessly mapped incoming backend REST API payloads into responsive grid components. The system features a centralized data administration core allowing canteen vendors to scale menu inventories dynamically while serving campus visitors real-time pricing and availability data.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "REST API Integration"],
    features: [
      "Responsive interactive map and stall directory for campus canteen locations",
      "Dynamic single-point-of-truth admin dashboard for instant merchant item listings",
      "Real-time data fetching pipeline delivering live product inventory and menu details",
      "Seamless layout parity matching high-fidelity wireframe blueprints perfectly",
      "Dual-facing application layer split engineered for both daily consumers and store merchants",
      "Production-ready structure optimized for a future digital checkout queue rollout"
    ],
    duration: "3.5 days",
    team: "Group (Academic Project)",
    status: "Completed",
    github: "https://github.com/Dimar-I-T/kantekuy",
    demo: "https://kantekuy.vercel.app/"
  },
  {
    title: "Tweeter App",
    description: "A high-performance full-stack social media platform with a futuristic Crystal Glass UI and real-time interactions.",
    fullDescription: "Tweeter is a sophisticated social space built with Next.js 15 and Neon PostgreSQL, featuring a galaxy-themed 'Crystal Glass' interface. The project showcases advanced full-stack capabilities, including JWT-based authentication, server actions for dynamic content management, and a custom-built instant loading system. I implemented complex 'Optimistic UI' updates for likes and comments, while optimizing rendering performance for mobile devices through responsive glassmorphism effects and intelligent particle reduction techniques.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Neon DB", "Drizzle ORM", "Lucide React"],
    features: [
      "Dynamic Content Text Posting with Real-time Feed Updates",
      "Engaging Interaction System: (Like & Unlike) and (Follow & Unfollow) functionality",
      "Threaded Commenting System with Instant Delete Action", 
      "Full-stack Authentication (JWT & Server Actions)",
      "Optimized Crystal Glass UI with Responsive Blurring",
      "Real-time Optimistic UI for Likes & Comments",
      "Serverless PostgreSQL Integration with Drizzle ORM",
      "Custom Instant Page Transition & Loading System",
      "Mobile-first Performance Tuning & GPU Optimization"
    ],
    duration: "3.5 days", 
    team: "Solo",
    status: "Completed", 
    github: "https://github.com/naufalthecodemaker/tweeter-app.git", 
    demo: "https://naufal-tweeter.vercel.app/" 
  },
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
  }
];