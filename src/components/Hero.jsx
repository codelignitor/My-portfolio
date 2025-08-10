import CodeSnippet from "./codesnippet";
import TerminalCard from "./Terminal";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { ArrowRightIcon } from '@heroicons/react/24/solid'; 
import { ArrowDownIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start justify-between bg-gray-200 p-10 ">
      <div className="flex-1 py-30 px-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Hi, I’m </h2>
      <h1 className="text-5xl font-bold text-gray-800 mb-2">Muhammad Haris </h1>
      <h3 className="text-2xl font-semibold text-purple-600 mb-2">Frontend Engineer </h3> 
      <p className="text-gray-600 mb-6 font-serif">| CS Graduate FAST-NUCES | Software Engineer | @Neurovise
     </p>

      <a
        href="#projects"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-full shadow hover:bg-indigo-700 transition"
      > <ArrowDownIcon className="w-5 h-5 " />
        View Projects 
      </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-6 py-4 mx-auto">
            <a href="https://github.com/codelignitor" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-7 h-7 text-gray-700  hover:text-black transition" />
            </a>
            <a href="https://www.linkedin.com/in/harismuhammad789" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-7 h-7 text-gray-700 hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com/harris7887" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-7 h-7 text-gray-700 hover:text-blue-500 transition" />
            </a>
          </div>
      </div>
      

      <div className="flex flex-col lg:flex-row gap-30 mr-8">
        {/* Terminal */}
          <div className="flex-1">
            <TerminalCard/>
          </div>

          <div className="flex-1">
            <CodeSnippet/>
          </div>
          <div className="right-0 absolute w-30 h-50 bg-purple-500/60 top-90 blur-3xl z-60"></div>
      </div>
      
    </section>
    

  );
}
