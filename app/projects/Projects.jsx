"use client"
import React from "react"
import Project from "./Project"
import roadmaps from '../assets/roadmaps.png'
import extracker from '../assets/extracker.png'
import Title from "./Title"

const Projects = () => {

  return (
    <div id='projects' className="min-h-screen z-[9999] relative w-full py-[10vh]">
      <Title />
      <div className="flex flex-col gap-6 justify-center items-center">
        <Project
          src={roadmaps}
          title="career path"
          date="Oct 2024"
          desc=" - provides roadmaps and resources for different job roles along with Ai Resume Generator"
          href="/CareerPath"
          bgColor="#194A69"
        />
        <Project
          src={extracker}
          title="Ex Tracker"
          date="Jan 2024"
          desc=" - sets limits, budgets, and monitors financial health with expense tracking"
          href="/ExpenseTracker"
          bgColor="#3D2B74"
        />

      </div>
    </div>
  )
}

export default Projects
