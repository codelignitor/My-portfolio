import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import React from 'react'
import Link from 'next/link'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import CertificatesExperience from '@/components/Milestones'

const Page = () => {
  return (
    <div>
       <main>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        
          <section className="text-center bg-slate-900">
              <Link href="/projects">
                <button className="bg-indigo-600 text-white px-6 py-4 md:mb-15 mb-20 rounded-full hover:bg-indigo-700 transition">
                  View All Projects
                </button>
              </Link>
          </section>
        
        {/* <Skills/> */}
        <CertificatesExperience/>
        <Contact/>
        <Footer/>
       </main>
    </div>
  )
}

export default Page
