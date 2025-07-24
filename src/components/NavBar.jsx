import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen || animateOut ? "hidden" : "auto";
  }, [isOpen, animateOut]);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setIsOpen(false);
      setAnimateOut(false);
    }, 500);
  };

  const toggleMenu = () => {
    if (isOpen && !animateOut) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        ref={navRef}
        className={`w-full px-6 bg-black/60 backdrop-blur-lg text-white shadow-md z-50 fixed top-0 left-0 transition-all duration-700 ease-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
      >
        <div className="flex justify-between items-center font-mono">
          <NavLink to="/" className="flex items-center gap-2 z-50">
            <img
              src="./the_sheryians_coding_school_logo.png"
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight">
              Sheryians <span className="text-red-500">Coding</span> School
            </h1>
          </NavLink>

          <ul className="hidden md:flex gap-8 items-center text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-xl border-b-2 border-blue-500"
                  : "hover:text-blue-400 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-xl border-b-2 border-blue-500"
                  : "hover:text-blue-400 transition"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/kodr"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold text-2xl border-b-2 border-blue-500"
                  : "text-red-300 text-xl hover:text-red-800 transition animate-bounce"
              }
            >
              <span className="animate-pulse">KODR</span>
            </NavLink>
            <NavLink
              to="/requestCallback"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 text-xl border-b-2 border-blue-500"
                  : "hover:text-blue-400 transition"
              }
            >
              Request Callback
            </NavLink>
            <NavLink to="/login">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm text-white transition">
                Sign In
              </button>
            </NavLink>
          </ul>

          <button onClick={toggleMenu} className="md:hidden z-50">
            {isOpen && !animateOut ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>

        {(isOpen || animateOut) && (
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 text-white z-40 flex flex-col justify-center items-center transition-all
              ${isOpen && !animateOut ? "animate-slideDown" : ""}
              ${animateOut ? "animate-slideUp" : ""}
            `}
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-mono">
              <NavLink
                to="/"
                onClick={handleClose}
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/courses"
                onClick={handleClose}
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.5s",
                  animationFillMode: "forwards",
                }}
              >
                Courses
              </NavLink>
              <NavLink
                to="/kodr"
                onClick={handleClose}
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.6s",
                  animationFillMode: "forwards",
                }}
              >
                KODR
              </NavLink>
              <NavLink
                to="/requestCallback"
                onClick={handleClose}
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.7s",
                  animationFillMode: "forwards",
                }}
              >
                Request Callback
              </NavLink>
              <NavLink
                to="/login"
                onClick={handleClose}
                className="mt-6 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                }}
              >
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white transition">
                  Sign In
                </button>
              </NavLink>
            </ul>
          </div>
        )}
      </nav>

      <style>
        {`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-in forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        `}
      </style>
    </>
  );
};

export default NavBar;
