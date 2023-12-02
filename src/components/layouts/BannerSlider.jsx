import React from 'react'
import Button from './Button'
import Img from './Img'
import Flex from './Flex'

const BannerSlider = ({title1,title2,pera,btnTitle,src}) => {
  return (
    <Flex className='items-center justify-between py-[96px]'>
        <div>
            <h1 className='text-[#4D4D4D] text-[64px] font-semibold'>{title1}<span className='text-[#4CAF4F] block'> {title2}</span></h1>
            <p className='text-[#717171] text-[16px] font-normal mb-[32px]'>{pera}</p>
            <Button className='px-5 py-3 bg-[#4CAF4F] text-white text-[14px] font-normal rounded-md' btnTitle={btnTitle}/>
        </div>
        <Img src={src}/>
    </Flex>
  )
}

export default BannerSlider