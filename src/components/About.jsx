import React from 'react';
import { User } from 'lucide-react';


const AboutSection = () => {
  const stats = [
    { number: '15', label: 'Repositories' },
    { number: '87', label: 'Commits' },
    { number: '4', label: 'PRs Merged' }
  ];

  const skills = [
    { name: 'Frontend', percentage: 92 },
    { name: 'Backend', percentage: 65 },
    { name: 'AI/ML', percentage: 75 },
  ];

  const technologies = [
    'JavaScript', 'React', 'Node.js',
    'TailwindCSS', 'Python', 'MySQL', 'Git'
  ];

  return (
    <section id="about" className=" min-h-screen py-12 bg-white px-6">
    
    {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 text-center"> 
          <span className="border-b-4 border-cyan-400 p-2"> About Me</span>
        </h2>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-20 mb-6">
          {/* Who I Am Section */}
          <div className=" bg-gray-900  backdrop-blur-sm border border-gray-700 rounded-lg p-8 ">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-cyan-400" size={24} />
              <h2 className="text-xl font-bold text-cyan-400">Who I Am</h2>
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
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* My Toolbox Section */}
          <div className="bg-gray-900 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-cyan-400 text-xl">&lt;/&gt;</span>
              <h2 className="text-xl font-bold text-cyan-400">Core Skillset</h2>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
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
                  className="px-4 py-2 bg-gray-700/70 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-600/70 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to top button
        <div className="fixed bottom-8 right-8">
          <button className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-green-400 hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;