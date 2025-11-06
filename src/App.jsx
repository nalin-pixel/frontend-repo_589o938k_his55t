import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10">
          <a href="#top" className="text-sm font-semibold tracking-tight">Sanka Akash</a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
          </nav>
          <a href="mailto:ursakash9@gmail.com" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-500">Contact</a>
        </div>
      </header>

      <main id="top" className="space-y-12 sm:space-y-16">
        <div className="mx-auto max-w-7xl px-6 pt-6 sm:px-10">
          <Hero />
        </div>
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
