// src/components/ExperienceSection.jsx
import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const academicData = [
  {
    title: 'B.Tech – Information Science',
    subtitle: 'CMR Institute of Technology, Bangalore',
    date: '2019 – 2023'
  },
  {
    title: 'Higher Secondary (CBSE)',
    subtitle: 'JVM Shyamali, Ranchi',
    date: '2018'
  }
];

const professionalData = [
  {
    title: 'Associate Product Developer – AI',
    subtitle: 'Epicor Software Corp.',
    date: 'Mar 2023 – Present'
  },
  {
    title: 'Remote Trainer',
    subtitle: 'AWS, Salesforce, ServiceNow',
    date: '2021 – 2022'
  },
  {
    title: 'Data Analyst & ML Engineer',
    subtitle: 'Handlkart Private Ltd.',
    date: '2020 – 2021'
  },
  {
    title: 'Full-stack Engineer (Consultant)',
    subtitle: 'Ronessa Schools Ltd.',
    date: '2019 – 2023'
  }
];

export default function ExperienceSection() {
  const [view, setView] = useState('academic');
  const data = view === 'academic' ? academicData : professionalData;

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Experience</h2>
      <p className="text-center text-gray-400 mb-8">
        {view === 'academic' ? 'My Academic Journey' : 'My Professional Milestones'}
      </p>

      {/* Toggle Buttons with Icons */}
      <div className="flex justify-center space-x-12 mb-12">
        <button
          onClick={() => setView('academic')}
          className="flex flex-col items-center focus:outline-none"
        >
          <GraduationCap
            className={`w-8 h-8 ${view === 'academic' ? 'text-indigo-600' : 'text-gray-500'} transition-colors`} />
          <span className={`mt-1 font-medium ${view === 'academic' ? 'text-indigo-600' : 'text-gray-500'}`}>
            Academic
          </span>
        </button>

        <button
          onClick={() => setView('professional')}
          className="flex flex-col items-center focus:outline-none"
        >
          <Briefcase
            className={`w-8 h-8 ${view === 'professional' ? 'text-indigo-600' : 'text-gray-500'} transition-colors`} />
          <span className={`mt-1 font-medium ${view === 'professional' ? 'text-indigo-600' : 'text-gray-500'}`}>
            Professional
          </span>
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-indigo-600 h-full" />

        <div className="space-y-12">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-start w-full">
              {/* Left side content */}
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.subtitle}</p>
                <div className="flex justify-end items-center text-sm text-gray-500 mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Dot on center */}
              <div className="w-1/2 pl-8 relative">
                <div className="absolute left-0 top-2 w-4 h-4 bg-indigo-600 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}