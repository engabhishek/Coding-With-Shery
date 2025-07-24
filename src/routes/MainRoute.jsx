import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import RequestCall from "../pages/RequestCall";
import Kodr from "../pages/Kodr";
import LoginPage from "../pages/LoginPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/requestCallback" element={<RequestCall/> } />
      <Route path="/kodr" element={<Kodr/> } />
      <Route path="/login" element={<LoginPage/> } />

    </Routes>
  );
};

export default MainRoute;
