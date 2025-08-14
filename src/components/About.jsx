'use client';
import React from 'react';
import { User } from 'lucide-react';
import { useState, useEffect } from "react";
import { FaReact, FaHtml5, FaGitAlt , FaJs, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";


const AboutSection = () => {
  const stats = [
    { number: '19', label: 'Repositories' },
    { number: '54', label: 'Contributions' },
    { number: '22', label: 'PRs Merged' }
  ];

  const skills = [
    { name: 'Frontend', percentage: 92 },
    { name: 'Backend', percentage: 65 },
    { name: 'AI/ML', percentage: 75 },
  ];

  const technologies = [
    'JavaScript', 'React', 'NodeJS',
    'TailwindCSS', 'Python', 'MySQL', 'Git'
  ];

  // Map tech names to icons
const techIcons = {

  JavaScript: <FaJs className="text-yellow-400" />,
  React: <FaReact className="text-cyan-400" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  NodeJS: <FaNodeJs className="text-green-500" />,
  Python: <FaPython className="text-cyan-500" />,
  Git: <FaGitAlt className="text-orange-600" />,
  MySQL: <SiMysql className="text-blue-500" />,
};

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className=" min-h-screen py-12 bg-white px-6">
    
    {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-700 text-center"> 
          <span className="border-b-4 border-green-400 p-2"> About Me</span>
        </h2>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20 mb-6">
          {/* Who I Am Section */}
          <div className=" bg-gray-900  backdrop-blur-sm border border-gray-700 rounded-lg p-8 ">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-green-400" size={24} />
              <h2 className="text-xl font-bold text-green-400">Who I Am</h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-20">
              {/* I'm a passionate developer with 5+ years of experience building web applications and 
              contributing to open source projects. I specialize in creating clean, efficient, and 
              maintainable code. When I'm not coding, you can find me exploring new technologies, 
              writing tech articles, or enjoying a fresh cup of coffee while debugging complex problems. */}
              I'm a passionate frontend developer focused on building fast, responsive, and dynamic web applications using React, Next.js, and Tailwind CSS. I enjoy solving real-world problems and continuously learning new technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* My Toolbox Section */}
          <div className="bg-gray-900 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-green-400 text-xl">&lt;/&gt;</span>
              <h2 className="text-xl font-bold text-green-400">Core Skillset</h2>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                       width: animate ? `${skill.percentage}%` : "0%",}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700/70 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600/70 transition-colors cursor-default"
                >
                {techIcons[tech] ?? null}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;