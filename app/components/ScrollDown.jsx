"use client"
import { useGSAP } from '@gsap/react';
import { RiArrowDownLine } from '@remixicon/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

const ScrollDown = () => {
    const ref = useRef();
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(ref.current,{
            opacity : 0,
            delay : 4
        })
        tl.to(ref.current, {
            keyframes: [
                {y : 0},
                {y : 30},
                {y : 0}
            ],
            duration : 3,
            repeat : Infinity,
            ease: "power1.inOut"
        })
    })
  return (
    <div className='w-full flex justify-center items-center gap-3'>
      {/* <h1 className='p-[0.3vw] bg-gradient-to-b from-zinc-400 to-zinc-400 font-[Gilroy] text-lg font-bold  text-transparent bg-clip-text tracking-tighter '>Scroll Down</h1> */}
      <div ref={ref} className='p-4'>
      <RiArrowDownLine
            size={36}
            color="#ffffff"
            className="icon"
        />
      </div>
    </div>
  )
}

export default ScrollDown
