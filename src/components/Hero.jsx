// src/components/Hero.jsx
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import resumePdf from '../assets/saswat.pdf';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden
                 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
    >
      {/* Animated rings behind the portrait */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-80 h-80 border-4 border-indigo-500 rounded-full opacity-20 animate-spin-slow" />
        <div className="absolute w-64 h-64 border-2 border-purple-400 rounded-full opacity-30 animate-spin-reverse" />
      </div>

      {/* Blob backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-purple-600 to-indigo-400 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="relative inline-block">
          <img
            src={profilePic}
            alt="Saswat Pandey"
            className="w-48 h-48 object-cover rounded-3xl border-4 border-gray-200 dark:border-gray-800 shadow-xl transition-colors"
          />
        </div>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent
                       bg-gradient-to-r from-indigo-500 to-purple-600
                       dark:from-indigo-300 dark:to-purple-400">
          Saswat Pandey
        </h1>

        <p className="mt-4 text-lg md:text-2xl text-gray-700 dark:text-gray-300">
          Full-Stack Developer & AI/ML Enthusiast<br/>
          Crafting scalable apps and intelligent systems
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full font-semibold shadow-lg
                       hover:bg-indigo-700 dark:hover:bg-indigo-400 transition"
          >
            Get in Touch
          </a>
          <a
            href={resumePdf}
            download="Saswat_Pandey_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white
                       rounded-full font-semibold shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
          <a href="mailto:saswatp99@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/saswat555" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/saswat-pandey" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Keyframes & custom animations */}
      <style>{`
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.9)} }
        @keyframes spin-slow   { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes spin-reverse{ from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
        @keyframes pulse-slow  { 0%,100%{opacity:.3} 50%{opacity:.6} }
        .animate-blob        { animation:blob 8s infinite; }
        .animation-delay-2000{ animation-delay:2s; }
        .animate-spin-slow   { animation:spin-slow 20s linear infinite; }
        .animate-spin-reverse{ animation:spin-reverse 30s linear infinite; }
        .animate-pulse-slow  { animation:pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
