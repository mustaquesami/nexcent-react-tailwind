import React from 'react'
import Heading from './layouts/Heading'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Card from './layouts/Card'
import co1 from '../assets/co1.png'
import co2 from '../assets/co2.png'
import co3 from '../assets/co3.png'

const Community = () => {
  return (
    <section className='mt-[75px]'>
        <Heading title='Manage your entire community in a single system' subtitle='Who is Nextcent suitable for?'/>
        <Container>
            <Flex className='items-center justify-between'>
                <Card src={co1} cTitle='Membership Organisations' cPera='Our membership management software provides full automation of membership renewals and payments'/>
                <Card src={co2} cTitle='National Associations' cPera='Our membership management software provides full automation of membership renewals and payments'/>
                <Card src={co3} cTitle='Clubs And Groups' cPera='Our membership management software provides full automation of membership renewals and payments'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Community