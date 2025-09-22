import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook,FaInstagram,FaLinkedin,FaAmazon } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <div className="bg-gray-500 py-10">
  <div className="max-w-mContainer mx-auto px-5">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between gap-8">
      {/* Left */}
      <div className="w-full md:w-[60%] lg:w-[47%] p-5 text-center md:text-left">
        <h2 className="text-3xl font-bold">Moznur Rahman</h2>
        <p className="text-[16px] sm:text-[18px] font-medium mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          obcaecati enim aperiam eaque praesentium expedita quas exercitationem
          aut?
        </p>
      </div>
      {/* Right */}
      <div className="w-full md:w-[60%] lg:w-[47%] p-5">
        <div className="flex items-center gap-x-4">
          <MdOutlineEmail />
          <h2 className="text-[16px] sm:text-[18px] font-medium break-all">
            monir0987@gmail.com
          </h2>
        </div>
        <div className="flex items-center gap-x-4 mt-4">
          <IoCallOutline />
          <h2 className="text-[16px] sm:text-[18px] font-medium">
            01729-465318
          </h2>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-x-6 mt-6 text-2xl sm:text-3xl">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaAmazon />
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-300 my-8"></div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Menu */}
      <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-center">
        <li className="text-[18px] sm:text-[20px] font-bold">Home</li>
        <li className="text-[18px] sm:text-[20px] font-bold">About</li>
        <li className="text-[18px] sm:text-[20px] font-bold">Service</li>
        <li className="text-[18px] sm:text-[20px] font-bold">Works</li>
      </ul>

      {/* Footer Right */}
      <div className="text-center md:text-right">
        <h2 className="text-[18px] sm:text-[20px] font-medium">@All Right</h2>
        <h2 className="text-[18px] sm:text-[20px] font-medium">Reserved</h2>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Footer;
