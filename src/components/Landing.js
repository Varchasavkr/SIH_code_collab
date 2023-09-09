import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <>
      {/* <Outlet /> */}
      <div className="bg-[#EDE3FB] w-screen h-screen">
        <Navbar />
        {/* <div className="w-screen h-screen">
        <img
          src="../images/pngegg.png"
          className="h-auto max-w-full"
          alt="main-img"
        />
      </div> */}
      </div>
    </>
  );
};
export default Landing;
