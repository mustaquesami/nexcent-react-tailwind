import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'
import Counter from './layouts/Counter'

const Achievement = () => {
  return (
    <section className='mb-12 py-16 bg-[#F5F7FA]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-[540px]'>
                    <h2 className='text-[#4D4D4D] text-3xl font-semibold mb-2 leading-[44px]'>Helping a local <span className='block text-[#4CAF4F]'>business reinvent itself</span></h2>
                    <p className='text-[#18191F] text-base font-normal'>We reached here with our hard work and dedication</p>
                </div>
                <Flex className='flex-wrap justify-around gap-8 w-[780px]'>
                    <Counter src={a1} end='2245341' duration='10' title='Members'/>
                    <Counter src={a2} end='46328' duration='10' title='Clubs'/>
                    <Counter src={a3} end='828867'  duration='10' title='Event Bookings'/>
                    <Counter src={a4} end='1926436' duration='10' title='Payments'/>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Achievement