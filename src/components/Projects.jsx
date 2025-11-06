import React from 'react';
import { Hand, Waves, Award } from 'lucide-react';

function ProjectCard({ title, description, points, tags }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Hand className="text-indigo-600" />
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-slate-700">{description}</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 ring-1 ring-inset ring-slate-200">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
      <div className="mb-6 flex items-center gap-2">
        <Waves className="text-indigo-600" />
        <h3 className="text-2xl font-semibold">Projects</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Sign Language & Voice Impairment Support System"
          description="Real‑time gesture recognition for Indian Sign Language with speech output."
          points={[
            'Achieved 90%+ accuracy using CNN + OpenCV.',
            'Gesture‑to‑speech using pyttsx3 to assist speech‑impaired users.',
            'Built desktop GUI (Tkinter) and web version (React + Vite).',
          ]}
          tags={["Python","OpenCV","CNN","pyttsx3","Tkinter","React","Vite"]}
        />

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-amber-800">
            <Award />
            <h4 className="font-semibold">Awards & Hackathons</h4>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-amber-900">
            <li>Lennox Genesis Award – GenAI‑powered employee wellness bot.</li>
            <li>AI for Accessibility Hackathon (Winner) – Sign Language Support System.</li>
            <li>GDSC GenAI Hackathon (Top 10) – AutoMuze using GPT‑4 and LangChain.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
