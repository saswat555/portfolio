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
  { id: 'home',     label: 'Home',     icon: Home },
  { id: 'about',    label: 'About',    icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills',   label: 'Skills',   icon: Trophy },
  { id: 'contact',  label: 'Contact',  icon: Send }
];

export default function Nav({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // 1) On mount, pick stored theme or system preference
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
    setTheme(saved || system);
  }, []);

  // 2) Apply/remove the `dark` class on <html> and persist
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 3) Handlers
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  const toggleMobile = () => setMobileOpen(o => !o);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-30 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 backdrop-blur shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="text-2xl font-extrabold cursor-pointer bg-clip-text text-transparent
                     bg-gradient-to-r from-purple-600 to-indigo-500"
        >
          SP
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`
                  flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors
                  ${currentPage === id
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'hover:text-indigo-600 dark:hover:text-indigo-400'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right-side Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === 'dark'
              ? <Moon className="w-5 h-5 text-indigo-400" />
              : <Sun  className="w-5 h-5 text-yellow-500" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobile}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {mobileOpen
              ? <X className="w-6 h-6" />
              : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 backdrop-blur-lg">
          <ul className="flex flex-col space-y-2 py-4 px-4">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`
                    flex items-center space-x-2 w-full py-2 px-3 rounded-lg transition-colors
                    ${currentPage === id
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'hover:text-indigo-600 dark:hover:text-indigo-400'}
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
