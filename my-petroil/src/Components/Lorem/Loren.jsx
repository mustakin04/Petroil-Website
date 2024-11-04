// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../Container/Container'
import { IoIosArrowForward } from "react-icons/io";

const Loren = () => {
    return (
        <div className='pt-[110px] pb-[162px] bg-[#F0F0F0]'>
            <Container>
                <div className='flex justify-between'>
                    <div className='relative z-[1] bg-unsplash8 bg-current bg-no-repeat bg-cover pb-[56px] pt-[75px]
                      text-white w-[339px]'>
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black opacity-50 z-[-1]'></div>
                        <h1 className='font-poppins font-bold text-[24px] w-[249px] h-[180] mb-[52px] px-[45px]'>
                            lorem ipsum dolor
                            sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                        <a className='hover:bg-black hover:opacity-10 font-poppins font-semibold text-[16px] py-[10px] px-[23px] mx-[45px]' 
                        href="">Read more</a>
                    </div>
                    <div className='relative z-[1] bg-unsplash9 bg-current bg-no-repeat bg-cover pb-[56px] pt-[75px]
                      text-white w-[339px]'>
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black opacity-50 z-[-1]'></div>
                        <h1 className='font-poppins font-bold text-[24px] w-[249px] h-[180] mb-[52px] px-[45px]'>
                            lorem ipsum dolor
                            sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                        <a className='hover:bg-black hover:opacity-10 font-poppins font-semibold text-[16px] py-[10px] px-[23px] mx-[45px]' 
                        href="">Read more</a>
                    </div>
                    <div className='relative z-[1] bg-unsplash10 bg-current bg-no-repeat bg-cover pb-[56px] pt-[75px]
                      text-white w-[339px]'>
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black opacity-50 z-[-1]'></div>
                        <h1 className='font-poppins font-bold text-[24px] w-[249px] h-[180] mb-[52px] px-[45px]'>
                            lorem ipsum dolor
                            sit amet consectetur adipiscing elit sed do eiusmod.</h1>
                        <a className='hover:bg-black hover:opacity-10 hover:text-white 
                        font-poppins font-semibold text-[16px] py-[10px] px-[23px] mx-[45px]' 
                        href="">Read more</a>
                    </div>
                </div>
                <div className='flex justify-end items-center mt-[29px]'>
                    <h1 className=' font-poppins font-bold text-[16px] pr-[10px]'>MORE FROM THE BLLOG</h1>
                    <IoIosArrowForward />
                </div>
            </Container>
        </div>
    )
}

export default Loren