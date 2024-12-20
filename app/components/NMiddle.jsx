"use client"
import { useGSAP } from '@gsap/react'
import gsap, { Power4 } from 'gsap'
import React, { useRef, useState } from 'react'

const NMiddle = () => {
  const bgRef = useRef();
  const ref = useRef();
  const [index, setIndex] = useState(2)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(ref.current, {
      opacity: 0,
      y: -200,
      duration: 1,
      ease: Power4
    })

  })
  const handleClick = (element,item) => {
    const elementWidth = element.getBoundingClientRect().width;
    const offsetLeft = element.offsetLeft;
    bgRef.current.style.left = `${offsetLeft}px`;
    bgRef.current.style.width = `${elementWidth }px`;
  };
  return (
    <div ref={ref} className='w-fit shadow shadow-zinc-800 relative hidden lg:flex justify-center items-center px-1 py-1 gap-2 bg-transparent backdrop-blur-sm border border-zinc-700 rounded-full '>
      {
        ["home", "projects", "stack", "experience", "info"].map((item, index) =>
        (
          <h6 onClick={(e) => handleClick(e.currentTarget,item)} className=' cursor-pointer relative text-zinc-300 z-[999] px-4 py-3 transition-all ease-in-out duration-400 uppercase text-sm font-semibold tracking-tighter rounded-full' key={index}>{item}</h6>
        )
        )
      }
      <div
        ref={bgRef} className={`bg-zinc-700/40 left-[4px] w-[70px] transition-all ease-out duration-500 h-[85%] y-1/2 absolute rounded-full `}>
        <div
          className={`bg-zinc-300 z-[9999] left-1/2 -translate-x-1/2 w-[20px] transition-all ease-out duration-500 h-[2px] top-[-7px] absolute rounded-full`}
        >
          <div className='absolute w-[150%] h-[250%] top-[-5px] bg-zinc-300 left-1/2 -translate-x-1/2 rounded-full blur-md'></div>
        </div>
      </div>

    </div>
  )
}

export default NMiddle
