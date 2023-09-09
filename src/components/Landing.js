import React, { useEffect, useState } from "react";
// import Lofo
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import logo from "../images/main_face.svg";
const Landing = () => {
  return (
    <div className="overflow-x-hidden w-screen h-screen bg-[#EDE3FB] z-[-1]">
      <Navbar />
      <div className="flex">
        <div className="">
          <img
            src={logo}
            alt="face"
            className="w-[45rem] h-[52rem] absolute top-[-1rem] left-[-8rem] z-1"
          />
        </div>
        <div className="relative">
          <div className=" absolute left-[42rem] top-[11rem] w-[45rem] h-[25rem] font-Inter">
            <p className="font-bold text-[4.375rem] text-[#6941E1] leading-[5.295rem]">
              Celebrate Your Press
            </p>
            <p className="font-bold text-7xl absolute left-[10rem] text-[#6941E1] leading-[5.295rem]">
              Releases!!
            </p>
            <p className="absolute font-medium top-[12.5rem] left-[10rem] text-[2.5rem]">
              From Script2Screen
            </p>
            <p className="absolute top-[15.625rem] left-[7.4rem] text-[2.5rem] font-medium">
              Your Story Comes Alive!
            </p>
            <p className="absolute top-[18.625rem] left-[3.8rem] text-[1.8rem] font-light">
              The easiest way to turn text into video with
            </p>
            <p className="absolute top-[10.625rem] left-[41rem] text-[9rem] font-bold text-[#6941E1]">
              AI
            </p>
            <button className="absolute top-[23.875rem] left-[16.5rem] w-[10rem] h-[3rem] text-[1.75rem] text-[#EDE3FB] rounded-lg bg-[#AD1AED]">
              Try Here!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
