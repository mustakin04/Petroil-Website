import React from 'react'
import map from "../../assets/Maps.png"
import Container from '../Container/Container'
const Map = () => {
  return (
    <div>
        <div className=''>
         <img className='w-full 'src={map} alt="" />
        </div>
        <div className=' bg-[#F40404] '>
           <Container>
            <div className='flex justify-between bg-[#F40404] py-[47px] text-white'>
                <p className='font-poppins font-bold text-[36px]'>Want to join as member branch in your area?</p>
                <a className='font-poppins font-semibold text-[16px] border border-white py-[13px] px-[31px]' href="">CONTACT</a>
            </div>
           </Container>
        </div>
    </div>
  )
}

export default Map