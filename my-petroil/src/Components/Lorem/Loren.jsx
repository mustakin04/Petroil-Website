// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../Container/Container'
import { IoIosArrowForward } from "react-icons/io";
import lorm1 from "../../assets/unsplash8.png"
import lorm2 from "../../assets/unsplash9.png"
import lorm3 from "../../assets/unsplash10.png"

const Loren = () => {
    return (
        <div className='md:pt-[110px] md:pb-[162px] bg-[#F0F0F0]'>
            <Container>
                <div className='md:flex justify-between'>
                    <div className='relative z-[1]  bg-center bg-no-repeat bg-cover py-[60px] md:pb-[56px] md:pt-[75px]
                      text-white md:w-[339px]'
                       style={{ backgroundImage: `url(${lorm1})` }}
                      >
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black opacity-50 z-[-1]'></div>
                        <h1 className='font-poppins font-bold px-[7px] mb-[17px] md:text-[24px] md:w-[249px] 
                        md:h-[180] md:mb-[52px] 
                        md:px-[45px]'>
                            lorem ipsum dolor
                            sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                        <a className='hover:bg-black hover:opacity-10 font-poppins font-semibold text-[16px] 
                        py-[10px] px-[23px] mx-[45px]'
                            href="">Read more</a>
                    </div>
                    <div className='relative z-[1]  bg-center bg-no-repeat bg-cover py-[60px] md:pb-[56px] 
                      md:pt-[75px] text-white md:w-[339px]'
                       style={{ backgroundImage: `url(${lorm2})` }}>
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black opacity-50 z-[-1]'></div>
                        <h1 className='font-poppins font-bold px-[7px] mb-[17px] md:text-[24px] md:w-[249px]
                         md:h-[180] md:mb-[52px] md:px-[45px]'>
                            lorem ipsum dolor
                            sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                        <a className='hover:bg-black hover:opacity-10 font-poppins font-semibold text-[16px] 
                        py-[10px] px-[23px] mx-[45px]'
                            href="">Read more</a>
                    </div>
                    <div className='relative z-[1] bg-current py-[60px] bg-no-repeat bg-cover md:pb-[56px] md:pt-[75px]
                      text-white md:w-[339px]'
                       style={{ backgroundImage: `url(${lorm3})` }}>
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black opacity-50 z-[-1]'></div>
                        <h1 className='font-poppins font-bold px-[7px] mb-[17px] md:text-[24px] md:w-[249px] md:h-[180] md:mb-[52px] 
                        md:px-[45px]'>
                            lorem ipsum dolor
                            sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                        <a className='hover:bg-black hover:opacity-10 hover:text-white 
                        font-poppins font-semibold text-[16px] py-[10px] px-[23px] mx-[45px]'
                            href="">Read more</a>
                    </div>
                </div>
                <div className='flex justify-end items-center md:mt-[29px]'>
                    <h1 className=' font-poppins md:font-bold md:text-[16px] pr-[10px]'>MORE FROM THE BLLOG</h1>
                    <IoIosArrowForward />
                </div>
            </Container>
        </div>
    )
}

export default Loren