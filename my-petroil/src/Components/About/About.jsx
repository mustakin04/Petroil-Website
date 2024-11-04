import React from 'react'
import Container from '../Container/Container'

const About = () => {
    return (
        <div className='bg-[#F0F0F0] py-[136px]'>
           <Container>
            <div className='flex '>
                <div className='bg-[#F40404] w-[413px] h-[361px] text-white py-[100px]'>
                 <h1 className='font-poppins font-bold text-[36px] w-[262px] m-auto text-center'>Learn 
                    more about our
                     company</h1>
                </div>
                <div className='bg-unsplash7 bg-center bg-no-repeat bg-cover pt-[156px] pb-[154px] w-full'>
                  <a  className='font-poppins ml-[282px] font-semibold bg-white text-[#F40404] py-[14px] 
                  px-[30px]' 
                  href="">Learn More</a>
                </div>
            </div>
           </Container>
        </div>
    )
}

export default About