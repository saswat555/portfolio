// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => { e.preventDefault(); alert(`Thanks, ${form.name}!`); setForm({ name:'', email:'', message:'' }); };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name"    value={form.name}    onChange={onChange} placeholder="Your Name"    className="w-full p-3 bg-gray-800 rounded text-white" required />
      <input name="email"   type="email"       value={form.email}   onChange={onChange} placeholder="Your Email"   className="w-full p-3 bg-gray-800 rounded text-white" required />
      <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Message" className="w-full p-3 bg-gray-800 rounded text-white" required />
      <button type="submit" className="inline-flex items-center px-6 py-3 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-600 transition">
        <Send className="w-4 h-4 mr-1" /> Send
      </button>
    </form>
  );
}