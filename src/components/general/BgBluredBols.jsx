import React from "react";

const BgBluredBols = (props) => {
  return (
    <div>
      <div className="w-72 h-72 absolute top-10 left-10 bg-white opacity-10 blur-3xl rounded-full"></div>
      <div className="w-64 h-64 absolute top-20 right-20 bg-white opacity-10 blur-2xl rounded-full"></div>
      <div className="w-52 h-52 absolute top-1/2 left-1/3 bg-white opacity-10 blur-2xl rounded-full"></div>
      
    </div>
  );
};

export default BgBluredBols;
