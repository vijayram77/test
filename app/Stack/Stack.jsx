import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Stack = ({title , desc , url , bgColor}) => {
  return (
    <div className='  h-[80px] w-[300px] items-center flex gap-4 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all ease-out duration-500 bg-[#151515] px-2 relative py-4 overflow-hidden'>
      <motion.div initial={{x : "-100%"}} animate={{x: "100%"}} transition={{duration : 2 , repeat : Infinity , repeatDelay : 2 }} className='absolute w-full h-[200%] '>
        <div className=' bg-gradient-to-r from-[#151515] to-[#151515] via-zinc-800 blur-xl rotate-[30deg] rounded-2xl w-[40px] h-full'></div>
      </motion.div>
      <div style={{backgroundColor : bgColor == "#ffffff" ? bgColor : `${bgColor}4D`}} className='min-w-[60px] relative rounded-lg h-[60px] p-2'>
        <Image width={100} height={100} className='w-full h-full' src={url} alt="" />
      </div>
      <div className='h-full w-full flex flex-col px-2 justify-center relative items-start'>
        <h1 className='text-zinc-300 text-xl font-semibold capitalize font-[Jafont]'>{title}</h1>
        <div className="flex w-full items-center justify-between ">
        <div className='flex gap-1 items-center'>
        <h1 className='text-zinc-500 font-semibold capitalize font-[Jafont]'>{desc}</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
