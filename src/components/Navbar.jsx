'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Enable smooth scrolling globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">
          <Link href="/"> 
            <i className="fas fa-code text-green-400 text-2xl led-glow"></i>Haris.
          </Link>
        </div>

        {/* Centered Menu for Desktop */}
        <div className="hidden md:flex flex-1 justify-end font-semibold space-x-8 gap-10 mr-20" >
          <Link href="#about" className="text-gray-700 hover:underline hover:text-indigo-600  transition">About</Link>
          <Link href="#projects" className="text-gray-700 hover:text-indigo-600 hover:underline transition">Projects</Link>
          <Link href="#experience" className="text-gray-700 hover:text-indigo-600 hover:underline transition">Experience</Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600 hover:underline transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pt-4 pb-6 space-y-4 flex-1 justify-center w-full">
          <Link href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">About</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">Projects</Link>
          <Link href="#skills" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">Skills</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-indigo-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
