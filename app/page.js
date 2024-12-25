"use client"
import React, { useRef, useEffect } from 'react'
import Landing from './components/Landing'
import Projects from './projects/Projects'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import Logo from './components/Logo'
import Socials from './components/Socials'
import { useGSAP } from '@gsap/react'
import gsap, { Power4 } from 'gsap'
import MyStack from './Stack/MyStack'
import Work_Education from './Work-Education/Work-Education'
import Loading from './components/Loading'

const page = () => {
  const lenisRef = useRef(null); 
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
  
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  
    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);
  
  const bgRef = useRef();
  const ref = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(ref.current, {
      opacity: 0,
      y: -200,
      duration: 1,
      ease: Power4
    })

  },[])
  const handleClick = (element, item) => {
    if(lenisRef.current){
      lenisRef.current.scrollTo(`#${item}`)
    }
    const elementWidth = element.getBoundingClientRect().width;
    const offsetLeft = element.offsetLeft;
    bgRef.current.style.left = `${offsetLeft}px`;
    bgRef.current.style.width = `${elementWidth}px`;
  };
  return (
    <div className='relative w-full overflow-hidden min-h-[100svh] bg-[#000000]'>

      {/* NavBar Start */}
      <div className='fixed z-[99999] left-1/2 -translate-x-1/2 w-full py-[5vh] px-[2vmax] flex justify-between items-center'>
        <Logo />
        <div ref={ref} className='w-fit relative hidden lg:flex justify-center items-center px-1 py-1 gap-2 backdrop-blur-sm border border-zinc-700 bg-zinc-900/40 rounded-full '>
          {
            ["home",  "stack","projects","info"].map((item, index) =>
              (
              <h6 onClick={(e) => handleClick(e.currentTarget, item)} className=' cursor-pointer relative text-zinc-300 z-[999] px-4 py-3 transition-all ease-in-out duration-400 uppercase text-sm font-semibold tracking-tighter rounded-full' key={index}>{item}</h6>
            )
            )
          }
          <div
            ref={bgRef} className={`bg-zinc-700/40 left-[4px] w-[70px] transition-all ease-out duration-500 h-[85%] y-1/2 absolute rounded-full `}>
            <div
              className={`bg-zinc-300 z-[9999] left-1/2 -translate-x-1/2 w-[20px] transition-all ease-out duration-500 h-[2px] top-[-7px] absolute rounded-full`}
            >
              <div className='absolute w-[150%] h-[250%] top-[-5px] bg-zinc-50 left-1/2 -translate-x-1/2 rounded-full blur-md'></div>
            </div>
          </div>

        </div>
        <Socials />
      </div>
      {/* NavBar End */}

      <Landing />
      <MyStack />
      <Projects />
      <Work_Education />
    </div>
  )
}

export default page
