"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Loading = () => {
    const ref = useRef();
    const textRef = useRef();
    const parent = useRef();
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.to(ref.current, {
            y: '-2000%',
            duration: 2,
            ease: 'power4.out',
            delay: 0.5
        })
            .to(ref.current, {
                y: '-6900%',
                duration: 2,
                ease: 'power4.out'
            })
            .to(ref.current, {
                y: '-10000%',
                duration: 2,
                ease: 'power4.out'
            })
            .to(".bgBlackBox", {
                y: '-100%',
                duration: 0.7,
                stagger: 0.3,
                ease: 'power4.out'
            }, "animate")
            .to(textRef.current, {
                opacity: 0,
                duration: 1,
                ease: 'power4.out'
            }, "animate")
            .to(parent.current,{
                top: "-100%",
            })
    })
    return (
        <div ref={parent} className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen  z-[9999999] '>
            <div className='absolute w-full h-full flex '>
                {
                    Array(5).fill(0).map((_, index) => (
                        <div key={index} className='w-[20%] h-full bg-[#121212] bgBlackBox '>

                        </div>
                    ))
                }
            </div>
            <div ref={textRef}>
                <h1 className='font-bol relative tracking-tight leading-none font-[LED] text-zinc-400 uppercase text-[7vmax] inline-block'>Loading</h1>
                <div className='w-[20vmax] h-[10vmax] overflow-hidden flex items-center justify-center mx-auto gap-[0.5vmax] '>
                    <div ref={ref} className='w-2/3  h-full flex-col flex justify-start '>
                        {
                            Array(101).fill(0).map((_, index) => (
                                <div key={index} className='font-bol w-full min-h-[10vmax] flex justify-end items-center'>
                                    <h1 className='tracking-tight leading-none  font-[LED] text-zinc-50 uppercase text-[7vmax] inline-block'>{index}</h1>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' w-1/3 relative flex justify-center items-center h-full'>

                        <h1 className='tracking-tight leading-none  font-[LED] text-zinc-50 uppercase text-[7vmax] inline-block'>%</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
