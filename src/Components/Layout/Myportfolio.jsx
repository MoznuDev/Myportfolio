import React from "react";
import Image from "../Image";
import Furniro from '../../assets/Furniro.jpg'
import Oribi from '../../assets/Oribi.jpg'
import Trust from '../../assets/Trust.jpg'
import Manage from '../../assets/Manage.jpg'

const Myportfolio = () => {
  return (
    <>
     <div className="bg-gray-500 py-10">
  <div className="max-w-mContainer mx-auto px-5">
    {/* Heading */}
    <h2 className="text-[16px] text-green-500 mb-6 text-center md:text-left">
      Portfolio
    </h2>

    {/* Top Text Section */}
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
      <div className="w-full md:w-[50%] text-center md:text-left">
        <h2 className="text-2xl font-bold">Selected Works.</h2>
      </div>
      <div className="w-full md:w-[50%] text-center md:text-left">
        <p className="text-[16px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
          blandit lectus. Praesent at hendrerit velit, at dictum nisl.
        </p>
      </div>
    </div>

    {/* Portfolio Items */}
    <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-between">
      {/* Item 1 */}
      <div className="w-full md:w-[47%] mx-auto">
        <Image className="rounded-t-[20px] mt-6" imgSrc={Furniro} />
        <div className="p-6 bg-white rounded-b-[20px]">
          <h2 className="text-[20px] font-bold">
            Creative - Elementor Template Kit
          </h2>
          <h2 className="text-[16px] mt-2">UI/UX Design</h2>
        </div>
      </div>
      {/* Item 2 */}
      <div className="w-full md:w-[47%] mx-auto">
        <Image className="rounded-t-[20px] mt-6" imgSrc={Oribi} />
        <div className="p-6 bg-white rounded-b-[20px]">
          <h2 className="text-[20px] font-bold">
            Creativa - Elementor Template Kit
          </h2>
          <h2 className="text-[16px] mt-2">UI/UX Design</h2>
        </div>
      </div>
      {/* Item 3 */}
      <div className="w-full md:w-[47%] mx-auto">
        <Image className="rounded-t-[20px] mt-6" imgSrc={Trust} />
        <div className="p-6 bg-white rounded-b-[20px]">
          <h2 className="text-[20px] font-bold">
            Creativa - Elementor Template Kit
          </h2>
          <h2 className="text-[16px] mt-2">UI/UX Design</h2>
        </div>
      </div>
      {/* Item 4 */}
      <div className="w-full md:w-[47%] mx-auto">
        <Image className="rounded-t-[20px] mt-6" imgSrc={Manage} />
        <div className="p-6 bg-white rounded-b-[20px]">
          <h2 className="text-[20px] font-bold">
            Creativa - Elementor Template Kit
          </h2>
          <h2 className="text-[16px] mt-2">UI/UX Design</h2>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Myportfolio;
