import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook,FaInstagram,FaLinkedin,FaAmazon } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-500 py-15">
        <div className="max-w-mContainer mx-auto">
          <div className="flex flex-col md:flex-row mx-10 md:mx-0 justify-between">
            <div className="w-[90%] p-7 lg:w-[47%] ">
              <h2 className="text-3xl font-bold ">Moznur Rahman</h2>
              <p className="text-[18px] font-medium mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                obcaecati enim aperiam eaque praesentium expedita quas
                exercitationem aut? 
              </p>
            </div>
            <div className="w-[90%] p-7 lg:w-[47%] ">
             <div className="flex px-[10] items-center gap-x-4">
               <MdOutlineEmail/>
               <h2 className="text-[18px] font-medium">monir0987@gmail.com</h2>
             </div>
             <div className="flex px-[10] items-center gap-x-4 mt-4">
               <IoCallOutline/>
               <h2 className="text-[18px] font-medium">01729-465318</h2>
             </div>
             <div className="flex px-[10] items-center gap-x-10 mt-7 text-3xl">
               <FaFacebook/>
              <FaInstagram/>
              <FaLinkedin/>
              <FaAmazon/>
             </div>
            </div>
          </div>
          <div className="divider divider-end"></div>
          <div className="flex flex-col md:flex-row mx-10 md:mx-0 justify-between">
            <ul className="flex w-[90%] lg:w-[50%] ">
              <li className="text-[20px] font-bold px-6 ">Home</li>
              <li className="text-[20px] font-bold px-6 ">About </li>
              <li className="text-[20px] font-bold px-6 ">Service</li>
              <li className="text-[20px] font-bold px-6 ">Works</li>
            </ul>
            <div className="w-[90%] lg:w-[30%] ">
              <h2 className="text-[20px] font-medium">@All Right</h2>
              <h2 className="text-[20px] font-medium"> Reserved</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
