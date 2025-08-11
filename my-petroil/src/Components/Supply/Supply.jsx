import React from "react";

const Supply = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section */}
      <div
        className="relative z-10 bg-supply bg-current bg-no-repeat bg-cover
          py-16 px-2 md:pl-[116px] md:pt-[147px] md:pb-[139px] md:w-1/2
          text-white"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <h1 className="relative z-10 font-poppins font-bold text-2xl md:text-[36px] pb-5">
          Supply of national industries.
        </h1>
        <a
          href="#"
          className="relative z-10 inline-block font-poppins font-semibold text-[16px] py-3.5 px-7 hover:bg-[#F40404] transition rounded"
        >
          Learn More
        </a>
      </div>

      {/* Right section */}
      <div
        className="relative z-10 bg-fuel bg-current bg-no-repeat bg-cover
          py-16 px-2 md:pl-[116px] md:pt-[147px] md:pb-[139px] md:w-1/2
          text-white"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <h1 className="relative z-10 font-poppins font-bold text-2xl md:text-[36px] pb-5">
          Supply of national industries.
        </h1>
        <a
          href="#"
          className="relative z-10 inline-block font-poppins font-semibold text-[16px] py-3.5 px-7 hover:bg-[#F40404] transition rounded"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Supply;
