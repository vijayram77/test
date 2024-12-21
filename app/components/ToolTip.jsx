import React from 'react'

const ToolTip = ({ direction, value }) => {
    return (
        <div style={{ top : direction == "up" ? "-100%" : "100%"}} className='absolute pointer-events-none text-base left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 opacity-0 tooltip transition-all ease-out duration-300 tracking-tighter font-bold'>
            <div className={`absolute w-[20px] h-full left-1/2 border border-zinc-700  bg-zinc-800 rounded ${direction == "up" ? " bottom-[-8px] origin-bottom-left -rotate-45" : "top-[-8px] origin-top-left rotate-45"}`}></div>
            <span className='relative w-full h-full z-[999999999] bg-zinc-800 font-[Nunito] text-zinc-100 font-normal tracking-tight whitespace-nowrap text-base'>{value}</span>
            <div className='absolute left-0 top-0 z-[999999] w-full h-full bg-zinc-800 rounded-lg'></div>
        </div>
    )
}

export default ToolTip