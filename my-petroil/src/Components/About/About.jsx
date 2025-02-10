import React from 'react'
import Container from '../Container/Container'

const About = () => {
    return (
        <div className='bg-[#F0F0F0] py-[60px] md:py-[136px]'>
           <Container>
            <div className='md:flex '>
                <div className='bg-[#F40404] md:w-[413px] md:h-[361px] text-white py-[100px]'>
                 <h1 className='font-poppins font-bold text-[36px]  md:w-[262px] m-auto text-center'>Learn 
                    more about our
                     company</h1>
                </div>
                <div className='bg-unsplash7 bg-center bg-no-repeat bg-cover py-[80px] md:pt-[156px] md:pb-[154px] w-full'>
                  <a  className='font-poppins md:ml-[282px] ml-[110px] p-3 md:font-semibold bg-white text-[#F40404] md:py-[14px] 
                  md:px-[30px]' 
                  href="">Learn More</a>
                </div>
            </div>
           </Container>
        </div>
    )
}

export default About