'use client';

import React, { useEffect, useState } from 'react';

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none transition-colors duration-500">
      
      <div className="absolute inset-0 bg-white dark:opacity-0 transition-opacity duration-500">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob-pulse" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob-pulse delay-[2000ms]" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob-pulse delay-[4000ms]" />
      </div>

      <div className="absolute inset-0 bg-slate-950 opacity-0 dark:opacity-100 transition-opacity duration-500">
        
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => {
             const size = Math.random() * 2 + 1; 
             const opacity = Math.random() * 0.5 + 0.5; 
             
             return (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity, 
                  boxShadow: size > 2 ? '0 0 4px rgba(255, 255, 255, 0.8)' : 'none',
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`, 
                }}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="shooting-star" style={{ top: '-10%', left: '10%', animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="shooting-star" style={{ top: '-10%', left: '40%', animationDelay: '2s', animationDuration: '6s' }}></div>
          <div className="shooting-star" style={{ top: '20%', left: '-10%', animationDelay: '5s', animationDuration: '5s' }}></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
      </div>
    </div>
  );
}