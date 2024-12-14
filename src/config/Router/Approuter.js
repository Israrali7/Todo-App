import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
