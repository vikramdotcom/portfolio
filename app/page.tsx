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
    <div>
      <HeroSection/>
      <AboutMe/>
      <SkillsSection />
      <ProjectsSection/>
      <ClientReviews/>
      <WorkExperience/>
      <Education/>
      <Form/>
    </div>
  )
}

export default page