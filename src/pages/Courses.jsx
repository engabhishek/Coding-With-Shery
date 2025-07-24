import React from "react";
import CoursesOffered from "../components/CoursesOffered";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white pt-52 m-8">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
        We're not a{" "}
        <span className="text-red-200">
          course <br /> factory.
        </span>
      </h1>
      <p className="text-xl p-3 font-mono">
        We focus courses thet really help....
      </p>
      <p className="text-xl my-20">Courses which do work ↓</p>
      <CoursesOffered />
      <Footer />
    </div>
  );
};

export default Courses;
