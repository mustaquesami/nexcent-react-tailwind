import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import footer from '../assets/footer.png'
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import List from './layouts/List'
import ListItem from './layouts/ListItem'

const Footer = () => {
  return (
    <footer className='bg-[#263238] py-16'>
        <Container>
            <Flex className='gap-[125px] justify-between'>
                <div className='w-[350px]'>
                    <Img src={footer}/>
                    <p className='mt-10 text-[#F5F7FA] text-sm font-normal'>Copyright © 2020 Nexcent ltd.</p>
                    <p className='mb-10 text-[#F5F7FA] text-sm font-normal'>All rights reserved</p>
                    <Flex className=' items-center gap-4'>
                        <FaInstagram className='text-white' />
                        <FaDribbble className='text-white' />
                        <FaTwitter className='text-white'/>
                        <CiYoutube className='text-white'/>
                    </Flex>
                </div>
                <Flex className='gap-[125px]'>
                    <List className='text-[#F5F7FA] text-[14px] font-normal'>
                        <h2 className='text-white text-sm font-semibold mb-6'>Company</h2>
                        <ListItem title='About us'/>
                        <ListItem title='Blog'/>
                        <ListItem title='Contact us'/>
                        <ListItem title='Pricing'/>
                        <ListItem title='Testimonials'/>
                    </List>
                    <List className='text-[#F5F7FA] text-[14px] font-normal'>
                        <h2 className='text-white text-sm font-semibold mb-6'>Support</h2>
                        <ListItem title='Help center'/>
                        <ListItem title='Terms of service'/>
                        <ListItem title='Legal'/>
                        <ListItem title='Privacy policy'/>
                        <ListItem title='Status'/>
                    </List>
                    <List className='text-[#F5F7FA] text-[14px] font-normal'>
                        <h2 className='text-white text-sm font-semibold mb-6'>Stay up to date</h2>
                        <input type='text' className='w-[255px] h-[40px] bg-white opacity-20 rounded-lg text-[#D9DBE1] text-[14px] font-normal' placeholder='Your email address'/>                    
                    </List>
                </Flex>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer