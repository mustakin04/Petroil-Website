import React, { useState } from "react";
import Container from "../Container/Container";
import PETROIl from "../../assets/Logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="bg-[#F40404] font-poppins py-4">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo and Hamburger */}
          <div className="flex justify-between items-center w-full md:w-1/5">
            <img src={PETROIl} alt="Petroil" className="h-10 md:h-auto" />
            <IoReorderThreeOutline
              onClick={handleClick}
              className="text-white text-4xl md:hidden cursor-pointer"
            />
          </div>

          {/* Menu */}
          <nav
            className={`${
              dropdown ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-[#F40404] md:static md:block md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-12 text-white font-semibold text-base md:items-center p-4 md:p-0">
              <li className="py-2 md:py-0 cursor-pointer hover:underline">Home</li>
              <li className="py-2 md:py-0 cursor-pointer hover:underline">About</li>
              <li className="py-2 md:py-0 cursor-pointer hover:underline">Services</li>
              <li className="py-2 md:py-0 cursor-pointer hover:underline">Gallery</li>
              <li className="py-2 md:py-0 cursor-pointer hover:underline">Blog</li>
              <li>
                <a
                  href="#"
                  className="block border-2 border-white py-2 px-6 rounded text-center hover:bg-white hover:text-[#F40404] transition"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
