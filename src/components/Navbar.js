import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import Logo from "../images/Logo.png";
const Navbar = () => {
  return (
    <div className="relative w-full h-auto  z-2">
      <div className="absolute left-10 w-[90rem] h-15 rounded-full bg-gradient-to-r from-purple-100 via-purple-150 to-purple-300 p-5 flex justify-between shadow-2xl">
        <div>
          <img
            className="object-fit absolute top-[1rem]"
            width="200rem"
            height="500rem"
            src={Logo}
            alt="logo"
          />
        </div>
        <div></div>
        <div className="flex justify-around">
          <button className="rounded-full text-[#EDE3FB] w-20 h-8 mx-3 bg-[#6941E1]">
            Login
          </button>
          <button className="rounded-full text-[#EDE3FB]  w-20 h-8 mx-2 bg-[#AD1AED]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
