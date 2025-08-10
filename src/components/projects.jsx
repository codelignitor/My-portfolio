// 'use client';
// import Image from 'next/image';
// import { FaGithub} from 'react-icons/fa';
import project2 from "../images/hq720.jpg";
import project1 from "../images/netflic-project.jpg";
// import { useState } from 'react';
// import Link from 'next/link';

// const projects = [
//   {
//     title: 'Netflix Clone App',
//     description: 'A fully responsive Netflix homepage clone using Tailwind CSS. It includes responsive design, hover effects, and a mobile-friendly layout inspired by Netflix UI.',
//     url: project1,
//   },
//   {
//     title: 'E-Commerce Website',
//     description: 'A Full Stack 3-page shopping site with product listings and cart functionality, built in MERN Stack using Tailwind CSS, and local storage to manage cart items. Its fully responsive and dynamic web App',
//     url: project2,
//   },
// ];

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section id="projects" className="py-20 bg-gray-100 px-6 relative">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//       <span className="border border-b-4 border-gray-800 p-2"> My Projects </span></h2>
      
//       <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-10">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
//             <Image
//               src={project.url}
//               alt={project.title}
//               className="w-full h-56 object-cover rounded-md mb-7"
//             />
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//             <p className="text-gray-600 mb-4 line-clamp-2 ">{project.description}</p>
            
//             <div className=' flex flex-wrap items-center gap-6 mt-4'>
//               <Link
//                 href="https://github.com/codelignitor"
//                 target="_blank"
//                 className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-3 rounded-2xl shadow hover:bg-indigo-700 transition mt-18 gap-2 "> 
//                 <FaGithub className="w-6 h-6" />
//                 View Projects 
//               </Link>

//               <a
//                 onClick={() => openModal(project)}
//                 className="text-indigo-600 hover:underline border rounded-2xl px-7 py-3 mt-18"
//               >
//                 View Detail →
//             </a></div>
//           </div>
//         ))}
//       </div>

     
//       {selectedProject && (
//         <div className="fixed inset-0  bg-opacity-30  flex items-center justify-center z-40">
//           <div className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-3 text-gray-500 text-xl hover:text-black"
//             >
//               &times;
//             </button>
//             <h3 className="text-xl font-bold mb-2 text-gray-500">Description</h3>
//             <p className="text-gray-700">{selectedProject.description}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

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
      title: "E-Shop Platform",
      description: "A scalable e-commerce platform with React, Node.js, and MongoDB. ",
      image: "../images/hq720.jpg",
      gradient: "from-green-300 to-green-600",
      icon: <ShoppingCart className="w-6 h-6" />,
      tags: ["React.js", "Node.js", "MongoDB", 'Express'],
      github: "https://github.com/codelignitor",
      live: "#",
      category: "SE Project "
    },
    {
      id: 3,
      title: "Netflix Landing page Clone",
      description: "My personal portfolio showcasing my work, built with HTML, TailwindCSS, and Alpine.js.",
      image: "../images/maxresdefault.jpg",
      gradient: "from-gray-400 to-gray-600",
      icon: <Briefcase className="w-6 h-6" />,
      tags: ["Next.js", "TailwindCSS", ],
      github: "https://github.com/codelignitor",
      live: "#",
      category: "Personal"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white p-10 py-15">
      <div className="max-w-7xl  mx-auto">

        {/* Projects Title */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
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