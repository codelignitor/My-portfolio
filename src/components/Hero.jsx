
'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Code2, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    'Frontend Developer',
    'React Expert', 
    'UI/UX Engineer',
    'Full Stack Developer'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/40 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/40 opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/35 opacity-5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Welcome text */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
              <span className="text-cyan-400 font-mono text-lg">Hello, I'm</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Muhammad Haris
            </h1>
          </div>

          {/* Animated role */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-20 flex items-center justify-center mb-2">
              <span className="text-2xl text-gray-300">
                {' '}
                <span className="font-semibold text-cyan-400">
                  {roles[currentRole]}
                </span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              I craft exceptional digital experiences using modern technologies like React, Next.js, and TailwindCss. 
              Turning complex problems into beautiful, intuitive solutions.
            </p> */}
             <p className="text-gray-300 mb-10 font-serif">| CS Graduate FAST-NUCES | Software Engineer | @Neurovise
            </p>
          </div>

          {/* CTA buttons */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              
              <a href="#projects" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl">
                
                <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </a>
              <a href="#contact" className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 transform hover:scale-105">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center space-x-6 mb-16">
              <a href="#" className="group p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-400 transition-all duration-300 transform hover:scale-110">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" className="group p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-400 transition-all duration-300 transform hover:scale-110">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="group p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-400 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Simple floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 opacity-30 rounded-full animate-pulse"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${20 + (i * 7) % 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}