// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "../Container/Container";
import log5 from "../../assets/Logo5.png";
import { RiMailStarLine } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import card1 from "../../assets/Cert1.png";
import card2 from "../../assets/Cert2.png";

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] py-10 sm:py-14 md:py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">
          {/* Contact Section */}
          <div>
            <img className="pb-6 w-[140px]" src={log5} alt="Logo" />

            <div className="flex items-center gap-2">
              <RiMailStarLine />
              <p className="text-sm sm:text-base">mail@yourcompany.com</p>
            </div>

            <div className="flex items-center gap-2 py-4">
              <MdAddCall />
              <p className="text-sm sm:text-base">+896 120 5889 (Toll free)</p>
            </div>

            <div className="flex items-center gap-2 pb-4">
              <IoLocationOutline />
              <p className="text-sm sm:text-base">
                01 Baker Street, New York, USA, 12345
              </p>
            </div>

            <div className="flex gap-3 text-xl">
              <FaFacebook className="hover:text-[#F40404] cursor-pointer" />
              <AiFillTwitterCircle className="hover:text-[#F40404] cursor-pointer" />
              <FaLinkedin className="hover:text-[#F40404] cursor-pointer" />
              <FaInstagramSquare className="hover:text-[#F40404] cursor-pointer" />
            </div>
          </div>

          {/* Company Links 1 */}
          <div>
            <p className="font-bold text-lg mb-5">Company</p>
            <ul className="space-y-3 text-sm sm:text-base font-medium">
              <li className="hover:text-[#F40404] cursor-pointer">Home</li>
              <li className="hover:text-[#F40404] cursor-pointer">About</li>
              <li className="hover:text-[#F40404] cursor-pointer">Services</li>
              <li className="hover:text-[#F40404] cursor-pointer">Gallery</li>
            </ul>
          </div>

          {/* Company Links 2 */}
          <div>
            <p className="font-bold text-lg mb-5">Company</p>
            <ul className="space-y-3 text-sm sm:text-base font-medium">
              <li className="hover:text-[#F40404] cursor-pointer">Home</li>
              <li className="hover:text-[#F40404] cursor-pointer">About</li>
              <li className="hover:text-[#F40404] cursor-pointer">Services</li>
              <li className="hover:text-[#F40404] cursor-pointer">Gallery</li>
            </ul>
          </div>

          {/* Certificate */}
          <div>
            <p className="font-bold text-lg mb-5">Certificate</p>
            <div className="flex gap-2">
              <img
                src={card1}
                alt="Certificate 1"
                className="w-20 sm:w-24 lg:w-28"
              />
              <img
                src={card2}
                alt="Certificate 2"
                className="w-20 sm:w-24 lg:w-28"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
