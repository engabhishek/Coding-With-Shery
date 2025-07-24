import React from "react";

const CompanyLogos = () => {
  return (
    <div className="py-10 px-4">
      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-20">
        <div className="w-64 h-64 absolute left-1/2 top-1/3 -translate-x-1/2 bg-white opacity-10 blur-3xl rounded-full pointer-events-none z-0"></div>
        <div className="flex flex-wrap justify-center gap-16">
          <a href="https://www.netlify.com/" target="_blank">
            <img
              src="/Assets/netlink.png"
              alt="Netlink"
              className="h-10 md:h-12 lg:h-16 object-contain"
            />
          </a>
          <a href="https://www.mindtree.com/" target="_blank">
            <img
              src="/Assets/midtree.png"
              alt="Mindtree"
              className="h-10 md:h-12 lg:h-16 object-contain"
            />
          </a>
          <a href="https://www.walmart.com/" target="_blank">
            <img
              src="/Assets/walmart.png"
              alt="Walmart"
              className="h-10 md:h-12 lg:h-16 object-contain"
            />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-16 md:gap-28 lg:gap-32">
          <a href="https://www.tcs.com/" target="_blank">
            <img
              src="/Assets/tcs.png"
              alt="TCS"
              className="h-10 md:h-12 lg:h-16 object-contain"
            />
          </a>
          <a href="https://www.amazon.in/" target="_blank">
            <img
              src="/Assets/amazon.png"
              alt="Amazon"
              className="h-10 md:h-12 lg:h-16 object-contain"
            />
          </a>
          <a href="https://www.wopro.com/" target="_blank">
            <img
              src="/Assets/wipro.png"
              alt="Wipro"
              className="h-10 md:h-12 lg:h-16 object-contain"
            />
          </a>
          <a href="https://www.geeksforgeeks.org/" target="_blank">
            <img
              src="/Assets/geekforgeeks.png"
              alt="GeeksforGeeks"
              className="h-10 md:h-12 lg:h-16 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
