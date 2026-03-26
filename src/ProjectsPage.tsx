import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS, Project } from './constants';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function MetricCard({ metric }: { metric: Project['metrics'][0], key?: React.Key }) {
  const [displayValue, setDisplayValue] = useState('0');
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numericValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(metric.value);
      return;
    }

    const suffix = metric.value.replace(/[0-9.]/g, '');
    const prefix = metric.value.startsWith('<') ? '<' : '';
    
    const obj = { val: 0 };
    const anim = gsap.to(obj, {
      val: numericValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onUpdate: () => {
        const formatted = obj.val % 1 === 0 ? obj.val.toFixed(0) : obj.val.toFixed(1);
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      }
    });

    return () => {
      anim.kill();
    };
  }, [metric.value]);

  return (
    <div ref={cardRef} className="glass-panel p-6">
      <div className="text-3xl font-bold mb-1">{displayValue}</div>
      <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{metric.label}</div>
    </div>
  );
}

export function ProjectsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-400vw", // 5 projects, so move 4 times the width
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top", // Duration of scroll
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Entry Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="text-center max-w-3xl z-10">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] mb-6 block">Portfolio Archive</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">Selected Systems</h1>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            A structured view into products engineered for real-world deployment. These are not just concepts; they are operational infrastructures.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 opacity-40">
            <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="horizontal-container h-screen flex">
          {PROJECTS.map((project, index) => (
            <section 
              key={project.id} 
              className={`project-slide flex items-center justify-center px-6 md:px-20 relative overflow-hidden bg-gradient-to-br ${project.accentColor} to-transparent`}
            >
              <div className="absolute inset-0 grid-overlay opacity-5" />
              <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center z-10">
                {/* Left Panel: Identity & Positioning */}
                <div className="project-identity">
                  <div className="text-[120px] font-bold text-white/5 absolute -top-10 -left-10 select-none pointer-events-none">
                    0{index + 1}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">{project.name}</h2>
                  <p className="text-xl text-white/70 leading-relaxed mb-10 font-light">
                    {project.positioning}
                  </p>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 glass-panel hover:bg-white hover:text-black transition-all group"
                  >
                    Launch System
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                  </a>
                </div>

                {/* Right Panel: Metrics & Highlights */}
                <div className="space-y-12">
                  <div className="grid grid-cols-2 gap-6">
                    {project.metrics.map((metric, i) => (
                      <MetricCard key={i} metric={metric} />
                    ))}
                  </div>

                  <div className="glass-panel p-8">
                    <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">System Highlights</h4>
                    <ul className="space-y-4">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Exit Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative bg-black">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="text-center max-w-4xl z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
            We don’t build interfaces. <br />
            <span className="text-white/40 italic">We build systems that operate.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:hello@pexmon.one"
              className="px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
            >
              Start a Project
            </a>
            <Link 
              to="/"
              className="px-12 py-5 glass-panel font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
