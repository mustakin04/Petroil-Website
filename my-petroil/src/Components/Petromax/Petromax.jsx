import React from "react";
import logo1 from "../../assets/Logo1.png";
import logo2 from "../../assets/Logo2.png";
import logo3 from "../../assets/Logo3.png";
import logo4 from "../../assets/Logo4.png";
import Container from "../Container/Container";

const Petromax = () => {
  return (
    <div className="py-16 md:py-[116px]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          <img className="max-w-[120px] md:max-w-full" src={logo1} alt="Logo 1" />
          <img className="max-w-[120px] md:max-w-full" src={logo2} alt="Logo 2" />
          <img className="max-w-[120px] md:max-w-full" src={logo3} alt="Logo 3" />
          <img className="max-w-[120px] md:max-w-full" src={logo4} alt="Logo 4" />
        </div>
      </Container>
    </div>
  );
};

export default Petromax;
