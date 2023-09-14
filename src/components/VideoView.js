import ReactPlayer from "react-player";
import React, { useRef } from "react";
import Navbar from "./Navbar";
import Puppy from "../Videos/Puppy.mp4";
const VideoView = () => {
  const playerRef = useRef(null);
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div className="h-screen w-screen bg-[#EDE3FB] relative">
      <Navbar isLoggedIn />
      <div className="flex-col justify-between absolute top-[30%] left-[30%]">
        <div className="w-[25%] h-[25%] object-fill rounded-md bg-white p-3">
          <video className="w-full" ref={videoRef}>
            <source src={Puppy} />
          </video>
        </div>
        <div className="my-3">
          <button
            className="rounded-full text-[#EDE3FB] w-20 h-[120%] mx-3 bg-[#6941E1]"
            onClick={handlePlay}
          >
            Play
          </button>

          <button
            className="rounded-full text-[#EDE3FB] w-20 h-[120%] mx-3 bg-[#6941E1]"
            onClick={handlePause}
          >
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoView;
