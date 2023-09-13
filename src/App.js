import Landing from "./components/Landing";
import Admin from "./components/Admin";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="overflow-x-hidden font-Inter ">
      <Routes>
        <Route path="/" Component={Landing} exact />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </div>
  );
}

export default App;
