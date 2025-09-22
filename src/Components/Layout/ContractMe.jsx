import React from "react";
import Button from "../Button";

const ContractMe = () => {
  return (
    <>
      <div className="bg-gray-500 py-10">
        <div className="max-w-mContainer mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Content */}
            <div className="w-full md:w-[60%] lg:w-[50%] text-center md:text-left">
              <h2 className="text-[16px] font-medium text-green-400 mt-10">
                Front-End Developer
              </h2>
              <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[40px] lg:text-[60px] mt-6 leading-tight">
                Front-end Designer With 1 Year Of Experience.
              </h2>
              <p className="text-[16px] mt-6 font-medium text-center md:text-left mx-auto md:mx-0 lg:mr-[100px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vitae blandit lectus. Praesent at hendrerit velit, at dictum
                nisl.
              </p>

              <div className="flex justify-center md:justify-start">
                <Button
                  className="w-[60%] sm:w-[40%] md:w-[30%] lg:w-[25%] py-2 rounded-2xl text-center bg-violet-500 mt-10 text-[16px] sm:text-[18px] hover:bg-white"
                  text={"Contact me"}
                />
              </div>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-[60%] lg:w-[50%] text-center md:text-left shadow-2xl p-6 rounded-2xl mt-20">
              <h2 className="text-3xl text-center font-bold  mt-10">Creative IT Instution</h2>
              <p className="text-[16px] mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus ea temporibus laboriosam quia repudiandae repellat
                quisquam nemo itaque tempore quaerat, ullam possimus doloremque
                magnam nulla, sit voluptas illo perspiciatis vel aperiam
                commodi? Saepe laborum nihil animi vero blanditiis minus
                nesciunt quasi culpa commodi atque! Doloremque molestias commodi
                deserunt ullam facilis?
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractMe;
