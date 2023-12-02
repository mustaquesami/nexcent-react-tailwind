import React from 'react'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Blog from './layouts/Blog'
import mobile from '../assets/mobile.png'

const Mobile = () => {
  return (
    <section className=' mb-12'>
        <Container>
            <Flex className='items-center'>
                <Blog src={mobile} title='How to design your site footer like we did' desc='Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.' btnTitle='Learn More'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Mobile