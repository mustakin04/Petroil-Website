// eslint-disable-next-line no-unused-vars
import React from 'react'
import banner from "../../assets/banner.png"
import Container from './../Container/Container';
const Banner = () => {
  return (
    <div className='relative bg-current bg-no-repeat bg-cover py-[257px] font-poppins text-white' 
    style={{ backgroundImage: `url(${banner})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <Container>
          <div>
           <h1 className='font-Poppins text-white font-bold text-[64px] w-[842px] h-[186px] mt-[150px]'>
            We exist since 1975 on the oil and gas industry.</h1>
          </div>
          <div className='pt-[40px]'>
          <a className="p-[13px] hover:bg-[#F40404]" href="#">LEARN MORE</a>
          </div>
        </Container>
      </div>
    </div>
  )
} 
export default Banner