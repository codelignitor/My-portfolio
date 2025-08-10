import React from 'react';
import { Award, Briefcase, Calendar } from 'lucide-react';

const CertificatesExperience = () => {
  const milestones = [
    {
      id: 1,
      year: "July 2025 - Present",
      title: "Frontend Developer Intern",
      description: "Built responsive web applications using React Framework (nextjs) and modern JavaScript frameworks for a startup company.",
      type: "experience",
      side: "left"
    },
    {
      id: 2,
      year: "Dec-2024 - 2025",
      title: "WordPress Developer",
      description: "Led development of enterprise web applications, mentored junior developers, and implemented DevOps practices.",
      type: "experience",
      side: "left"
    },
    {
      id: 3,
      year: "April 2024",
      title: "Data Analysis with Python By IBM",
      description: "Recognized as 'Top AI Innovator' at AI Summit 2022, delivering solutions to millions of users.",
      type: "certificate",
      side: "left"
    },
    {
      id: 4,
      year: "March-2024 to April -2024",
      title: "Python for Data Science By IBM",
      description: "Founded Futura, growing to a team of 50 and pioneering AI applications in healthcare and finance.",
      type: "certificate",
      side: "right"
    },
    
    {
      id: 5,
      year: "2019 - 2020",
      title: "Git with GitHub from scratch - Workshop",
      description: "Microsoft Learn Student Ambassadors and specialized in cloud infrastructure design and implementation.",
      type: "certificate",
      side: "right"
    },
    
  ];

  return (

    <section id='experience' className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 ">
            My <span className="text-cyan-700 border-b-4 border-cyan-900">Milestones</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            A journey through achievements, certifications, and professional growth over the years.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 h-full"></div>

          {/* Timeline Items */}
          <div className="flex flex-col space-y-5">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative flex items-center">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content Card */}
                <div className={`w-[48%] ${milestone.type === 'experience' ? 'ml-auto' : ''}`}>

                  <div className="group relative">
                    {/* Card */}
                    <div className="bg-slate-800 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                      {/* Year Badge */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                      </div>

                      {/* Title with Icon */}
                      <div className="flex items-center gap-3 mb-3">
                        {milestone.type === 'certificate' ? (
                          <Award className="w-5 h-5 text-cyan-400" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-cyan-400" />
                        )}
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {milestone.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Type Badge */}
                      <div className="mt-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          milestone.type === 'certificate' 
                            ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' 
                            : 'bg-blue-400/10 text-green-400 border border-blue-400/20'
                        }`}>
                          {milestone.type === 'certificate' ? 'Certificate' : 'Experience'}
                        </span>
                      </div>
                    </div>

                    {/* Connector Line to Timeline */}
                    <div className={`absolute top-8 ${
                      milestone.side === 'right' 
                        ? 'left-0 -translate-x-full' 
                        : 'right-0 translate-x-full'
                    } w-8 h-0.5 bg-gradient-to-r ${
                      milestone.side === 'right'
                        ? 'from-cyan-400 to-transparent'
                        : 'from-transparent to-cyan-400'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (for smaller screens) */}
        <div className="lg:hidden max-w-2xl mx-auto mt-16">
          <div className="relative">
            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 h-full"></div>
            
            {/* Mobile Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={`mobile-${milestone.id}`} className="relative flex items-start">
                  {/* Mobile Timeline Dot */}
                  <div className="absolute left-8 transform -translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900"></div>
                  </div>
                  
                  {/* Mobile Content */}
                  <div className="ml-16 w-full">
                    <div className="bg-slate-800 backdrop-blur-sm border border-slate-700 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-sm font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        {milestone.type === 'certificate' ? (
                          <Award className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <Briefcase className="w-4 h-4 text-cyan-400" />
                        )}
                        <h3 className="text-lg font-bold text-white">
                          {milestone.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {milestone.description}
                      </p>
                      
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        milestone.type === 'certificate' 
                          ? 'bg-amber-400/10 text-amber-400' 
                          : 'bg-blue-400/10 text-blue-400'
                      }`}>
                        {milestone.type === 'certificate' ? 'Certificate' : 'Experience'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to top button
        <div className="fixed bottom-8 right-8">
          <button className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-cyan-400 hover:bg-slate-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CertificatesExperience;