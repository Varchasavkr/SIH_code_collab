import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-90 h-20 rounded-full bg-gradient-to-r from-purple-200 via-purple-300 to-purple-500 p-5 flex justify-around">
      <div className="h-auto w-50">
        <img
          scr="../images/Logo.png"
          className="h-auto max-w-full"
          alt="logo"
        />
      </div>
      <div className="flex justify-around">
        <button className="rounded-full w-20 h-10 mx-2 bg-[#6941E1]">
          Login
        </button>
        <button className="rounded-full w-20 h-10 mx-2 bg-[#AD1AED]">
          Register
        </button>
      </div>
    </div>
  );
};
export default Navbar;
