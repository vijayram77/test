"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import ScrollDown from './ScrollDown'
import { RiMapPin2Line } from '@remixicon/react'

const HeroSection = () => {
    const ref = useRef();
    const greenRef = useRef();
    const availRef = useRef();
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".span", {
            y: 100,
            duration: 0.5,
            stagger: 0.1,
            delay: 1.5
        })
        tl.from(greenRef.current, {
            scale: 0,
            duration: 0.5,
            ease: "elastic.out"
        })
        tl.from(availRef.current, {
            opacity: 0,
            duration: 2,
            ease: "elastic.out"
        })
        tl.to(availRef.current, {
            rotate: 15,
            duration: 2,
            delay: 1,
            ease: "elastic.out"
        })
    })
    const handleEnter = () => {
        const data1 = [
            'Jammu & Kashmir, India',
            'Himachal Pradesh, India',
            'Punjab, India',
            'Uttarakhand, India',
            'Haryana, India',
            'Delhi, India',
            'Rajasthan, India',
            'Uttar Pradesh, India',
            'Bihar, India',
            'Sikkim, India',
            'West Bengal, India',
            'Jharkhand, India',
            'Odisha, India',
            'Chhattisgarh, India',
            'Madhya Pradesh, India',
            'Gujarat, India',
            'Maharashtra, India',
            'Goa, India',
            'Karnataka, India',
            'Kerala, India',
            'Tamil Nadu, India',
            'Andhra Pradesh, India',
          ];
          
        data1.forEach((char, index) => {
            setTimeout(() => {
                ref.current.textContent = char;
            }, index * 10);
        });
    }
    return (
        <div className='relative w-full z-[9999] pt-[45vh]
         flex flex-col justify-center items-start px-[5vw]'>
            <div className='absolute w-full bg-gradient-to-t h-full to-[#ffffff24] from-[#ffffff04] top-[-10%] rounded-b-full left-1/2 -translate-x-1/2 blur-3xl '></div>
            <div className='relative z-[9999] py-[5vh] flex items-center gap-1'>
                <div ref={greenRef} className='w-4 h-4 flex justify-center items-center relative'>
                    <div className='bg-green-900 absolute w-full h-full rounded-full blur-sm'></div>
                    <div className='bg-green-500 relative w-2 h-2 rounded-full'></div>
                </div>
                <h1 ref={availRef} className='text-zinc-300/80 bg-zinc-700/40 backdrop-blur px-4 py-1 rounded-full tracking-tighter origin-bottom-left'>Available for Work</h1>
            </div>
            <h1 className='relative text-[4.4vmax] leading-none font-semibold select-none'>
                {
                    "Hi, I'm Vijay Ram — I Build interactive fullstack Websites and Applications.".split(" ").map((item, index) => (
                        <div className='inline-block overflow-hidden ' key={index}><span className={`span [text-shadow:_0px_0px_30px_rgb(255_255_255_/_20%)] inline-block pr-[1.2vmax]  py-[0.7vmin] font-[Gilroy]  bg-gradient-to-b from-zinc-300 to-zinc-400 capitalize text-transparent bg-clip-text tracking-tighter `}>
                            {item === " " ? "\u00A0" : item}
                        </span></div>
                    ))
                }
            </h1>
            <div onMouseEnter={handleEnter} className='overflow-hidden relative cursor-pointer h-12 w-64'>
                <h1 className='text-xl span text-zinc-500 tracking-tighter flex gap-[1vmax] items-center native cursor-pointer'><RiMapPin2Line size={24} className='location transition-all ease-out duration-500' />  <span ref={ref}>Andhra Pradesh , India</span></h1>
            </div>
            <ScrollDown />
        </div>
    )
}

export default HeroSection
