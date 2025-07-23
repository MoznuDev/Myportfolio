import React from "react";
import Image from "../Image";
import Furniro from '../../assets/Furniro.jpg'
import Oribi from '../../assets/Oribi.jpg'
import Trust from '../../assets/Trust.jpg'
import Manage from '../../assets/Manage.jpg'

const Myportfolio = () => {
  return (
    <>
      <div className="bg-gray-500 py-15">
        <div className="max-w-mContainer m-auto">
          <h2 className="text-[16px] text-green-500 mb-6 md:flex-row flex-col gap-x-10 mx-20 md:mx-0 ">Portfolio</h2>
          <div className="flex md:flex-row flex-col gap-x-10 mx-10 md:mx-0 justify-between">
            <div className="w-[80%] lg:w-[47%] mx-auto ">
              <h2 className="text-2xl font-bold">Selected Works.</h2>
            </div>
            <div className="w-[80%] lg:w-[47%] mx-auto">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
            </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-x-10 mx-10 flex-wrap md:mx-0 justify-between">
            <div className="w-full lg:w-[47%] md:w-[70%] mx-auto">
              <Image className={'rounded-t-[20px] mt-20'} imgSrc={Furniro}/>
              <div className="p-10 bg-white rounded-b-[20px]">
                <h2 className="text-[20px] font-bold">Creativa - Elementor Template Kit</h2>
                <h2 className="text-[16px] mt-4">UI/UX Design</h2>
              </div>
            </div>
            <div className="w-full lg:w-[47%] md:w-[70%] mx-auto">
              <Image className={'rounded-t-[20px] mt-20'} imgSrc={Oribi}/>
              <div className="p-10 bg-white rounded-b-[20px]">
                <h2 className="text-[20px] font-bold">Creativa - Elementor Template Kit</h2>
                <h2 className="text-[16px] mt-4">UI/UX Design</h2>
              </div>
            </div>
            <div className="w-full lg:w-[47%] md:w-[70%] mx-auto">
              <Image className={'rounded-t-[20px] mt-20'} imgSrc={Trust}/>
              <div className="p-10 bg-white rounded-b-[20px]">
                <h2 className="text-[20px] font-bold">Creativa - Elementor Template Kit</h2>
                <h2 className="text-[16px] mt-4">UI/UX Design</h2>
              </div>
            </div>
            <div className="w-full lg:w-[47%] md:w-[70%] mx-auto">
              <Image className={'rounded-t-[20px] mt-20'} imgSrc={Manage}/>
              <div className="p-10 bg-white rounded-b-[20px]">
                <h2 className="text-[20px] font-bold">Creativa - Elementor Template Kit</h2>
                <h2 className="text-[16px] mt-4">UI/UX Design</h2>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Myportfolio;
