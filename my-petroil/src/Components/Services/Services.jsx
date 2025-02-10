import React from 'react'
const Services = () => {
    return (
        <div className='md:flex justify-between items-center  mt-[20px]'>
            <div >
                <div className='md:w-[50%] py-[30px] px-[7px] md:py-0 md:ml-[406px] ' >
                    <h2 className='font-poppins font-bold md:text-[64px] text-[#000000] md:w-[509px] md:h-[90px]'>
                        Our Services</h2>
                    <h3 className='font-poppins font-medium text-[16px] text-justify md:text-start text-[#6C6C6C] md:w-[405px] md:h-[72px]'>
                        It is a long
                        established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.</h3>
                </div>
            </div>
            <div className='relative z-[1] bg-gas bg-cover bg-no-repeat bg-center
            md:pt-[147px] md:pb-[139px] py-[70px] md:py-0 md:w-[50%] px-[7px] text-white md:pl-[116px]'>
                <div className="absolute  bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 z-[-1]">
                </div>
                <h1 className='font-poppins font-bold text-[18px] md:text-[36px] mb-[20px]'>
                    Modern natural oil and gas refineries.</h1>
                <a className='hover:bg-[#F40404] py-[14px] px-[30px] mt-[20px] font-poppins font-semibold text-[16px]' href="">LEARN MORE</a>
            </div>
        </div>
    )

}
export default Services