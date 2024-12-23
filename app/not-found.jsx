"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import imposter from './assets/RedImposter.png'

const NotFound = () => {
  return (
    <div onMouseEnter={() => {}} className='w-full h-screen bg-zinc-950 flex flex-col justify-center items-center'>
        <audio autoPlay>
            <source src='/imposter.mp3' type='audio/mpeg' />
        </audio>
      <h1 className='font-bol tracking-tight font-[LED] text-zinc-300 uppercase text-[10vmax] inline-block'>Imposter</h1>
      <h1 className='font-bol tracking-tight font-[LED] text-red-600 uppercase text-[3vmax] inline-block'>Sus Alert: Developer Detected</h1>
        <Image src={imposter} width={200} height={200} alt='Imposter' />
    </div>
  )
}

export default NotFound
