import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Hero, About, ProjectsPreview, Footer } from './components';
import { ProjectsPage } from './ProjectsPage';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsPreview />
      <Footer />
    </main>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-bold tracking-tighter pointer-events-auto flex items-center gap-3 relative z-50">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/transparent.png" 
              alt="Pexmon Studio Logo - Product Engineering & Digital Infrastructure" 
              className="w-8 h-8 object-contain block"
              referrerPolicy="no-referrer"
              style={{ minWidth: '40px', minHeight: '40px' }}
            />
            <span>PEXMON</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em] pointer-events-auto">
          <a href="/#about" className="hover:text-white/60 transition-colors">About</a>
          <a href="/projects" className="hover:text-white/60 transition-colors">Systems</a>
          <a href="mailto:hello@pexmon.one" className="hover:text-white/60 transition-colors underline underline-offset-4">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden pointer-events-auto relative z-50 text-white p-2 focus:outline-none glass-panel"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10 text-sm font-mono uppercase tracking-[0.3em]">
          <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">About</a>
          <a href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white/60 transition-colors">Systems</a>
          <a href="mailto:hello@pexmon.one" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white/60 transition-colors underline underline-offset-4">Contact</a>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-white/20">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
