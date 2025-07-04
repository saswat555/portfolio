// src/components/Nav.jsx
import React, { useState, useEffect } from 'react';
import {
  Home,
  User,
  FolderOpen,
  Trophy,
  Send,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { id: 'home',      label: 'Home',      icon: Home },
  { id: 'about',     label: 'About',     icon: User },
  { id: 'projects',  label: 'Projects',  icon: FolderOpen },
  { id: 'skills',    label: 'Skills',    icon: Trophy },
  { id: 'contact',   label: 'Contact',   icon: Send }
];

export default function Nav({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // sync theme with html class and localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <nav className="fixed w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400 cursor-pointer"
             onClick={() => setCurrentPage('home')}>
          SP
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-1 p-2 rounded-md transition-colors duration-200
                    ${currentPage === item.id ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}
                    hover:text-indigo-500 dark:hover:text-indigo-400`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            {theme === 'light' ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(open => !open)} className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            {mobileOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg px-4 py-4 space-y-4">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setMobileOpen(false); }}
                className="flex items-center space-x-2 w-full text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
