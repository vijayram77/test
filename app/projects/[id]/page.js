import React from 'react'
import Main from '../Main'

const page = async ({params}) => {
  const id = (await params).id
  return(
    <div className='bg-black'>
    <Main id={id} />
    </div>

  )
}

export default page
