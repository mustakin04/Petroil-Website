// eslint-disable-next-line no-unused-vars
import React from 'react'
import unsplash from "../../assets/unsplash1.png"
import unsplash2 from "../../assets/unsplash2.png"
import unsplash3 from "../../assets/unsplash3.png"
import unsplash4 from "../../assets/unsplash4.png"

const Image = () => {
  return (
    <div className='flex justify-between'>
        <img className='w-[458px] h-[426px]' src={unsplash} alt="" />
        <img className='w-[458px] h-[426px]' src={unsplash2} alt="" />
        <img className='w-[458px] h-[426px]'  src={unsplash3} alt="" />
        <img className='w-[458px] h-[426px]' src={unsplash4} alt="" />
    </div>
  )
}

export default Image