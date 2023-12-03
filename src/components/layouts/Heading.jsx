import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <div className='text-center'>
        <h2 className='text-[#4D4D4D] text-4xl font-semibold w-[542px] m-auto'>{title}</h2>
        <p className='text-[#717171] text-base font-normal w-[628px] m-auto mt-2'>{subtitle}</p>
    </div>
  )
}

export default Heading