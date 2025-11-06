import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-800">Sanka Akash</p>
            <p className="text-sm text-slate-600">Fullstack AI/ML Engineer • Hyderabad, India</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-slate-700">
            <a href="mailto:ursakash9@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-200">
              <Mail size={16} /> Email
            </a>
            <a href="tel:+919391352606" className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-200">
              <Phone size={16} /> Call
            </a>
            <a href="https://www.linkedin.com/in/sankaakash/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-200">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/SANKAAKASH" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-2 text-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-200">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Sanka Akash. All rights reserved.</p>
      </div>
    </footer>
  );
}
