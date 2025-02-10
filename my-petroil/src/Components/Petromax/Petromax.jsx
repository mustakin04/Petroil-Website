// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo1 from "../../assets/Logo1.png"
import logo2 from "../../assets/Logo2.png"
import logo3 from "../../assets/Logo3.png"
import logo4 from "../../assets/Logo4.png"
import Container from '../Container/Container'
const Petromax = () => {
  return (
    <div className='py-[60px] md:py-[116px]'>
     <Container>
        <div className='my-[20px] m-auto md:flex justify-between w-full'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
        </div>
     </Container>
    </div>
  )
}

export default Petromax