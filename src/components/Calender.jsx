import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import Blog from './layouts/Blog'
import calender from '../assets/calender.png'


const Calender = () => {
  return (
    <section className=' mb-12'>
        <Container>
            <Flex className='items-center'>
                <Blog src={calender} title='The unseen of spending three years at Pixelgrade' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.' btnTitle='Learn More'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Calender