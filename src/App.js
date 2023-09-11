import Landing from "./components/Landing";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="overflow-x-hidden font-Inter ">
      <Routes>
        <Route path="/" Component={Landing} exact />
      </Routes>
    </div>
  );
}

export default App;
