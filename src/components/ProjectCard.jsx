// src/components/ProjectCard.jsx
import React from 'react';
import { Github, Star, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 transform hover:scale-105 transition">
      {/* Project image */}
      <div className="w-full md:w-1/2">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-xl shadow-lg object-cover w-full h-64"
        />
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="text-indigo-400 w-6 h-6 animate-pulse" />
          {project.name}
        </h3>
        <p className="text-gray-300">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-indigo-600/30 text-indigo-200 text-sm rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links & stats */}
        <div className="flex items-center gap-6 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:underline"
          >
            <Github className="w-5 h-5 mr-1" />
            View Code
          </a>

          <div className="flex items-center text-gray-400">
            <Star className="w-5 h-5 mr-1 text-yellow-400" />
            {project.stars}
          </div>
        </div>
      </div>
    </div>
  );
}
