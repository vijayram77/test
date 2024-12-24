"use client"
import React from 'react'
import { motion } from 'framer-motion';

const ProjectsTitle = ({title}) => {

  return (
    <div className=' w-full mb-[5vh] select-none flex gap-[0.5vmax] '>
          
          {
            title.split(" ").map((item , index) => (
              <motion.h1 key={index} initial={{y : 100 , opacity : 0}} whileInView={{y : 0 , opacity : 1}} viewport={{once : true }} transition={{ duration : 0.5 , delay : index*0.2 }} className='text-5xl md:text-7xl font-[Gilroy] pr-[0.2vmax] py-2 font-bold inline-block bg-gradient-to-b from-zinc-300 to-zinc-400 capitalize text-transparent bg-clip-text tracking-tighter whitespace-nowrap'>{item}</motion.h1>
            ))
          }
    </div>
  )
}

export default ProjectsTitle