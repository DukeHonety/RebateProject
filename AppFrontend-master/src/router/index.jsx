import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Setting from "../pages/Setting";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Routers;
