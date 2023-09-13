import Landing from "./components/Landing";
import Userview from "./components/Userview";
import React, { useEffect, useState } from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="overflow-x-hidden font-Inter ">
      <Routes>
        <Route path="/" Component={Landing} exact />
        <Route path="/User" Component={Userview} exact />
      </Routes>
    </div>
  );
}

export default App;
