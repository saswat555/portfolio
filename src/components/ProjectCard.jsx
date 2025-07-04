import React from 'react';
import { Github, Star, Sparkles } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg
                    flex flex-col md:flex-row items-center gap-6
                    transform hover:scale-105 transition">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-xl object-cover w-full h-64 shadow-inner"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
          <Sparkles className="w-6 h-6 text-indigo-500 animate-pulse" />
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <Github className="w-5 h-5 mr-1" />
            View Code
          </a>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Star className="w-5 h-5 mr-1 text-yellow-400" />
            {project.stars}
          </div>
        </div>
      </div>
    </div>
  );
}
