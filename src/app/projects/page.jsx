import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

import Image from 'next/image';
import { FaGithub} from 'react-icons/fa';
// import project2 from ".../images/";
// import project1 from "../images/netflic-project.jpg";

const projects = [
  {
    // thumbnail: project1,
    title: 'Netflix Clone',
    description: 'A responsive Netflix homepage clone using Tailwind CSS.',
    slug: 'netflix-clone',
  },
  {
    // thumbnail:project2,
    title: 'E-Commerce Website',
    description: 'An online store layout with product listings and cart features.',
    slug: 'e-commerce-site',
  },
  {
    thumbnail:'',
    title: 'Product Management Web App',
    description: 'A web application build in Next.js featuring a user login system.',
    slug: 'Api-Integration-app',
  },
];

export default function Page() {
  return (
    <>
    <Navbar/>
    <main className="py-20 px-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
          >
          {/* <Image
              src={project.thumbnail}
              alt='Netflix project img'
              className="w-full h-56 object-cover rounded-md mb-7"
           /> */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className=' flex flex-wrap items-center gap-6 mt-4'>
                <Link
                  href="https://github.com/codelignitor"
                  target="_blank"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-3 rounded-2xl shadow hover:bg-indigo-700 transition mt-18 gap-2 "> 
                  <FaGithub className="w-6 h-6" />
                  View Project
                </Link>
            <Link
              href={`/projects/${project.slug}`}
              className="text-indigo-600 hover:underline border rounded-2xl px-7 py-3 mt-18"
            >
              View Details →
            </Link></div>
          
        </div>
        ))}
      </div>
    </main><div>
        <Footer /></div></>
  );
}
