// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../Container/Container'
import PETROIl from "../../assets/Logo.png"


const Navbar = () => {
  return (
    <div className='bg-[#F40404] font-poppins md:py-[15px]'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='w-1/5'>
            <img src={PETROIl} alt="Petroil" />
          </div>
          <div >
            <ul className='flex gap-x-[47px] text-[16px] font-semibold text-white items-center'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Blog</li>
              <a href="#" className='border-2 border-white p-[13px]'>CONTACT</a>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar