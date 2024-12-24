"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Title = ({title}) => {
  const ref = useRef();
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
        gsap.from(title == "My Current Stack" ? ".stacktitle" : title == "Recent Projects" ?  ".projectstitle" : ".workedu", {
            y: 150,
            duration: 0.5,
            stagger: 0.2,
            rotate : 15,
            scrollTrigger : {
              trigger : ref.current,
              start : "top 90%"
            }
        })
  })

  return (
    <div ref={ref} className={` w-full mb-[5vh] select-none flex gap-[0.7vmax] overflow-hidden flex-wrap `}>
          
          {
            title.split(" ").map((item , index) => (
              <h1 key={index} className={`${title == "My Current Stack" ? "stacktitle" : title == "Recent Projects" ?  "projectstitle" : "workedu" } ${item == "Education" ? "font-[Gloock] italic from-zinc-400 to-zinc-400" : "font-[Gilroy] font-bold from-zinc-100 to-zinc-400"}  text-5xl md:text-7xl  pr-[0.4vmax] py-2 inline-block bg-gradient-to-b capitalize text-transparent bg-clip-text tracking-tighter whitespace-nowrap`}>{item}</h1>
            ))
          }
    </div>
  )
}

export default Title