import React from "react";
import Image from "../Image";
import bg2 from "../../assets/bg2.jpg";
import Button from "../Button";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/Banner2.jpg)] py-[150px] bg-no-repeat bg-center bg-cover">
        <div className="max-w-mContainer mx-auto lg:flex justify-between mt-17">
          <div className="w-full sm:w-[90%] lg:w-[47%] sm:mx-auto text-center" data-aos="fade-right" >
            <Image className={"mx-auto"} imgSrc={bg2} />
          </div>
          <div className="w-full sm:w-[90%] lg:w-[47%] mx-auto p-7 sm:mt-10"  data-aos="fade-right">
            <h2 className="text-[18px] font-medium">I'm</h2>
            <h2 className="text-2xl font-bold">Moznur Rahman</h2>
            <p className="text-[18px] font-medium mt-12">
              I am a passionate front-end developer skilled in HTML, CSS,
              JavaScript, and React. I love creating responsive, user-friendly
              websites and continuously improving my coding and design skills.
            </p>
           <Button className={"w-[30%]  py-3 px-5 text-center mt-10 border-2 border-violet-900 bg-violet-400 rounded-2xl"} text={"Click here"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
