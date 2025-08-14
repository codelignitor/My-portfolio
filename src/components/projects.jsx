import React from 'react';
import {ExternalLink, User, ShoppingCart, Briefcase} from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Chatbot App",
      description: "A E-commerce customer support Chatbot app with real-time collaboration, built using Next.js TailwindCSS, FAST-APIs , MongoDB, and Python",
      image: "../images/Chatbot pic.png",
      gradient: "from-green-00 to-blue-500",
      icon: <User className="w-6 h-6" />,
      tags: ["Next.js", "TailwindCSS", 'Python','MongoDB', "FASTAPI"],
      github: "https://github.com/codelignitor",
      live: "#",
      category: "Real-time Collaboration"
    },
    {
      id: 2,
      title: "Netflix Landing page Clone",
      description: "A responsive clone of the Netflix landing page, built with Next.js and styled using Tailwind CSS. This project was a learning exercise to solidify my skills in modern web development frameworks",
      image: "../images/maxresdefault.jpg",
      gradient: "from-gray-400 to-gray-600",
      icon: <Briefcase className="w-6 h-6" />,
      tags: ["Next.js", "TailwindCSS", ],
      github: "https://github.com/codelignitor",
      live: "#",
      category: "Personal"
    },
    {
      id: 3,
      title: "E-Shop Platform",
      description: "A scalable e-commerce platform with React, Node.js, and MongoDB. ",
      image: "../images/hq720.jpg",
      gradient: "from-green-300 to-green-600",
      icon: <ShoppingCart className="w-6 h-6" />,
      tags: ["React.js", "Node.js", "MongoDB", 'Express'],
      github: "https://github.com/codelignitor",
      live: "#",
      category: "SE Project "
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white p-10 py-15">
      <div className="max-w-7xl  mx-auto">

        {/* Projects Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Latest <span className="text-cyan-400 border-b-4 border-cyan-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work, showcasing innovative solutions and clean code. Click to explore details.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 items-stretch">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2 min-h-[450px]"
            >
              {/* Project Image with Gradient Overlay */}
              <div className="relative h-50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-75`}></div> */}
                
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/30 backdrop-blur-sm rounded px-2 py-1">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-cyan-400">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700/70 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors text-sm"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectsSection;