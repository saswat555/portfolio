// src/components/ProjectsSection.jsx
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
    description: 'Smart warehouse insights: perishable-goods forecasting & automated restocking alerts.',
    tech: ['Flask','TensorFlow','MongoDB','ARIMA'],
    github: 'https://github.com/saswat555/intercessor',
    stars: 102,
    forks: 4,
    image: intercessorImg
  },
  {
    name: 'Plant Disease Detection',
    description: 'CNN-powered crop disease classifier deployed as a Flask REST API.',
    tech: ['TensorFlow','Keras','OpenCV','Python'],
    github: 'https://github.com/saswat555/plant-disease-model',
    stars: 89,
    forks: 2,
    image: plantDiseaseImg
  },
  {
    name: 'LLM Fine-tuning',
    description: 'LoRA & QLoRA on domain corpora, hosted on SageMaker for low-cost inference.',
    tech: ['HuggingFace','PyTorch','LoRA','SageMaker'],
    github: 'https://github.com/saswat555/llmfinetuning',
    stars: 45,
    forks: 3,
    image: llmTuningImg
  },
  {
    name: 'Hydroleaf Suite',
    description: 'Full‐stack crop analytics: FastAPI backend, Angular web, Flutter mobile, plus TF forecasting.',
    tech: ['FastAPI','Angular','Flutter','TensorFlow'],
    github: 'https://github.com/saswat555/hydroleaf',
    stars: 67,
    forks: 5,
    image: hydroleafImg
  },
  {
    name: 'Mercor Platform',
    description: 'Trial booking flow with Flask backend & vanilla JS frontend—robust data validations.',
    tech: ['Flask','JavaScript','HTML','CSS'],
    github: 'https://github.com/saswat555/mercor_frontend',
    stars: 12,
    forks: 1,
    image: mercorImg
  },
  {
    name: 'Frontend Medusa',
    description: 'Custom e-commerce storefront on Medusa.js, React & Tailwind CSS.',
    tech: ['Medusa.js','React','TypeScript','Tailwind'],
    github: 'https://github.com/saswat555/frontend-medusa',
    stars: 20,
    forks: 4,
    image: medusaImg
  },
  {
    name: 'Elasticsearch CRUD',
    description: 'Dockerized microservice demonstrating full Elasticsearch CRUD via Python.',
    tech: ['Elasticsearch','Docker','Python'],
    github: 'https://github.com/saswat555/elastic_search_crud',
    stars: 15,
    forks: 2,
    image: elasticImg
  }
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const prev = () => setCurrent((current - 1 + length) % length);
  const next = () => setCurrent((current + 1) % length);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
      <p className="text-center text-gray-400 mb-8">
        My independent projects & contributions
      </p>

      <div className="relative max-w-4xl mx-auto">
        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Carousel slide */}
        {projects.map((proj, idx) => (
          <div
            key={proj.name}
            className={`transition-all duration-500 ${idx === current ? 'block' : 'hidden'}`}
          >
            <ProjectCard project={proj} />
          </div>
        ))}

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? 'bg-indigo-600' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
