import React from "react";
import { useEffect, useState, useRef } from "react";
import BgBluredBols from "../components/general/BgBluredBols";

const useInView = () => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const Kodr = () => {
  const [videoRef, videoVisible] = useInView();

  return (
    <div className="relative min-h-screen overflow-hidden text-white pt-36 bg-black">
      <BgBluredBols />
      <div className="w-full flex flex-col lg:flex-row md:items-center">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-start px-20 leading-loose">
          <h1 className="text-4xl lg:text-7xl font-semibold lg:text-left md:leading-relaxed lg:leading-normal">
            100 Days In-House Bootcamp Programme - KODR..
          </h1>

          <div className="m-8 bg-[#1c1c1c] px-8 py-1 rounded-xl">
            start On: 7 July 2025{" "}
            <div className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold ml-1">
              ✓
            </div>
          </div>
          <div className="px-8 py-1">
            <h1 className="text-2xl font-semibold font-mono">
              Fee <span className="text-red-300">₹ 59000 </span> [ 50,000 + 18%
              GST]{" "}
            </h1>
            <button className="px-8 py-2 lg:py-4 text-xl lg:text-2xl bg-red-400 font-semibold rounded-xl mx-4 my-8">
              Register Now
            </button>
          </div>
        </div>

        <div
          ref={videoRef}
          className={`w-full lg:w-1/2 order-1 lg:order-2 aspect-video rounded-2xl overflow-hidden shadow-2xl p-10 lg:m-20 transform transition-all duration-700 delay-600 hover:scale-105 ${
            videoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/AptmHn3bJoY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h1 className="text-8xl lg:text-9xl font-bold mx-8 my-20">
        We Believe in, <span className="text-red-300">Consistency.</span> No
        Shortcuts.
      </h1>

      <div className="flex flex-col  mx-8 my-20 bg-black">
        <div className="text-left leading-[1] font-extrabold px-4">
          <h1 className="text-white text-[5rem] md:text-[10rem]">Non-</h1>
          <h1 className="text-white text-[5rem] md:text-[10rem]">Stop</h1>
          <h1 className="text-red-300 text-[5rem] md:text-[10rem]">4 Hours</h1>
          <h1 className="text-white text-[5rem] md:text-[10rem]">Coding <span className="text-3xl">[ EveryDay ]</span> </h1>
        </div>
        <h1 className="text-2xl font-semibold py-8 underline underline-offset-8">Monday To Saturday. 10:00 AM To 2:00 PM</h1>
      </div>
    </div>
  );
};

export default Kodr;
