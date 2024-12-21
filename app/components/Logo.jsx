"use client"
import React, { useEffect, useRef } from 'react'

const Logo = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const data1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V']
  const data2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  
  useEffect(() => {
    data1.forEach((char, index) => {
      setTimeout(() => {
        ref1.current.textContent = char;
      }, index * 50);
    });

    data2.forEach((char,index) => {
      setTimeout(() => {
        ref2.current.textContent = char
      }, 50*index)
    })
  })
  
  const animate = () => {
    
        data1.forEach((char, index) => {
          setTimeout(() => {
            ref1.current.textContent = char;
          }, index * 30);
        });
   
        data2.forEach((char,index) => {
          setTimeout(() => {
            ref2.current.textContent = char
          }, 30*index)
        })
  }
  return (
    <div className='lg:w-[280px] '>
      <h1 onMouseEnter={animate} className='font-semibold w-[50px] flex justify-center select-none font-[Gilroy] text-2xl cursor-pointer text-zinc-300 tracking-tighter transition-all ease-in duration-500 vijayram'>
        <span ref={ref1} className='inline-block'>V</span>
        <span ref={ref2} className='inline-block'>J</span>
      </h1>
    </div>
  )
}

export default Logo
