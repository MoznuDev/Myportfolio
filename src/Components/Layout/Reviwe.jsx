import React from "react";
import Image from "../Image";
import Rating from "../../assets/Rating.png";
import Ellipse from "../../assets/Ellipse.png";
import Frame from "../../assets/Frame.png";

const Reviwe = () => {
  return (
    <>
      <div className="bg-gray-500 py-15">
        <h2 className="text-[16px] font-medium text-center text-green-400 mb-4">TESTIMONY</h2>
        <h2 className="text-2xl font-bold text-center mb-6">
          What Our Clients Say.
        </h2>
        <h2 className="text-[16px] font-medium text-center lg:w-[30%] mx-auto px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
          blandit lectus. Praesent at hendrerit velit, at dictum nisl.
        </h2>
        <div className="max-w-mContainer mx-auto">
          <div className="flex flex-col md:flex-row gap-x-10 mx-10 md:mx-0 ">
            <div className="w-[95%] lg:w-[48%] lg:p-10 mx-auto shadow-2xl mt-10 rounded-2xl p-6">
                <Image imgSrc={Rating} />
            <p className="text-[18px] text-center mt-10">
              Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
              Vestibulum nisl lorem, porta at mollis varius, tincidunt in
              lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
            </p>
            <div className="flex flex-col ">
                <div className="flex justify-between mt-10 ">
                    <div className="flex gap-x-6 w-[60%]">
                        <Image imgSrc={Ellipse}/>
                       <div className="">
                         <h2>David Gueta</h2>
                         <h2>UI/UX Designer</h2>
                       </div>
                    </div>
                   <div className="w-[30%] justify-end flex"> <Image className={'text-3xl'} imgSrc={Frame}/></div>
                </div>
            </div>
            </div>
            <div className="w-[95%] lg:w-[48%] lg:p-10 mx-auto shadow-2xl mt-10 rounded-2xl p-6">
                <Image imgSrc={Rating} />
            <p className="text-[18px] text-center mt-10">
              Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui.
              Vestibulum nisl lorem, porta at mollis varius, tincidunt in
              lectus. Nam pulvinar auctor sem ac dictum. Ut sed felis urna.
            </p>
            <div className="flex flex-col ">
                <div className="flex justify-between mt-10 ">
                    <div className="flex gap-x-6 w-[60%]">
                        <Image imgSrc={Ellipse}/>
                       <div className="">
                         <h2>David Gueta</h2>
                         <h2>UI/UX Designer</h2>
                       </div>
                    </div>
                   <div className="w-[30%] justify-end flex"> <Image className={'text-3xl'} imgSrc={Frame}/></div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviwe;
