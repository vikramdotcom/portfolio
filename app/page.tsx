'use client'
import React from 'react'
import HeroSection from '@/components/hero'
import ProjectsSection from '@/components/projects'
import AboutMe from '@/components/aboutMe'
import Form from '@/components/contactMe'
import SkillsSection from '@/components/skills'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <ProjectsSection/>

      <SkillsSection />
      <AboutMe/>
      <Form/>
    </div>
  )
}

export default page