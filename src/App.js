import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Userview from "./components/Userview";
import VideoView from "./components/VideoView";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="overflow-x-hidden font-Inter ">
      <Routes>
        <Route path="/" Component={Landing} exact />
        <Route path="/admin" Component={Admin} />
        <Route path="/User" Component={Userview} exact />
        <Route path="/video" Component={VideoView} />
      </Routes>
    </div>
  );
}

export default App;
