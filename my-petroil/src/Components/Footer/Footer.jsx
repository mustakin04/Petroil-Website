// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from '../Container/Container'
import log5 from '../../assets/Logo5.png'
import { RiMailStarLine } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import card1 from '../../assets/Cert1.png';
import card2 from '../../assets/Cert2.png'


const Footer = () => {
    return (
        <div className='bg-[#1F1F1F] py-[149px]'>
            <Container>
                <div className='md:flex justify-between'>
                    <div className='text-white '>
                        <img className=' pb-[33px]' src={log5} alt="" />
                        <div className='flex items-center'>
                            <RiMailStarLine />
                            <p>mail@yourcompany.com</p>
                        </div>
                        <div className='flex items-center py-[33px]'>
                            <MdAddCall />
                            <p>+896 120 5889 (Toll free)</p>
                        </div>
                        <div className='flex items-center pb-[33px]'>
                            <IoLocationOutline />
                            <p>01 Baker Street, New York, USA, 12345</p>
                        </div>
                        <div className='flex gap-[6px]  '>
                            <FaFacebook className='bg-red-500 ' />
                            <AiFillTwitterCircle className='bg-red-500 ' />
                            <FaLinkedin className='bg-red-500 ' />
                            <FaInstagramSquare className='bg-red-500 ' />
                        </div>
                    </div>
                    <div className='text-white'>
                        <p className='font-poppins font-bold text-[16px] py-[21px]'>Company</p>
                        <p className='font-poppins font-semibold text-[14px]'>Home</p>
                        <p className='font-poppins font-semibold text-[14px] py-[21px]'>About</p>
                        <p className='font-poppins font-semibold text-[14px]'>Services</p>
                        <p className='font-poppins font-semibold text-[14px] py-[21px]'>Gallery</p>
                    </div>
                    <div className='text-white'>
                        <p className='font-poppins font-bold text-[16px] py-[21px]'>Company</p>
                        <p className='font-poppins font-semibold text-[14px]'>Home</p>
                        <p className='font-poppins font-semibold text-[14px] py-[21px]'>About</p>
                        <p className='font-poppins font-semibold text-[14px]'>Services</p>
                        <p className='font-poppins font-semibold text-[14px] py-[21px]'>Gallery</p>
                    </div>
                    <div className='text-white'>
                        <p className='font-poppins font-bold text-[16px] py-[21px]'>Certificate</p>
                        <div className='flex gap-1'>
                            <img src={card1} alt="" />
                            <img src={card2} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer