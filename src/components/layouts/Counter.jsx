import React from 'react'
import Img from './Img'
import Flex from './Flex'
import CountUp from 'react-countup'

const Counter = ({src,end,duration,title}) => {
  return (
    <Flex className='w-80'>
      <Img src={src}/>
        <div className='ml-4'>
          <h3 className=' font-inter text-[#4D4D4D] text-lg font-bold'><CountUp end={end} duration={duration} /></h3>
          <p className=' font-inter text-[#717171] text-base font-normal'>{title}</p>
        </div>
    </Flex>
  )
}

export default Counter