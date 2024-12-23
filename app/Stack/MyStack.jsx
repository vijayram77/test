import React from 'react'
import Stack from './Stack'
import nextjs from './assets/nextjs.svg'
import express from './assets/express.svg'
import git from './assets/git.svg'
import java from './assets/java.svg'
import nodejs from './assets/node-js.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import mongo from './assets/mongodb.svg'
import Title from '../components/Title'
// import typescript from './assets/typescript.svg'

const MyStack = () => {
  return (
    <div id='stack' className='px-[5vw] py-[15vh] flex flex-col justify-center items-start'>
      <Title title="My Current Stack" />
      <p className='text-xl py-3 text-zinc-500 tracking-tighter'>I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.</p>
      <div className='w-full flex justify-center gap-6 pt-6 items-center flex-wrap'>
        {
            [
                {
                  title: "React JS",
                  description: "Javascript Library",
                  imageUrl: react,
                  backgroundColor: "#61DAFB",
                },
                {
                  title: "Next JS",
                  description: "React Framework",
                  imageUrl: nextjs,
                  backgroundColor: "#ffffff",
                },
                {
                  title: "Node JS",
                  description: "JavaScript Runtime",
                  imageUrl: nodejs,
                  backgroundColor: "#339933",
                },
                {
                  title: "Express",
                  description: "Node JS Framework",
                  imageUrl: express,
                  backgroundColor: "#ffffff",
                },
                {
                  title: "MongoDB",
                  description: "NoSQL Database",
                  imageUrl: mongo,
                  backgroundColor: "#47A248",
                },
                {
                  title: "Java",
                  description: "Programming Language",
                  imageUrl: java,
                  backgroundColor: "#5382A1",
                },
                {
                  title: "Tailwind CSS",
                  description: "CSS Framework",
                  imageUrl: tailwind,
                  backgroundColor: "#38B2AC",
                },
                // {
                //   title: "TypeScript",
                //   description: "Typed JavaScript",
                //   imageUrl: typescript,
                //   backgroundColor: "#3178C6",
                // },
                {
                  title: "Git",
                  description: "Version Control",
                  imageUrl: git,
                  backgroundColor: "#F05032",
                },
              ].map((item,index)=>(
                <Stack key={index} title={item.title} desc={item.description} url={item.imageUrl} bgColor={item.backgroundColor} />
              ))
              
        }
      </div>
    </div>
  )
}

export default MyStack
