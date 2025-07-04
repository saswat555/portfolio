import { Code, Database, Rocket } from 'lucide-react';

const featured = [
  {
    name: 'RAG System on Apache Solr',
    description: 'Hybrid retrieval with LLM context assembly',
    tech: ['Solr', 'Python', 'OpenAI'],
    Icon: Database
  },
  {
    name: 'Predictive Data Entry',
    description: 'ML autocomplete extension for Epicor ERP',
    tech: ['Flask', 'JavaScript', 'XGBoost'],
    Icon: Code
  },
  {
    name: 'Spintrip Platform',
    description: 'End-to-end travel booking workflow',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Stripe API'],
    Icon: Rocket
  }
];

export default function FeaturedHighlights() {
  return (
    <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {featured.map(({ name, description, tech, Icon }) => (
        <div
          key={name}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg
                     transform transition-transform duration-300
                     hover:scale-105"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-bounce-slow" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {name}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-indigo-200
                           dark:from-gray-700 dark:to-gray-600
                           text-indigo-600 dark:text-indigo-300 text-xs rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
