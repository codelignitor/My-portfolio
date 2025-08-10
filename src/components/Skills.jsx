import React from "react";

const techs = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwindcss', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
        <span className="w-2 h-2 bg-indigo-600 rounded-sm"></span>
        Skills
      </h2>

      <div className="relative w-full overflow-hidden px-20 ">
        <div className="scroll-track">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center mx-6 min-w-[80px] group hover:scale-105 transition-transform"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-14 h-14 object-contain"
              />
              <span className="mt-2 text-sm text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
              <div className="w-6 h-1 mt-1 bg-teal-400 rounded-full opacity-80 group-hover:scale-x-110 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;