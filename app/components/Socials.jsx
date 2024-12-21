"use client"
import { useGSAP } from '@gsap/react'
import { RiArrowRightUpLine, RiAtLine, RiGithubLine, RiLinkedinLine } from '@remixicon/react'
import gsap from 'gsap'
import React from 'react'
import ToolTip from './ToolTip'

const Socials = () => {
  useGSAP(() => {
    gsap.to('.social', {
      top: "0vh",
      duration: 1.5,
      delay: 1,
      stagger: 0.1,
      ease: "none"
    })
  })
  return (
    <div className='parent flex gap-2 items-center justify-center lg:w-[280px]'>
      <a href='mailto:vijayyathagiri@gmail.com' className='social tooltipParent social-first social-first relative top-[-25vh] p-2 inline-block cursor-pointer transition-all ease-in duration-400 hover:scale-105 bg-zinc-700 rounded-full'>
        <RiAtLine
          size={24}
          color="#ffffff"
          className="icon"
        />
        <ToolTip value="Email" direction="down" />
      </a>
      <a href='https://www.linkedin.com/in/vijay-ram-yathagiri-10657b282/' className='social tooltipParent social-first xl:block hidden relative top-[-25vh] p-2 cursor-pointer transition-all ease-in duration-400 hover:scale-105 bg-blue-600 rounded-full'>
        <RiLinkedinLine
          size={24}
          color="#ffffff"
          className="icon"
        />
        <ToolTip value="LinkedIn" direction="down" />

      </a>
      <a href='https://github.com/vijayram77' className='social tooltipParent social-first xl:block hidden relative top-[-25vh] p-2 cursor-pointer transition-all ease-in duration-400 hover:scale-105 bg-zinc-700 rounded-full'>
        <RiGithubLine
          size={24}
          color="#ffffff"
          className="icon"
        />
        <ToolTip value="Github" direction="down" />


      </a>
      <a href="" className='resume tooltipParent relative top-[-25vh] social flex justify-center items-center gap-2 py-2 px-4 rounded-full transition-all ease-out duration-300 hover:bg-zinc-900/40 backdrop-blur-md'>
        <span className='text-zinc-300 font-[Gilroy] tracking-tighter text-xl'>Resume</span>
        <RiArrowRightUpLine
          size={24}
          color="#ffffffc3"
          className="arrow-icon transition-all ease-out duration-300"
        />

      </a>
    </div>
  )
}

export default Socials
