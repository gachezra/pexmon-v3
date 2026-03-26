import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from './constants';
import Lottie from 'lottie-react';

// Abstract technical/system animation
import techAnimationData from './infrastructure.json';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <span className="inline-block px-4 py-1.5 glass-panel text-xs font-mono tracking-widest uppercase mb-6">
          Product Engineering Studio & Digital Infrastructure
        </span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
          WE BUILD SYSTEMS <br />
          <span className="text-white/40 italic">THAT OPERATE.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Pexmon is a specialized studio engineering robust digital infrastructure. Experts in <span className="text-white">M-Pesa payment integration</span>, real-time synchronization, and scalable fintech solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/projects"
            className="group px-8 py-4 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:bg-white/90 transition-all"
          >
            Explore Systems
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#about"
            className="px-8 py-4 glass-panel font-medium hover:bg-white/10 transition-all"
          >
            Our Philosophy
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll to reveal</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}

export function About() {
  const animationData = techAnimationData;


  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Operational Credibility <br />
            Over Visual Fluff.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            We don't just build interfaces; we engineer the logic that powers them. Our focus is on solving real-world constraints through <span className="text-white">custom software development</span>: low-latency state management, secure <span className="text-white">fintech infrastructure</span>, and high-performance data retrieval.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <Zap className="w-5 h-5" />, title: "Performance", desc: "Optimized for sub-second response times." },
              { icon: <Database className="w-5 h-5" />, title: "Reliability", desc: "Deterministic state and robust failovers." },
              { icon: <Code2 className="w-5 h-5" />, title: "Scalability", desc: "Architectures designed for growth." },
              { icon: <ArrowRight className="w-5 h-5" />, title: "Integration", desc: "Seamless third-party infrastructure." },
            ].map((item, i) => (
              <div key={i} className="p-6 glass-panel">
                <div className="mb-4 text-white/80">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square glass-panel flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-10" />
          <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
            {animationData && (
              <Lottie 
                animationData={animationData}
                loop={true}
                className="w-full h-full max-w-[400px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsPreview() {
  const previewProjects = PROJECTS.slice(0, 3);
  
  return (
    <section className="py-32 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4 block">Selected Works</span>
            <h2 className="text-4xl font-bold tracking-tight">Systems in Production</h2>
          </div>
          <Link to="/projects" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewProjects.map((project) => (
            <Link 
              key={project.id} 
              to="/projects"
              className="group glass-panel p-8 hover:bg-white/10 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </div>
              </div>
              <p className="text-white/50 mb-8 flex-grow">{project.tagline}</p>
              <div className="pt-8 border-t border-white/5">
                <div className="text-xs font-mono text-white/30 uppercase mb-2">Key Metric</div>
                <div className="text-2xl font-bold">{project.metrics[0].value}</div>
                <div className="text-xs text-white/40">{project.metrics[0].label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img 
            src="/transparent.png" 
            alt="Pexmon Studio Logo - Building High-Performance Digital Systems" 
            className="w-12 h-12 object-contain mb-4 block"
            referrerPolicy="no-referrer"
            style={{ minWidth: '48px', minHeight: '48px' }}
            loading="lazy"
          />
          <div className="text-2xl font-bold tracking-tighter mb-4">PEXMON</div>
          <p className="text-white/40 max-w-xs">
            We don’t build interfaces. We build systems that operate.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <h3 className="text-xl font-bold">Start a Project</h3>
          <a 
            href="mailto:hello@pexmon.one" 
            className="text-3xl md:text-4xl font-light hover:text-white/60 transition-colors underline underline-offset-8"
          >
            hello@pexmon.one
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest">
        <span>© 2026 Pexmon Studio</span>
        <span>Built for Performance</span>
      </div>
    </footer>
  );
}
