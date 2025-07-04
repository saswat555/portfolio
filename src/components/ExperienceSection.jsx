import React, { useState } from 'react';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Brain,
  BookOpen,
  BarChart3,
  Code
} from 'lucide-react';

const academicData = [
  {
    icon: BookOpen,
    title: 'B.Tech – Information Science',
    subtitle: 'CMR Institute of Technology, Bangalore',
    date: '2019 – 2023'
  },
  {
    icon: GraduationCap,
    title: 'Higher Secondary (CBSE)',
    subtitle: 'JVM Shyamali, Ranchi',
    date: '2018'
  }
];

const professionalData = [
  {
    icon: Brain,
    title: 'Associate Product Developer – AI',
    subtitle: 'Epicor Software Corp.',
    date: 'Mar 2023 – Present'
  },
  {
    icon: BookOpen,
    title: 'Remote Trainer',
    subtitle: 'AWS, Salesforce, ServiceNow',
    date: '2021 – 2022'
  },
  {
    icon: BarChart3,
    title: 'Data Analyst & ML Engineer',
    subtitle: 'Handlkart Private Ltd.',
    date: '2020 – 2021'
  },
  {
    icon: Code,
    title: 'Full-stack Engineer (Consultant)',
    subtitle: 'Ronessa Schools Ltd.',
    date: '2019 – 2023'
  }
];

export default function ExperienceSection() {
  const [view, setView] = useState('academic');
  const data = view === 'academic' ? academicData : professionalData;

  return (
    <section
      id="experience"
      className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors"
    >
      <h2 className="text-3xl font-bold text-center mb-2">Experience</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
        {view === 'academic'
          ? 'My Academic Journey'
          : 'My Professional Milestones'}
      </p>

      {/* Toggle */}
      <div className="flex justify-center space-x-12 mb-16">
        {[
          { key: 'academic', Icon: GraduationCap, label: 'Academic' },
          { key: 'professional', Icon: Briefcase, label: 'Professional' }
        ].map(({ key, Icon, label }) => (
          <button
            key={key}
            onClick={() => setView(key)}
            className={`
              flex flex-col items-center space-y-1
              ${view === key
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-gray-500 dark:text-gray-500/70'}
              hover:text-indigo-600 dark:hover:text-indigo-400
              transition-colors
            `}
          >
            <Icon className="w-8 h-8 animate-pulse" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto px-4">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-400 to-purple-500 h-full" />

        <div className="space-y-16">
          {data.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`
                  flex w-full ${isLeft ? 'justify-start' : 'justify-end'}
                  relative
                `}
              >
                <div className="w-1/2 px-6">
                  <div
                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
                      transform transition-transform duration-500
                      hover:-translate-y-2`}
                  >
                    <div className="flex items-center mb-2 space-x-3">
                      <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400 animate-pulse-slow" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      {item.subtitle}
                    </p>
                    <div className="flex items-center text-sm text-gray-400 dark:text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-10">
                  <div className="w-4 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-ping" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
