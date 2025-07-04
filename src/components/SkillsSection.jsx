// src/components/SkillsSection.jsx
import React, { useState } from 'react';

const techCategories = {
  frontend: { title: 'Frontend', skills: ['Angular','React','Tailwind CSS'] },
  backend:  { title: 'Backend',  skills: ['Node.js','Python','FastAPI'] },
  ml:       { title: 'AI/ML',    skills: ['TensorFlow','scikit-learn','OpenAI API'] }
};

function SkillBar({ skill }) {
  return (
    <div className="mb-4">
      <span className="block text-white mb-1">{skill}</span>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="w-full h-full bg-cyan-500" />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [tab, setTab] = useState('frontend');

  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="mb-6 flex gap-4">
        {Object.entries(techCategories).map(([key, cat]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded ${
              tab === key ? 'bg-cyan-600' : 'bg-gray-700'
            } transition`}
          >
            {cat.title}
          </button>
        ))}
      </div>
      <div>
        {techCategories[tab].skills.map(s => <SkillBar key={s} skill={s} />)}
      </div>
    </section>
  );
}