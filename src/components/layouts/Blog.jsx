import React from 'react'
import Img from '../layouts/Img'
import Button from '../layouts/Button'

const Blog = ({src,title,desc,btnTitle}) => {
  return (
    <>
            <Img src={src} className='w-full'/>
            <div>
                <h2 className='w-[520px] text-[#4D4D4D] text-3xl font-semibold leading-[44px]'>{title}</h2>
                <p className=' text-[#717171] text-[14px] font-normal leading-[20px] mt-4 mb-8'>{desc}</p>
                <Button btnTitle={btnTitle} className='px-5 py-3 bg-[#4CAF4F] text-white text-[14px] font-normal rounded-md'/>
            </div>
    </>
  )
}

export default Blog