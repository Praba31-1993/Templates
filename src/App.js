import React, { useState } from "react";
import "./App.css";
import Home from "./components/home";
import ButtonComponent from "./components/button";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/button" element={<ButtonComponent />} />
          <Route path="/home" element={<Home/>} />

        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
