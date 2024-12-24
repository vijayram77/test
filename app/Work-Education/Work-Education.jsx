import React from 'react'
import Title from '../components/Title'
import SwitchableTabs from './SwitchableTabs'

const Work_Education = () => {
  return (
    <div id='info' className='w-full relative z-[9999] min-h-screen px-[5vw] pt-[15vh]'>
      <Title title="Work & Education" />
      <SwitchableTabs />
    </div>
  )
}

export default Work_Education
