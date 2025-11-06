import React from 'react';
import { Code2, Boxes, Database, Cloud, BrainCircuit } from 'lucide-react';

const SkillTag = ({ label }) => (
  <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
    {label}
  </span>
);

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Code2 className="text-indigo-600" />
            <h3 className="text-lg font-semibold">Languages & Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Java','Python','TypeScript','React','Redux','HTML5','CSS3','Tailwind','Vite',
            ].map((s) => (<SkillTag key={s} label={s} />))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Boxes className="text-indigo-600" />
            <h3 className="text-lg font-semibold">Backend & APIs</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Spring Boot','Node.js','REST APIs','Maven'].map((s) => (<SkillTag key={s} label={s} />))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Database className="text-indigo-600" />
            <h3 className="text-lg font-semibold">Databases</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['SQL','MongoDB','FAISS'].map((s) => (<SkillTag key={s} label={s} />))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Cloud className="text-indigo-600" />
            <h3 className="text-lg font-semibold">Cloud, DevOps & AI</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Azure','Docker','Kubernetes','GitHub Actions','CI/CD','LangChain','GPT-4','Claude','Hugging Face','OpenCV','TensorFlow','Scikit-learn','Pandas'].map((s) => (<SkillTag key={s} label={s} />))}
          </div>
        </div>

        <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <BrainCircuit className="text-indigo-600" />
            <h3 className="text-lg font-semibold">Coursework</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Generative AI','Prompt Engineering','Web Technologies','Artificial Intelligence','Machine Learning','NLP','Deep Learning','DSA'].map((s) => (<SkillTag key={s} label={s} />))}
          </div>
        </div>
      </div>
    </section>
  );
}
