// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from './../Container/Container';

const Supplier = () => {
    return (
        <div className='py-[50px] md:py-[100px]'>
            <Container>
                <div className='md:flex  justify-between items-center' >
                    <div className='font-poppins text-[#000000] md:text-[48px] font-bold '>
                        <h1 className='md:w-[289px] md:h-[216px]'>The biggest
                            supplier on
                            the country</h1>
                    </div>
                    <div className='font-poppins text-justify justify font-medium text-[16px] text-[#6C6C6C] md:w-[651px] md:h-[72px]'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    </div>
                </div>
            </Container>



        </div>
    )
}

export default Supplier