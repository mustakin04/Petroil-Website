// eslint-disable-next-line no-unused-vars
import React from 'react'
import banner from "../../assets/banner.png"
import Container from './../Container/Container';
const Banner = () => {
  return (
    <div className='relative z-[1] bg-current bg-no-repeat bg-cover py-[60px] md:py-[257px] font-poppins text-white' 
    style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]">
      </div>
        <Container>
          <div>
           <h1 className='font-Poppins text-white text-[24px] font-bold md:text-[64px]  md:w-[842px] md:h-[186px] md:mt-[150px]'>
            We exist since 1975 on the oil and gas industry.</h1>
          </div>
          <div className='pt-[18px] md:pt-[40px]'>
          <a className="md:p-[13px] hover:bg-[#F40404]" href="#">LEARN MORE</a>
          </div>
        </Container>
      
    </div>
  )
} 
export default Banner