import React from "react";

const Service = () => {
    
    <script>AOS.init();</script>
    return (
    <>
      <div className="bg-gray-500 py-7 ">
        <h2 className="text-[18px] text-center text-green-400 mt-15">
          Service
        </h2>
        <h2 className="mt-10 text-2xl font-bold text-center">
          What I Do For My Customer.
        </h2>
        <p className="mt-10 text-[16px] px-10 font-medium text-center lg:w-[50%] lg:px-[220px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
          blandit lectus. Praesent at hendrerit velit, at dictum nisl.
        </p>
        <div className="max-w-mContainer mx-auto">
          <div className="flex flex-col mt-20 md:flex-row items-center gap-x-10 mx-10 md:mx-0">
            <div  data-aos="fade-right" data-aos-duration="2000"  className=" shadow-2xl  lg:w-[30%] rounded-[15px] p-10 transition-all duration-300 hover:bg-violet-900 group hover:scale-100 mt-10">
              <h2 className="text-[26px] text-center">Font-End Developer</h2>
              <p className="text-[20px] mt-7 text-center">
                lorem ipsum dolor sit amet consectur adi pising leo
              </p>
            </div>
            <div  data-aos="fade-right" data-aos-duration="2000"
              className="shadow-2xl  lg:w-[30%] rounded-[15px] p-10 transition-all duration-300 hover:bg-violet-900 group hover:scale-100 mt-10"
             >
              <h2 className="text-[26px] text-center">Graphic Degine</h2>
              <p className="text-[20px] mt-7 text-center">
                lorem ipsum dolor sit amet consectur adi pising leo
              </p>
            </div>
            <div data-aos="fade-right" data-aos-duration="2000"
              className="shadow-2xl  lg:w-[30%] rounded-[15px] p-10 transition-all duration-300 hover:bg-violet-900 group hover:scale-100 mt-10"
              >
              <h2 className="text-[26px] text-center">Video Editing</h2>
              <p className="text-[20px] mt-7 text-center">
                lorem ipsum dolor sit amet consectur adi pising leo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
