import React from 'react'
import Heading from './layouts/Heading'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'

const Clients = () => {
  return (
    <section className='mt-10'>
        <Heading title='Our Clients' subtitle='We have been working with some Fortune 500+ clients'/>
        <Container>
            <Flex className=' items-center justify-between mt-12'>
                <Img src={c1}/>
                <Img src={c2}/>
                <Img src={c3}/>
                <Img src={c4}/>
                <Img src={c5}/>
                <Img src={c6}/>
                <Img src={c7}/>
            </Flex>
        </Container>
    </section>
  )
}

export default Clients