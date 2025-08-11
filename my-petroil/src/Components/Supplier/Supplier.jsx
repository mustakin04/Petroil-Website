import React from "react";
import Container from "../Container/Container";

const Supplier = () => {
  return (
    <div className="py-12 md:py-[100px]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
          {/* Title */}
          <div className="font-poppins text-black font-bold text-3xl md:text-[48px] md:w-[289px] leading-tight md:h-[216px]">
            <h1>
              The biggest
              <br />
              supplier in
              <br />
              the country
            </h1>
          </div>

          {/* Description */}
          <div className="font-poppins font-medium text-[16px] text-[#6C6C6C] text-justify md:w-[651px] md:h-[72px]">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Supplier;
