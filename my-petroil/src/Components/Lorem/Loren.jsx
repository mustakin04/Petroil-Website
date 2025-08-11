import React from "react";
import Container from "../Container/Container";
import { IoIosArrowForward } from "react-icons/io";

const Loren = () => {
  return (
    <div className="bg-[#F0F0F0] pt-10 pb-14 md:pt-[110px] md:pb-[162px]">
      <Container>
        {/* Cards container */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`relative z-10 bg-center bg-no-repeat bg-cover py-14 md:py-20 text-white md:w-[339px] ${
                item === 1
                  ? "bg-unsplash8"
                  : item === 2
                  ? "bg-unsplash9"
                  : "bg-unsplash10 bg-current"
              }`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

              {/* Content */}
              <h1 className="relative z-10 font-poppins font-bold px-2 md:px-11 mb-4 md:mb-12 md:text-[24px] max-w-[250px] leading-snug">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h1>
              <a
                href="#"
                className="relative z-10 inline-block font-poppins font-semibold text-[16px] py-2.5 px-6 mx-11 hover:bg-black hover:opacity-10 hover:text-white transition"
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        {/* More from the blog */}
        <div className="flex justify-end items-center mt-7 md:mt-[29px] gap-2">
          <h1 className="font-poppins font-semibold md:font-bold text-base md:text-[16px] pr-2">
            MORE FROM THE BLOG
          </h1>
          <IoIosArrowForward size={20} />
        </div>
      </Container>
    </div>
  );
};

export default Loren;
