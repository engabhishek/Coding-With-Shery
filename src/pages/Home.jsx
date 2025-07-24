import { useEffect, useState, useRef } from "react";
import { Link, Links } from "react-router-dom";
import CountUp from "react-countup";
import CoursesOffered from "../components/CoursesOffered";
import CompanyLogos from "../components/Companies";
import Footer from "../components/Footer";
import BgBluredBols from "../components/general/BgBluredBols";
import TypingText from "../components/general/TypingText";

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

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [heroRef, heroVisible] = useInView();
  const [statsRef, statsVisible] = useInView();
  const [conceptRef, conceptVisible] = useInView();
  const [videoRef, videoVisible] = useInView();
  const [buttonRef, buttonVisible] = useInView();
  const [headingRef, headingVisible] = useInView();

  const buttonHandler = () =>
    window.open("https://www.youtube.com/@sheryians", "_blank");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#000000c6] min-h-screen overflow-hidden text-white pt-24">
      <BgBluredBols />
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className={`flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-16 transform transition-all duration-1000 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
          <div
            ref={heroRef}
            className={`flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-16 transform transition-all duration-1000 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-20"
            }`}
          >
            <TypingText start={true} />

            <Link className="pt-10" to="/courses">
              <button className="bg-green-300 text-black font-semibold px-4 sm:px-6 lg:px-8 py-2 rounded transition-all duration-500 hover:scale-105 hover:bg-green-500 hover:text-white text-sm sm:text-base lg:text-lg">
                check Courses - make an impact
              </button>
            </Link>
          </div>
        </div>

        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-10 md:gap-24 lg:justify-between lg:mx-32 my-28 px-4"
        >
          {[25000, 20, 552000].map((val, i) => (
            <div
              key={i}
              className="w-1/2 sm:w-auto text-center px-4 mb-8 sm:mb-0 transform transition-all duration-700"
              style={{
                transitionDelay: `${i * 200 + 200}ms`,
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h1 className="font-bold text-3xl sm:text-4xl">
                <CountUp
                  end={val}
                  duration={2}
                  separator=","
                  suffix={i === 2 ? "+" : val === 20 ? "+" : "+"}
                />
              </h1>
              <p className="font-semibold text-base sm:text-lg">
                {i === 0
                  ? "Students taught"
                  : i === 1
                  ? "Instructors"
                  : "YouTube Subs.."}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={conceptRef}
          className={`relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 font-mono transform transition-all duration-1000 ${
            conceptVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug">
            we do whatever it takes to
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-red-300 mt-2">
              help you
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-2">
              understand the concept
            </span>
          </h1>
        </div>

        <div
          ref={videoRef}
          className={`aspect-video rounded-xl overflow-hidden shadow-2xl m-20 transform transition-all duration-700 delay-600 hover:scale-105 ${
            videoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <iframe
            className="w-full lg:px-36 lg:pt-36 lg:pb-24 h-full"
            src="https://www.youtube.com/embed/60SRAWmMXyc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div
          ref={buttonRef}
          className={`text-center transform transition-all duration-700 delay-800 ${
            buttonVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <button
            onClick={buttonHandler}
            className="bg-green-300 text-black font-semibold mx-2 my-2 px-6 py-2 rounded transform transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:text-white"
          >
            Explore Free Learning
          </button>
        </div>

        <div
          ref={headingRef}
          className="transform transition-all duration-700 delay-1000"
          style={{
            opacity: headingVisible ? 0.4 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h1 className="text-6xl my-20 mx-16">Courses Offered.</h1>
        </div>
      </div>
      <CoursesOffered />
      <div className="flex justify-center items-center text-center font-mono my-40">
        <h1 className=" text-3xl md:text-5xl">
          Top <span className="text-red-200">Companies</span> <br />
          our students working with
        </h1>
      </div>
      <CompanyLogos />
      <Link className="flex justify-center my-20" to="/courses">
        <button className="bg-green-300 text-xl text-black font-semibold mx-2 my-2 px-6 py-2 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:text-white">
          Explore Courses
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
