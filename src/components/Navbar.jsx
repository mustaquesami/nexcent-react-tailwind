import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import logo from '../assets/Logo.png'
import List from './layouts/List'
import ListItem from './layouts/ListItem'
import Button from './layouts/Button'


const Navbar = () => {
  return (
    <nav className='bg-[#F5F7FA] py-8'>
        <Container>
            <Flex className=' items-center justify-between'>
                <Img src={logo}/>
                <List className='flex gap-[50px] text-[#18191F] text-base font-medium'>
                    <ListItem title='Home' />
                    <ListItem title='Service' />
                    <ListItem title='Feature' />
                    <ListItem title='Product' />
                    <ListItem title='Testimonial' />
                    <ListItem title='FAQ' />
                </List>
                <div>
                    <Button className=' text-[#4CAF4F] text-[14px] font-normal rounded-md' btnTitle='Login'/>
                    <Button className='px-5 py-3 bg-[#4CAF4F] text-white text-[14px] font-normal rounded-md ml-[14px]' btnTitle='Signup'/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar