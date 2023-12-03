import React from 'react'
import Heading from './layouts/Heading'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import ca1 from '../assets/ca1.png'
import ca2 from '../assets/ca2.png'
import ca3 from '../assets/ca3.png'
import CaringCard from './layouts/CaringCard';

const Caring = () => {
  return (
    <section className='mt-12 mb-[94px]'>
        <Heading title='Caring is the new marketing' subtitle="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"/>
        <Container>
            <Flex className='mt-4 justify-between'>
                <CaringCard src={ca1} title='Creating Streamlined Safeguarding Processes with OneRen' readmore='Readmore'/>
                <CaringCard src={ca2} title='What are your safeguarding responsibilities and how can you manage them?' readmore='Readmore'/>
                <CaringCard src={ca3} title='Revamping the Membership Model with Triathlon Australia' readmore='Readmore'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Caring