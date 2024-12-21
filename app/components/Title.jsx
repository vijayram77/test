"use client"
import React, { useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Title = ({ title }) => {
  const ref = useRef()
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(ref.current, {
      x: -600,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%"
      }
    })
  })
  return (
    <div ref={ref} className='overflow-hidden projectTitle w-full select-none flex gap-[1vw] py-[2vh] '>
        <h1
          className="text-5xl md:text-7xl font-[Degular] font-bold p-[0.3vw] text-zinc-300 tracking-tight whitespace-nowrap"
        >
          {title}
        </h1>
    </div>
  )
}

export default Title