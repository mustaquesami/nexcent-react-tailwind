import Container from './layouts/Container'
import React from 'react'
import Slider from "react-slick";
import banner from '../assets/banner.png'
import BannerSlider from './layouts/BannerSlider'

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    arrows: false
  };
  return (
    <section className='bg-[#F5F7FA]'>
        <Container>

        <Slider {...settings}>
          <div>
            <BannerSlider title1='Lessons and insights' title2='from 8 years' pera='Where to grow your business as a photographer: site or social media?' btnTitle='Register' src={banner}/>
          </div>
          <div>
            <BannerSlider title1='Lessons and insights' title2='from 8 years' pera='Where to grow your business as a photographer: site or social media?' btnTitle='Register' src={banner}/>
          </div>
        </Slider>
        </Container>
    </section>
  )
}

export default Banner