
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-white-600">
        <p className="text-sm">&copy; {new Date().getFullYear()} Haris Muhammad. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0 ">
          <Link href="https://github.com/codelignitor" target="_blank" className="hover:text-indigo-600">
            <FaGithub className="w-6 h-6 text-gray-400  hover:text-white transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/harismuhammad789" target="_blank" className="hover:text-indigo-600">
            <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-white transition" />
            
          </Link>
          <Link href="http://haris.mohammad7887@gmail.com" className="hover:text-indigo-600">
            <Mail className="w-6 h-6 text-gray-400 hover:text-white transition" />
           
          </Link>
        </div>
      </div>
    </footer>
  );
}
