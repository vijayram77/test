import React from 'react'
import Logo from './Logo'
import NMiddle from './NMiddle'
import Socials from './Socials'

const Navbar = () => {
  return (
    <div className='fixed z-[999] left-1/2 -translate-x-1/2 w-full py-[5vh] px-[2vmax] flex justify-between items-center'>
      <Logo />
      <NMiddle />
      <Socials />
    </div>
  )
}

export default Navbar
