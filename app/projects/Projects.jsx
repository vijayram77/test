"use client"
import React from "react"
import Project from "./Project"
import roadmaps from '../assets/roadmaps.png'
import extracker from '../assets/extracker.png'
import Title from "../components/Title"
import nextjs from './assets/nextjs.svg'
import express from './assets/express.svg'
import nodejs from './assets/node-js.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import mongo from './assets/mongodb.svg'

const Projects = () => {
  const data = [
    {
      imageUrl: react,
      backgroundColor: "#61DAFB",
    },
    {
      imageUrl: nextjs,
      backgroundColor: "#ffffff",
    },
    {
      imageUrl: express,
      backgroundColor: "#ffffff",
    },
    {
      imageUrl: mongo,
      backgroundColor: "#47A248",
    },
    {
      imageUrl: tailwind,
      backgroundColor: "#38B2AC",
    },
  ]

  return (
    <div id='projects' className="min-h-screen z-[9999] relative w-full pt-[10vh] px-[5vw]">
      <Title title="Recent Projects" />
      <div className="flex gap-8 justify-center items-center xl:flex-row flex-col py-[5vh]">
        <Project
          src={roadmaps}
          title="career path"
          date="Oct 2024"
          desc=" - provides roadmaps and resources for different job roles along with Ai Resume Generator"
          href="/CareerPath"
          bgColor="#194A69"
          tools={[data[1],data[2],data[3],data[4]]}
        />
        <Project
          src={extracker}
          title="Ex Tracker"
          date="Jan 2024"
          desc=" - sets limits, budgets, and monitors financial health with expense tracking"
          href="/ExpenseTracker"
          bgColor="#3D2B74"
          tools={[data[0],data[4]]}
        />

      </div>
    </div>
  )
}

export default Projects
