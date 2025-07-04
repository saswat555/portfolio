// src/components/FeaturedHighlights.jsx
import React from 'react';

const featuredProjects = [
  { name: 'RAG System on Apache Solr', description: 'Hybrid retrieval + LLM context', tech: ['Solr','Python','OpenAI'] },
  { name: 'Predictive Data Entry',         description: 'ML autocomplete for Epicor', tech: ['Flask','JS','XGBoost'] },
  { name: 'Spintrip Platform',            description: 'End-to-end travel booking',   tech: ['Angular','Node.js','MongoDB'] }
];

export default function FeaturedHighlights() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredProjects.map(fp => (
        <div key={fp.name} className="p-6 bg-gray-800 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">{fp.name}</h3>
          <p className="text-gray-400 mb-3">{fp.description}</p>
          <div className="flex flex-wrap gap-2">
            {fp.tech.map(t => (
              <span key={t} className="text-xs bg-cyan-500/20 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}