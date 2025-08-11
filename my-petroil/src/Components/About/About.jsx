import React from "react";
import Container from "../Container/Container";

const About = () => {
  return (
    <div className="bg-[#F0F0F0] py-10 sm:py-14 md:py-20 lg:py-32">
      <Container>
        <div className="flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="bg-[#F40404] text-white flex items-center justify-center p-10 sm:p-14 lg:p-20 md:w-2/5">
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-center leading-snug">
              Learn more about our company
            </h1>
          </div>

          {/* Right Side */}
          <div className="bg-unsplash7 bg-center bg-no-repeat bg-cover flex items-center justify-center p-10 sm:p-14 lg:p-20 md:w-3/5">
            <a
              href=""
              className="font-poppins font-medium sm:font-semibold bg-white text-[#F40404] py-2 px-5 sm:py-3 sm:px-8 rounded shadow hover:bg-[#F40404] hover:text-white transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
