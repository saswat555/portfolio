import React, { useState } from 'react';
import { Send, User, Mail as MailIcon, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    alert(`Thanks, ${form.name}! I’ll get back to you soon.`);
    setForm({ name:'', email:'', message:'' });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg
                 transition-colors"
    >
      {[
        { name: 'name', type: 'text', placeholder: 'Your Name', Icon: User },
        { name: 'email', type: 'email', placeholder: 'Your Email', Icon: MailIcon }
      ].map(({ name, type, placeholder, Icon }) => (
        <div key={name} className="relative">
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            name={name}
            type={type}
            value={form[name]}
            onChange={onChange}
            placeholder={placeholder}
            required
            className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700
                       text-gray-900 dark:text-gray-100 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-400
                       transition-colors"
          />
        </div>
      ))}

      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          placeholder="Your Message"
          required
          className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700
                     text-gray-900 dark:text-gray-100 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-400
                     transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2
                   bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600
                   text-white py-3 rounded-full font-semibold shadow-lg
                   transform transition-all duration-200 hover:scale-105"
      >
        <Send className="w-5 h-5 animate-spin-slow-hover" />
        <span>Send Message</span>
      </button>

      {/* Extra animations */}
      <style>{`
        @keyframes bounce-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)} }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
        .animate-spin-slow-hover:hover { animation: spin 1s linear infinite; }
      `}</style>
    </form>
  );
}
