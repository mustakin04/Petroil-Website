// eslint-disable-next-line no-unused-vars
import React from "react";
import { CiMail } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Container from "../Container/Container";

const Header = () => {
  return (
    <div className="bg-black text-white border-b-4 border-[#FFB800] py-3 sm:py-4 md:py-5">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-poppins gap-3 sm:gap-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center gap-2 relative sm:after:content-[''] sm:after:w-px sm:after:h-4 sm:after:bg-white sm:after:absolute sm:after:right-[-12px] sm:after:top-1/2 sm:after:-translate-y-1/2">
              <CiMail className="text-lg sm:text-xl" />
              <p className="text-xs sm:text-sm font-normal">
                mail@yourcompany.com
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1 sm:pt-0 sm:pl-6">
              <MdAddCall className="text-lg sm:text-xl" />
              <p className="text-xs sm:text-sm font-normal">
                +896 120 5889 (Toll free)
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-5 text-lg sm:text-xl justify-center sm:justify-end">
            <FaFacebookF className="hover:text-[#FFB800] cursor-pointer" />
            <CiTwitter className="hover:text-[#FFB800] cursor-pointer" />
            <FaLinkedin className="hover:text-[#FFB800] cursor-pointer" />
            <FaInstagram className="hover:text-[#FFB800] cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
