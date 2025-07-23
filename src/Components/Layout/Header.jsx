import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gray-600 sticky top-0">
        <div className="max-w-mContainer mx-auto">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                 <Link to={'Home'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  Home
                </li>
               </Link>
               <Link to={'about'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  About
                </li>
               </Link>
               <Link to={'service'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  Service
                </li>
               </Link>
               <Link to={'contract'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  Contract
                </li>
               </Link>
                </ul>
              </div>
              <h1 className="text-3xl font-bold hover:text-violet-900">
                Moz<span className="text-violet-600">nur</span>
              </h1>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
               <Link to={'home'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  Home
                </li>
               </Link>
               <Link to={'about'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  About
                </li>
               </Link>
               <Link to={'service'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  Service
                </li>
               </Link>
               <Link to={'contract'}>
                <li className="text-[18px] font-medium hover:text-violet-600 px-7">
                  Contract
                </li>
               </Link>
              </ul>
            </div>
            <div className="navbar-end">
              <Button
                className={
                  "text-[18px] hover:bg-violet-600 font-medium rounded-2xl py-3 px-7 border-2 border-neutral-500"
                }
                text={"Download CV"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
