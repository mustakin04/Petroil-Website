import React from 'react'
const Services = () => {
    return (
        <div className='flex justify-between items-center  mt-[20px]'>
            <div >
                <div className='w-[50%] ml-[406px] ' >
                    <h2 className='font-poppins font-bold text-[64px] text-[#000000] w-[509px] h-[90px]'>
                        Our Services</h2>
                    <h3 className='font-poppins font-medium text-[16px] text-[#6C6C6C] w-[405px] h-[72px]'>
                        It is a long
                        established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.</h3>
                </div>
            </div>
            <div className='relative z-[1] bg-gas bg-cover bg-no-repeat bg-center
            pt-[147px] pb-[139px] w-[50%] text-white pl-[116px]'>
                <div className="absolute  bg-black bg-opacity-50 w-[100%] h-[100%] top-0 left-0 z-[-1]">
                </div>
                <h1 className='font-poppins font-bold text-[36px] mb-[20px]'>
                    Modern natural oil and gas refineries.</h1>
                <a className='hover:bg-[#F40404] py-[14px] px-[30px] mt-[20px] font-poppins font-semibold text-[16px]' href="">LEARN MORE</a>
            </div>
        </div>
    )

}
export default Services