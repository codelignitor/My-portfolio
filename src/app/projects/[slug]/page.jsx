'use client';
import { notFound } from 'next/navigation';

const projects = {
  'netflix-clone': {
    title: 'Netflix Clone',
    content: 'This is a Netflix homepage clone made using Tailwind CSS with responsiveness.',
  },
  'e-commerce-site': {
    title: 'E-Commerce Website',
    content: 'Built a shopping interface using React hooks, context API and Tailwind CSS.',
  },
    'Api-Integration-app':{
    title: 'API integration',
    content: 'A web application build in Next.js featuring a user login system and a complete CRUD (Create, Read, Update, Delete) interface for managing products.',
  },
};

export default function ProjectDetail({ params }) {
  const project = projects[params.slug];

  if (!project) return notFound();

  return (
    <main className="py-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg">{project.content}</p>
    </main>
  );
}
