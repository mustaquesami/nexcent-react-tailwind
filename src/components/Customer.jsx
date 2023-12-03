import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import customer from '../assets/customer.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import { FaArrowRight } from "react-icons/fa";

const Customer = () => {
  return (
    <section className='bg-[#F5F7FA] py-8'>
        <Container>
            <Flex className='justify-between gap-[78px]'>
                <Img src={customer} className='w-full'/>
                <div>
                    <p className='text-[#717171] text-base font-medium leading-6'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h3 className='text-[#4CAF4F] text-xl font-semibold mt-4'>Tim Smith</h3>
                    <p className='text-[#89939E] text-base font-normal mb-10'>British Dragon Boat Racing Association</p>
                    <Flex className=' items-center justify-between'>
                        <Img src={c1}/>
                        <Img src={c2}/>
                        <Img src={c3}/>
                        <Img src={c4}/>
                        <Img src={c5}/>
                        <Img src={c6}/>
                        <Flex className=' items-center gap-2'>
                            <h3 className='text-[#4CAF4F] text-xl font-semibold'>Meet all customers</h3>
                            <FaArrowRight  className='text-[#4CAF4F]'/>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Customer