// src/components/SkillsSection.jsx
import React, { useState } from 'react';
import {
  Brain,
  BookOpen,
  Code,
  Server,
  Cpu,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const categories = [
  {
    id: 'ds',
    name: 'Data Science & AI',
    icon: Brain,
    xp: '4+ Years XP',
    skills: [
      { name: 'Computer Vision', level: 95 },
      { name: 'Generative AI', level: 95 },
      { name: 'NLP', level: 95 },
      { name: 'Signal Processing', level: 90 },
      { name: 'Probability & Statistics', level: 90 },
      { name: 'Data Analytics', level: 85 },
      { name: 'Frameworks & Libraries', level: 90 }
    ]
  },
  {
    id: 'fe',
    name: 'Front End',
    icon: BookOpen,
    xp: '2+ Years XP',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Flutter', level: 88 }
    ]
  },
  {
    id: 'prog',
    name: 'Programming',
    icon: Code,
    xp: '3+ Years XP',
    skills: [
      { name: 'Python', level: 96 },
      { name: 'JavaScript', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'Dart', level: 88 }
    ]
  },
  {
    id: 'be',
    name: 'BackEnd',
    icon: Server,
    xp: '3+ Years XP',
    skills: [
      { name: 'Node.js', level: 89 },
      { name: 'Python (FastAPI)', level: 93 },
      { name: 'Flask', level: 91 },
      { name: 'Spring Boot', level: 85 }
    ]
  },
  {
    id: 'comp',
    name: 'Computing',
    icon: Cpu,
    xp: '3+ Years XP',
    skills: [
      { name: 'Docker', level: 89 },
      { name: 'AWS', level: 87 },
      { name: 'GitHub Actions', level: 91 },
      { name: 'Elasticsearch', level: 93 }
    ]
  },
  {
    id: 'misc',
    name: 'Misc',
    icon: TrendingUp,
    xp: '4+ Years XP',
    skills: [
      { name: 'Leadership', level: 90 },
      { name: 'Communication', level: 95 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Agile', level: 88 }
    ]
  }
];

export default function SkillsSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Skills</h2>
      <p className="text-center text-gray-400 mb-8">My technical & other skills</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
        {categories.map(cat => {
          const Icon = cat.icon;
          const isOpen = open === cat.id;
          return (
            <div key={cat.id} className="space-y-4">
              <button
                onClick={() => setOpen(isOpen ? null : cat.id)}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-indigo-500" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
                    <p className="text-gray-400 text-sm">{cat.xp}</p>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-indigo-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </button>

              {isOpen && (
                <div className="mt-4 space-y-4">
                  {cat.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1 text-sm text-white">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
