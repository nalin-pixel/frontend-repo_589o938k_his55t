import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';

const ContactLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20 backdrop-blur"
  >
    <Icon size={16} />
    <span className="text-sm">{label}</span>
  </a>
);

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-center md:gap-12 md:py-24">
        <div className="max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to exciting AI/ML & Full‑stack opportunities
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Sanka Akash
          </h1>
          <p className="mt-3 text-lg text-slate-200">Fullstack AI/ML Engineer • Hyderabad, India</p>

          <p className="mt-6 text-slate-200">
            Fullstack AI/ML Engineer with 2+ years crafting scalable GenAI and cloud‑native solutions using
            Python, TypeScript, LangChain, GPT‑4, Docker, and Azure. Experienced in vector search (FAISS), prompt
            engineering, and CI/CD — delivering production systems used by 5,000+ engineers across 6 global plants.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-100">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm backdrop-blur ring-1 ring-white/20">
              <MapPin size={16} className="text-emerald-300" /> Hyderabad
            </div>
            <a
              href="mailto:ursakash9@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm backdrop-blur ring-1 ring-white/20 hover:bg-white/20 transition-colors"
            >
              <Mail size={16} /> ursakash9@gmail.com
            </a>
            <a
              href="tel:+919391352606"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm backdrop-blur ring-1 ring-white/20 hover:bg-white/20 transition-colors"
            >
              <Phone size={16} /> +91-93913-52606
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <ContactLink
              href="https://www.linkedin.com/in/sankaakash/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <ContactLink
              href="https://github.com/SANKAAKASH"
              icon={Github}
              label="GitHub"
            />
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-400 transition-colors text-white"
            >
              <ExternalLink size={16} /> View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
