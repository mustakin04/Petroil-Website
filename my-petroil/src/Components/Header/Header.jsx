// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Container from '../Container/Container';




const Header = () => {
    return (
        <div className="bg-black text-white border-b-[5px] border-[#FFB800] ">
            <Container>
                <div className='flex font-poppins'>
                    <div className='flex w-1/2'>
                        <div className='relative w-1/2 flex items-center gap-[5px] after:absolute after:content-[""] after:w-[2px] 
                        after:h-[16px] after:bg-neutral-50 after:top-[4px] after:right-[40px]'>
                            <CiMail className='text-xl' />
                            <p className=' text-xs font-normal'>mail@yourcompany.com</p>
                        </div>
                        <div className='w-1/2 flex items-center gap-[5px]'>
                            <MdAddCall className='text-xl' />
                            <p className='font-Poppins text-xs font-normal'>+896 120 5889 (Toll free)</p>
                        </div>
                    </div>
                    <div className='flex w-1/2 justify-end gap-x-[19px]' >
                        <FaFacebookF />
                        <CiTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
            </Container>
        </div > 
               
        
    )
}

export default Header