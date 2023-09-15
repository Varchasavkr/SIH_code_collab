import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import image1 from "../images/Ellipse 1.png";
import overimage1 from "../images/Vector (1).png";
import overimage2 from "../images/Vector (2).png";
import overimage3 from "../images/Vector (3).png";
import overimage4 from "../images/Vector (4).png";
import overimage5 from "../images/Vector (5).png";
import overimage6 from "../images/Vector (6).png";
import overimage7 from "../images/Vector (7).png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function User() {
  const navigate = useNavigate();
  const handleVideo = () => {
    navigate("/video");
  };
  return (
    <div className="bg-[#EDE3FB] w-screen h-screen">
      <Navbar isLoggedIn />
      <div className="flex flex-col">
        <div className="flex justify-between w-[50%] mt-[10%] mx-auto">
          {/* <button>
            <div className="">
              <img src={image1} className="relative  bottom-3" alt="" />
              <img
                src={overimage1}
                className="absolute left-[25.7%] top-[24.2%]"
                alt=""
              />
              <img
                src={overimage2}
                className="absolute left-[25.7%] top-[25.5%]"
                alt=""
              />
              <img
                src={overimage3}
                className="absolute left-[25.7%] top-[26.5%]"
                alt=""
              />
              <img
                src={overimage2}
                className="absolute left-[25.7%] top-[27.5%]"
                alt=""
              />
              <p className="text-[#6941E1] absolute left-[24%] top-[31.6%]">
                Add/Paste text
              </p>
            </div>
          </button> */}

          {/* <div className="">
            <button>
              <img src={image1} alt="" className="relative " />
              <img
                src={overimage4}
                className="absolute left-[49.85%] top-[24%]"
                alt=""
              />
              <img
                src={overimage5}
                className="absolute left-[49.2%] top-[25.7%]"
                alt=""
              />
              <img
                src={overimage6}
                className="absolute left-[48.86%] top-[26.6%]"
                alt=""
              />
              <p className="text-[#6941E1] absolute top- left-[47%]">
                Add document
              </p>
            </button>
          </div> */}
          <div className="rounded-full h-[40%] w-[20%] bg-[#B7A1F0]">
            <button className="rounded-full h-[100%] w-[100%]">
              <LinkIcon sx={{ color: "white" }} />
              {/* <div className="">
              <img src={image1} alt="" />
              <img
                src={overimage7}
                className="absolute left-[71.8%] top-[24%]"
                alt=""
              />
              <p className="text-[#6941E1] ">Add link</p>
            </div> */}
            </button>
          </div>
          {/* <div className="rounded-full h-[40%] w-[20%] bg-[#B7A1F0]">
            <button className="rounded-full">
              <LinkIcon sx={{ color: "white" }} />
              <div className="">
              <img src={image1} alt="" />
              <img
                src={overimage7}
                className="absolute left-[71.8%] top-[24%]"
                alt=""
              />
              <p className="text-[#6941E1] ">Add link</p>
            </div>
            </button>
          </div> */}
          <div class="p-10">
            <button className="w-12 h-12 rounded-full bg-[#6941E1]">
              <LinkIcon />
            </button>
          </div>
        </div>
        <textarea
          placeholder="Add Text here ..."
          rows="5"
          cols="5"
          className="border-2 border-[#B7A1F0] bg-[#EDE3FB] mx-auto w-[70%] rounded-lg h-[12.375rem] textarea mt-[2%] focus:outline-none focus:ring focus:ring-violet-500"
        ></textarea>
        <textarea
          placeholder="Add keywords here ..."
          id=""
          cols="30"
          rows="10"
          className=" mx-auto w-[70%] border-2 border-[#B7A1F0] bg-[#EDE3FB] rounded-lg textarea h-[3rem] mt-[1%] focus:outline-none focus:ring focus:ring-violet-500"
        ></textarea>
        <button
          className=" bg-[#6941E1] w-[12%] h-[3rem] mx-auto font-medium mt-[2%] text-[#EDE3FB] text-[110%] rounded-lg"
          onClick={handleVideo}
        >
          Generate video
        </button>
      </div>
    </div>
  );
}
