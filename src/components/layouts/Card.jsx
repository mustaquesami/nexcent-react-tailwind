import React from 'react'
import Img from './Img'

const Card = ({src,cTitle,cPera}) => {
  return (
    <div className='py-6 px-8'>
        <Img src={src} imgClassName='block m-auto'/>
        <h3 className='w-[299px] text-center text-[#4D4D4D] text-lg font-bold mt-6 mb-2'>{cTitle}</h3>
        <p className='w-[251px] m-auto text-center text-[14px] font-normal'>{cPera}</p>
    </div>
  )
}

export default Card