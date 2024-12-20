"use client"
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Title = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".projectTitle h1",{
      y : 200,
      stagger : 0.2,
      scrollTrigger : {
        trigger : ".projectTitle",
        start : "top 70%"
      }
    })
  })
  return (
    <div className='overflow-hidden projectTitle w-full mb-[5vh] select-none px-[4vw] flex gap-[1vw] '>
          <h1 className='text-[7vmax] font-[Degular] font-bold pr-[1vw]  bg-gradient-to-b [text-shadow:_0px_0px_30px_rgb(255_255_255_/_40%)] from-zinc-300 to-zinc-400 capitalize text-transparent bg-clip-text  tracking-tighter whitespace-nowrap'>Recent</h1>
          <h1 className='text-[7vmax] font-[Degular] font-bold pr-[1vw] inline-block bg-gradient-to-b [text-shadow:_0px_0px_30px_rgb(255_255_255_/_40%)] from-zinc-300 to-zinc-400 capitalize text-transparent bg-clip-text  tracking-tighter whitespace-nowrap'>Projects</h1>
    </div>
  )
}

export default Title