// eslint-disable-next-line no-unused-vars
import React from "react";
import banner from "../../assets/banner.png";
import Container from "./../Container/Container";

const Banner = () => {
  return (
    <div
      className="relative z-[1] bg-no-repeat bg-cover bg-center font-poppins text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"></div>

      <Container>
        <div className="py-16 sm:py-24 md:py-32 lg:py-48">
          {/* Heading */}
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[90%] md:max-w-3xl leading-snug">
            We exist since 1975 in the oil and gas industry.
          </h1>

          {/* Button */}
          <div className="pt-5 sm:pt-8">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#F40404] hover:bg-[#d30303] transition-all duration-300 rounded text-white font-medium text-sm sm:text-base"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
