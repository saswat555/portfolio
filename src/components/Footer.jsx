// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-gray-800 text-gray-400">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p>Built by Saswat Pandey © {new Date().getFullYear()}</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:saswat.pandey@example.com" className="hover:text-white">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/saswat555" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/saswat-pandey" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
