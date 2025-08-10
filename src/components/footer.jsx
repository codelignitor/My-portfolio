
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-white-600">
        <p className="text-sm">&copy; {new Date().getFullYear()} Haris Muhammad. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://github.com/codelignitor" target="_blank" className="hover:text-indigo-600">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/harismuhammad789" target="_blank" className="hover:text-indigo-600">
            LinkedIn
          </Link>
          <Link href="http://gmail.com" className="hover:text-indigo-600">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
