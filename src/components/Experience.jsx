import React from 'react';
import { Factory, Rocket, Workflow } from 'lucide-react';

function TimelineItem({ title, subtitle, period, bullets, tech }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">{period}</span>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {tech && (
        <p className="mt-3 text-sm text-slate-500">Tech: {tech}</p>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
      <div className="mb-6 flex items-center gap-2">
        <Factory className="text-indigo-600" />
        <h3 className="text-2xl font-semibold">Experience</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <TimelineItem
          title="Associate"
          subtitle="Lennox India"
          period="Jun 2024 – Present"
          bullets={[
            'Built a robust label management platform with seamless CRUD, versioning, and RBAC for 100K+ labels.',
            'Automated previews, barcodes, and batch printing via Loftware, reducing manual effort by 60%.',
            'Shipped an AI label generator using GPT‑4, Claude, and LangChain — cutting time by 50%.',
            'Designed FAISS vector search to recommend templates with ~90% accuracy.',
            'Containerized services and deployed on Azure Kubernetes; automated CI/CD with GitHub Actions.',
          ]}
          tech="React, TypeScript, Redux, Spring Boot, Java, SQL, Loftware, Azure AI Studio, Docker, Kubernetes, LangChain, GPT‑4, Claude, LLaMA, Pandas, FAISS"
        />

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="text-indigo-600" />
            <h4 className="text-lg font-semibold">Generative AI Solutions</h4>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Multi‑agent LangChain pipelines for intelligent label generation with GPT‑4 and Claude.</li>
            <li>Semantic search and retrieval using FAISS with ~90% context match accuracy.</li>
            <li>Deployed scalable GenAI endpoints on Azure AI Studio with prompt optimization.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
