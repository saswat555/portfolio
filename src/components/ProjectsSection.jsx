import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

import intercessorImg from '../assets/intercessor.png';
import plantDiseaseImg from '../assets/plant.webp';
import llmTuningImg from '../assets/llm.png';
import hydroleafImg from '../assets/hydroleaf.jpg';
import mercorImg from '../assets/mercor.jpeg';
import medusaImg from '../assets/medusa.jpg';
import elasticImg from '../assets/elasticsearch.jpg';

const projects = [
  {
    name: 'Intercessor',
    description: 'Perishable-goods forecasting & restocking alerts.',
    tech: ['Flask','TensorFlow','MongoDB','ARIMA'],
    github: 'https://github.com/saswat555/intercessor',
    stars: 102,
    image: intercessorImg
  },
  {
    name: 'Plant Disease Detection',
    description: 'CNN crop disease classifier as Flask REST API.',
    tech: ['TensorFlow','Keras','OpenCV','Python'],
    github: 'https://github.com/saswat555/plant-disease-model',
    stars: 89,
    image: plantDiseaseImg
  },
  {
    name: 'LLM Fine-tuning',
    description: 'LoRA & QLoRA on domain corpora via SageMaker.',
    tech: ['HuggingFace','PyTorch','LoRA','SageMaker'],
    github: 'https://github.com/saswat555/llmfinetuning',
    stars: 45,
    image: llmTuningImg
  },
  {
    name: 'Hydroleaf Suite',
    description: 'Full-stack crop analytics: FastAPI, Angular, Flutter.',
    tech: ['FastAPI','Angular','Flutter','TensorFlow'],
    github: 'https://github.com/saswat555/hydroleaf',
    stars: 67,
    image: hydroleafImg
  },
  {
    name: 'Mercor Platform',
    description: 'Flask + Vanilla JS trial booking flow.',
    tech: ['Flask','JavaScript','HTML','CSS'],
    github: 'https://github.com/saswat555/mercor_frontend',
    stars: 12,
    image: mercorImg
  },
  {
    name: 'Medusa Storefront',
    description: 'E-commerce front on Medusa.js & React.',
    tech: ['Medusa.js','React','TypeScript','Tailwind'],
    github: 'https://github.com/saswat555/frontend-medusa',
    stars: 20,
    image: medusaImg
  },
  {
    name: 'Elasticsearch CRUD',
    description: 'Dockerized service for full ES CRUD in Python.',
    tech: ['Elasticsearch','Docker','Python'],
    github: 'https://github.com/saswat555/elastic_search_crud',
    stars: 15,
    image: elasticImg
  }
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const len = projects.length;

  const prev = () => setCurrent((c) => (c - 1 + len) % len);
  const next = () => setCurrent((c) => (c + 1) % len);

  return (
    <div className="relative">
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full
                   hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full
                   hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden">
        {projects.map((proj, i) => (
          <div
            key={proj.name}
            className={`transition-transform duration-500 ${
              i === current ? 'translate-x-0' : i < current ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <ProjectCard project={proj} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors
                       ${i === current ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
