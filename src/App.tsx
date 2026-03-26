import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Hero, About, ProjectsPreview, Footer } from './components';
import { ProjectsPage } from './ProjectsPage';
import { useEffect } from 'react';

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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-white/20">
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
          <div className="text-xl font-bold tracking-tighter pointer-events-auto flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="https://storage.googleapis.com/static.aistudio.google.com/content/file-0.png" 
                alt="Pexmon Studio Logo - Product Engineering & Digital Infrastructure" 
                className="w-8 h-8 object-contain block"
                referrerPolicy="no-referrer"
                style={{ minWidth: '32px', minHeight: '32px' }}
              />
              <span>PEXMON</span>
            </a>
          </div>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em] pointer-events-auto">
            <a href="/#about" className="hover:text-white/60 transition-colors">About</a>
            <a href="/projects" className="hover:text-white/60 transition-colors">Systems</a>
            <a href="mailto:hello@pexmon.one" className="hover:text-white/60 transition-colors underline underline-offset-4">Contact</a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
