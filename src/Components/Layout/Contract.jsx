import React from "react";
import Button from "../Button";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa6";

const Contract = () => {
  return (
    <>
      <div className="bg-gray-500 py-15">
        <div className="max-w-mContainer m-auto">
          <div className="flex flex-col md:flex-row mx-10 md:mx-0">
            <div className="shadow-2xl py-10 rounded-2xl mx-auto  w-full">
            <div className="bg-bg1Color py-[100px] px-5 md:px-0">
      <div className="max-w-mContainer mx-auto">
        {/* Heading */}
        <h2 className="text-[20px] text-center text-white mb-2 font-medium">
          Contact With Me
        </h2>
        <h2 className="text-3xl font-bold text-center text-white mb-5">
          Get In Touch
        </h2>
        <p className="text-[16px] text-center text-white mx-auto lg:w-[45%] mb-10">
          Contact me for frontend development work or to discuss interactive and responsive web solutions.
        </p>

        {/* Contact Form & Info */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Form */}
          <div className="w-full lg:w-2/3">
            <div className="shadow-2xl rounded-2xl p-7 space-y-5 hover:scale-105 duration-500 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Send me a message</h2>
              <div className="flex flex-col lg:flex-row gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-800 py-2 px-6 rounded-2xl w-full text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-gray-800 py-2 px-6 rounded-2xl w-full text-white outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 py-2 px-6 rounded-2xl w-full text-white outline-none mt-6"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-gray-800 py-2 px-6 rounded-2xl w-full text-white outline-none mt-6"
              />
              <textarea
                placeholder="Your Message"
                className="bg-gray-800 py-2 px-6 rounded-2xl w-full text-white outline-none mt-6 h-32 resize-none"
              />
              <div className="flex justify-center lg:justify-start">
                <Button
                  text="Send Message"
                  className="py-2 px-7 bg-indigo-500 hover:bg-indigo-600 rounded-2xl w-full lg:w-1/4 text-center mt-3"
                />
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-1/3">
            <div className="shadow-2xl rounded-2xl p-7 space-y-5 hover:scale-105 duration-500 text-white">
              <div className="flex justify-center lg:justify-start mb-5">
                
              </div>
              <h2 className="text-2xl font-bold mb-5">Get Support</h2>
              <p className="text-[16px] mb-7">
                If you want to communicate live, please Skype online contact me.
              </p>
              <h2 className="mb-5">Mobile No: 015793652412</h2>
              <div className="flex items-center gap-2 mb-4">
                <MdOutlineMarkEmailRead className="text-2xl mt-4" />
                <span>Communication With Mail</span>
              </div>
              <p className="mb-4">Please submit your email and I will reply as soon as possible.</p>
              <h2 className="mb-5">Email: akjgddf@gmail.com</h2>
              <div className="flex items-center gap-2 mb-2">
                <FaRocketchat className="text-2xl mt-2" />
                <span>Want to Chat Now?</span>
              </div>
              <p className="mb-10">
                Chat with me to find out more and get expert guidance.
              </p>
              <Button
                text="Chat Now"
                className="py-2 px-7 mt-10 bg-indigo-500 hover:bg-indigo-600 rounded-2xl w-[40%] text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
              <h2 className="text-3xl font-bold text-center w-[90%] mx-auto lg:w-[35%] ">
                Interested Working With me? Let's connect!
              </h2>
              <Button
                className={
                  "py-2 px-4 bg-violet-500 rounded-2xl border-2 w-[35%] lg:w-[15%] text-center mt-10 mx-auto"
                }
                text={"Contract me"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contract;
