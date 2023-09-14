import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import Logo from "../images/Logo.png";
import VectorKM from "../images/VectorKM.png";
const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const handleAdmin = () => {
    navigate("/admin");
  };
  const handleLogout = () => {
    navigate("/");
  };
  const handleUser = () => {
    navigate("/User");
  };
  return (
    <div className="relative w-full h-auto p-[1%] z-10">
      <div className="absolute left-[2%] w-[95%] h-15 rounded-full bg-gradient-to-r from-purple-100 via-purple-150 to-purple-300 p-5 flex justify-between shadow-2xl">
        <div className=" opacity-1">
          <img
            className="object-fit absolute top-[30%]"
            width="200rem"
            height="500rem"
            src={Logo}
            alt="logo"
          />
        </div>
        <div></div>
        {isLoggedIn ? (
          <div className="flex justify-around">
            <button
              className="rounded-full text-[#EDE3FB] w-20 h-[120%] mx-3 bg-[#6941E1]"
              onClick={handleLogout}
            >
              Logout
            </button>
            <img width="20%" height="20%" src={VectorKM} alt="logo" />
          </div>
        ) : (
          <div className="flex justify-around">
            <button
              className="rounded-full text-[#EDE3FB] w-20 h-[120%] mx-3 bg-[#6941E1]"
              onClick={handleAdmin}
            >
              Admin
            </button>
            <button
              className="rounded-full text-[#EDE3FB]  w-20 h-[120%] mx-2 bg-[#AD1AED]"
              onClick={handleUser}
            >
              User
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
