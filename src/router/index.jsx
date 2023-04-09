import React from "react";
import Home from "../pages/home/Home";
import Converter from "../pages/converter/Converter";
import { Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      {/* <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/posts" element={<Posts />}></Route> */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/converter" element={<Converter />}></Route>
    </Routes>
  );
};

export default RouterApp;
