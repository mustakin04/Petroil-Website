import React from 'react'
import unsplash6 from "../../assets/unsplash6.png"
const Supply = () => {
  return (
    <div className='md:flex'>
      <div className='relative z-[1] bg-supply py-[60px] px-[7px] my-[10px]  md:pl-[116px] bg-current bg-no-repeat bg-cover md:pt-[147px] md:pb-[139px]
       md:w-[50%] text-white'>
        <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 z-[-1] '></div>
        <h1 className='font-poppins font-bold md:text-[36px] pb-[20px]'>Supply of national industries.</h1>
        <a className='hover:bg-[#F40404] font-poppins font-semibold text-[16px] py-[13px] px-[30px] ' href="">Learn More</a>
      </div>
      <div className='relative z-[1] bg-fuel py-[60px] px-[7px] md:pl-[116px] bg-current bg-no-repeat bg-cover md:pt-[147px] md:pb-[139px] 
      md:w-[50%] text-white'>
        <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 z-[-1] '></div>
        <h1 className='font-poppins font-bold md:text-[36px] pb-[20px]'>Supply of national industries.</h1>
        <a className='hover:bg-[#F40404] font-poppins font-semibold text-[16px] py-[13px] px-[30px] ' href="">Learn More</a>
      </div>
    </div>
  )
}

export default Supply