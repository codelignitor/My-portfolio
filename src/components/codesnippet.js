"use client";

import React from "react";
const CodeSnippet = () => {
  return (
    <div className="bg-gray-800 text-green-400 p-4 w-full h-auto rounded-md mt-4 text-xs font-mono shadow-md overflow-auto border border-gray-400 sm:p-6 sm:text-sm sm:mt-6 md:p-8 md:mt-8 md:shadow-lg lg:p-10 lg:w-[35rem] lg:h-[22rem] lg:mt-10 lg:text-sm lg:shadow-2xl">
      <pre className="font-code"> 
      {`
        import React from 'react';

        const DevWorkspace = () => {
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            const timer = setTimeout(() => {
            setIsLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        }, []);

        return (
            <div className="workspace">
            {isLoading ? <LoadingScreen /> : null}
            </div>
        );
        };`
        
        }</pre>
    </div>
  );
};

export default CodeSnippet;


// // Skills.jsx (example using React)

// // import React from 'react';

// // const Skills = () => {
// //   const skills = [
// //     { name: 'JavaScript', level: 'Expert' },
// //     { name: 'React', level: 'Advanced' },
// //     { name: 'HTML', level: 'Expert' },
// //     { name: 'CSS', level: 'Advanced' },
// //     { name: 'Node.js', level: 'Intermediate' },
// //     { name: 'Python', level: 'Beginner' },
// //   ];

// //   return (
// //     <section id="skills">
// //       <h2>Skills</h2>
// //       <ul>
// //         {skills.map((skill, index) => (
// //           <li key={index}>
// //             {skill.name} - {skill.level}
// //           </li>
// //         ))}
// //       </ul>
// //     </section>
// //   );
// // };

// // export default Skills;



// export default function SkillsSnippet() {
//   return (
//     <div className="bg-[#0d1117] p-4 rounded-xl shadow-lg text-white w-full max-w-lg font-mono">
//       {/* Top bar */}
//       <div className="flex items-center space-x-2 mb-4">
//         <div className="w-3 h-3 rounded-full bg-red-500"></div>
//         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//         <div className="w-3 h-3 rounded-full bg-green-500"></div>
//         <span className="ml-3 text-gray-400 text-sm">skills.js</span>
//       </div>

//       {/* Code content */}
//       <pre className="text-sm leading-5">
//         <code>
//           <span className="text-orange-400">const</span>{" "}
//           <span className="text-yellow-300">Skillset</span> {"= {"}
//           {"\n"}  <span className="text-green-400">name</span>:{" "}
//           <span className="text-pink-400">'Muhammad Haris '</span>,
//           {"\n"}  <span className="text-green-400">role</span>:{" "}
//           <span className="text-pink-400">'Full Stack Developer'</span>,
//           {/* {"\n"}  <span className="text-green-400">experience</span>:{" "}
//           <span className="text-blue-400">3</span>, */}
//           {"\n"}  <span className="text-green-400">languages</span>: [
//           {"\n"}    'JavaScript', 'Python', 'C++',
//           {"\n"}    'HTML', 'CSS', 'MySQL' 'MongoDB',
//           {"\n"}  ],
//           {"\n"}  <span className="text-green-400">frameworks</span>: [
//           {"\n"}    'React', 'Next.js', 'Node.js','Tailwind CSS',
//           {"\n"}  ],
//           {"\n"}  <span className="text-green-400">tools</span>: [
//           {"\n"}    'Git', 'GitHub', 'VS Code' 'Intellj',
//           {"\n"}  ],
//           {"\n"}  <span className="text-green-400">Expertise</span>: [
//           {"\n"}    'Frontend Development', 'Backend Development',
//           {"\n"}    'API Integration', 'AI/ML'
//           {"\n"}  ]
//           {"\n"}{"};"}
//         </code>
//       </pre>
//     </div>
//   );
// }
