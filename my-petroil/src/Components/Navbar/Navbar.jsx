// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Container from '../Container/Container'
import PETROIl from "../../assets/Logo.png"
import { IoReorderThreeOutline } from "react-icons/io5";


const Navbar = () => { 
  const [dropdown,setDropdwon] =useState(false)
  const handlClick=()=>{
     setDropdwon(!dropdown)
  }
  return (
    <div className='bg-[#F40404] font-poppins py-[15px]'>
      <Container>
        <div className='md:flex justify-between items-center'>
          <div className='flex justify-between md:w-1/5'>
            <img src={PETROIl} alt="Petroil" />
            <IoReorderThreeOutline onClick={ handlClick} className='text-white text-[50px] block md:hidden' />
          </div>
          <div className={`${dropdown ? 'bg-teal-500' :"hidden md:flex" }`}>
            <ul className='md:flex gap-x-[47px] text-[16px] font-semibold text-white items-center'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Blog</li>
              <a href="#" className='border-2 border-white p-1 md:p-[13px]'>CONTACT</a>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar