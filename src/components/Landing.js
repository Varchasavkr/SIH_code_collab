import React from "react";
import Navbar from "./Navbar";
import logo from "../images/main_face.svg";
import { useTypewriter } from "react-simple-typewriter";

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Visualize your Press Release!!"],
    loop: 0,
  });

  return (
    <div className="">
      <p className="font-bold text-7xl absolute left-[3rem] text-[#6941E1] leading-[5.295rem]">
        <span>{text}</span>
      </p>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="w-screen h-screen bg-[#EDE3FB] z-[-1]">
      <Navbar />
      <div className="flex">
        <div className="">
          <img
            src={logo}
            alt="face"
            className="w-[48.6%] h-[103%] absolute top-[-3%] left-[-10%] z-1"
          />
        </div>
        <div className="relative">
          <div className=" absolute left-[40rem] top-[11rem] w-[55rem] h-[25rem] font-Inter">
            {MyComponent()}
            {/* <p className="font-bold text-7xl absolute left-[10rem] text-[#6941E1] leading-[5.295rem]">
              Releases!!
            </p> */}
            <p className="absolute font-medium top-[45%] left-[18%] text-[250%]">
              From Script2Screen
            </p>
            <p className="absolute top-[60%] left-[14%] text-[250%] font-medium">
              Your News Comes Alive!
            </p>
            <p className="absolute top-[75%] left-[8%] text-[179%] font-light">
              The easiest way to turn text into video with
            </p>
            <p className="absolute top-[67%] left-[75%] text-[374%] font-bold text-[#AD1AED]">
              AI
            </p>
            <button className="absolute top-[95%] left-[36%] w-[17%] h-[13%] text-[150%] text-[#EDE3FB] rounded-lg bg-[#AD1AED]">
              Try Here!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
