import React from 'react'

const BoxBackGround = () => {
  return (
    <div className="fixed z-[9999] w-screen h-screen flex flex-wrap overflow-hidden items-center justify-center">
      {Array.from({length: 1000}, (_, i) => (
        <div key={i} className="w-[55px] h-[55px] border border-zinc-700/20"></div>
      ))}
    </div>
  )
}

export default BoxBackGround
