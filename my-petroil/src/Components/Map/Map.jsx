import React from "react";
import map from "../../assets/Maps.png";
import Container from "../Container/Container";

const Map = () => {
  return (
    <div className="mt-3 md:mt-0">
      <div>
        <img className="w-full h-auto object-cover" src={map} alt="Map" />
      </div>
      <div className="bg-[#F40404]">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center py-10 md:py-12 text-white gap-5 md:gap-0">
            <p className="font-poppins font-bold text-lg sm:text-xl md:text-3xl max-w-lg text-center md:text-left">
              Want to join as member branch in your area?
            </p>
            <a
              href="#"
              className="font-poppins font-semibold text-base sm:text-lg border border-white py-3 px-8 rounded hover:bg-white hover:text-[#F40404] transition"
            >
              CONTACT
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Map;
