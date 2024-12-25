"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Section = ({ Period, Title, subtitle, remarks }) => {
  return (
    <div className='relative overflow-hidden '>
      <motion.div initial={{ x: "-100%" }} animate={{ x: "150%" }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2 }} className='absolute w-full h-[200%] '>
        <div className=' bg-gradient-to-r from-[#151515] to-[#151515] via-zinc-800 blur-xl rotate-[30deg] rounded-2xl w-[40px] h-full'></div>
      </motion.div>
      <div className="flex relative items-center border-b pb-2 border-zinc-700">

        <div>
          <h4 className="font-semibold font-[Gilroy] text-sm text-zinc-400/80">{Period}</h4>
          <h3 className=" text-xl font-[Degular] font-semibold text-zinc-50 ">
            {Title}
          </h3>
          <p className="text-base md:text-base text-zinc-400 font-semibold font-[Gilroy]">
            {subtitle}
          </p>
          {
            remarks &&
            <p className="text-base md:text-base font-semibold text-zinc-300/90 font-[Gilroy]">
              {remarks}
            </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Section
