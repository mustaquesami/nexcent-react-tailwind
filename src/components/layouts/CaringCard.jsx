import React from 'react'
import Flex from './Flex'
import Img from './Img'
import { FaLongArrowAltRight } from "react-icons/fa";

const CaringCard = ({src,title,readmore}) => {
  return (
        <Flex className='flex-col relative'>
        <Img src={src}/>
            <div className='bg-[#F5F7FA] p-4 rounded-2xl absolute top-48 left-6'>
                <h3 className='w-[285px] text-[#717171] text-xl font-semibold text-center'>{title}</h3>
                <Flex className=' items-center gap-2 w-[285px] justify-center mt-4'>
                    <p><a href='' className='text-[#4CAF4F] text-xl font-semibold text-center'>{readmore}</a></p>
                    <FaLongArrowAltRight className='text-[#4CAF4F]' />
                </Flex>
            </div>
        </Flex>
  )
}

export default CaringCard