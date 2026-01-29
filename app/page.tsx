'use client'
import React from 'react'
import HeroSection from '@/components/hero'
import ProjectsSection from '@/components/projects'
import AboutMe from '@/components/aboutMe'
import Form from '@/components/contactMe'
import SkillsSection from '@/components/skills'
import WorkExperience from '@/components/experience'
import Education from '@/components/education'
import ClientReviews from '@/components/reviews'

const page = () => {
  return (
    <div className="scroll-smooth">
      <section id="home">
        <HeroSection/>
      </section>

      <section id="about">
        <AboutMe/>
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection/>
      </section>

      <section id="experience">
        <ClientReviews/>
        <WorkExperience/>
        <Education/>
      </section>

      <section id="contact">
        <Form/>
      </section>
    </div>
  )
}

export default page