import React, { useState } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import FeaturedHighlights from './FeaturedHighlights';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
export default function Portfolio() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation bar */}
      <Nav currentPage={page} setCurrentPage={setPage} />

      {/* Hero section */}
      {page === 'home' && <Hero />}

      {/* Main content */}
      <main className="pt-20 px-4 max-w-4xl mx-auto space-y-20">
        {page === 'home' && (
          <>
            <FeaturedHighlights />
            <ExperienceSection />
          </>
        )}
        {page === 'about' && (
          <>
            <section id="about" className="space-y-4">
              <h2 className="text-4xl font-bold">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I’m Saswat Pandey, a versatile full-stack engineer and AI/ML practitioner.
                I’ve built enterprise-grade platforms, custom RAG systems on Solr, and
                predictive data-entry tools for ERPs.
              </p>
            </section>
            <ExperienceSection />
          </>
        )}

        {page === 'projects' && (
          <section id="projects">
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
            <ProjectsSection />
          </section>
        )}

        {page === 'skills' && (
          <section id="skills">
            <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
            <SkillsSection />
          </section>
        )}

        {page === 'contact' && (
          <section id="contact" className="space-y-6">
            <h2 className="text-4xl font-bold text-center">Contact Me</h2>
            <div className="max-w-md mx-auto">
              <ContactForm />
            </div>
          </section>
        )}
         <Footer />
      </main>
    </div>
  );
}
