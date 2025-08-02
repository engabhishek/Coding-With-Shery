import { SignatureIcon } from "lucide-react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { asyncLoginUser, asyncRegisterUser } from "../store/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [mode, setMode] = useState("signup");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    if (mode === "signup") {
      console.log("Creating account with:", user);
      user.id = nanoid();
      dispatch(asyncRegisterUser(user));
      setMode("signin")
    } else {
      dispatch(asyncLoginUser(user))
      console.log("Signing in with:", user);
      navigate("/")
    }
    reset();
  };

  const handleGoogleSignIn = () => {
    const fakeUser = {
      name: "John Doe",
      email: "johndoe@gmail.com",
      provider: "Google",
    };
    setUser(fakeUser);
    console.log("Signed in with Google:", fakeUser);
  };

  const handleAppleSignIn = () => {
    const fakeUser = {
      name: "Jane Smith",
      email: "jane@icloud.com",
      provider: "Apple",
    };
    setUser(fakeUser);
    console.log("Signed in with Apple:", fakeUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-45 pt-20 px-4">
      <div className="w-full flex flex-col md:flex-row bg-transparent rounded-2xl  overflow-hidden">
        <div className="w-full lg:w-1/2 bg-transparent bg-opacity-40 pt-36 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
            Welcome to <br /> Sheryians{" "}
            <span className="text-red-500">Coding</span> School
          </h2>
          <p className="text-gray-700 mb-6 text-sm lg:text-base">
            To keep connected with us please login with your personal info.
          </p>
          <img
            src="public/the_sheryians_coding_school_logo.png"
            alt="Sheryians coding school"
            className="w-40 h-40 md:w-64 md:h-64 object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center relative rounded-2xl">
          <div className="w-full max-w-md bg-[#1c1c1c]  bg-opacity-30 backdrop-blur-lg rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex bg-black p-1 rounded-full w-max">
                <button
                  className={`px-5 py-2 rounded-full transition-all duration-200 text-sm ${
                    mode === "signup"
                      ? "bg-white text-black font-semibold"
                      : "text-gray-400"
                  }`}
                  onClick={() => setMode("signup")}
                >
                  Sign up
                </button>
                <button
                  className={`px-5 py-2 rounded-full transition-all duration-200 text-sm ${
                    mode === "signin"
                      ? "bg-white text-black font-semibold"
                      : "text-gray-400"
                  }`}
                  onClick={() => setMode("signin")}
                >
                  Sign in
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {mode === "signup" ? "Create an account" : "Welcome back"}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {mode === "signup" && (
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="text"
                    placeholder="First name"
                    {...register("firstName", { required: true })}
                    className="w-full sm:w-1/2 bg-[#1e1e1e] rounded-md px-4 py-2 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    {...register("lastName", { required: true })}
                    className="w-full sm:w-1/2 bg-[#1e1e1e] rounded-md px-4 py-2 focus:outline-none"
                  />
                </div>
              )}

              <div className="flex items-center bg-[#1e1e1e] rounded-md px-4 py-2">
                <span className="text-gray-400 mr-2">📧</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                  className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                />
              </div>
              {mode === "signin" && (
                <div className="text-center bg-[#1e1e1e] text-gray-400 font-bold rounded-3xl ">
                  Or
                </div>
              )}
              <div className="flex items-center bg-[#1e1e1e] rounded-md px-4 py-1 space-x-3">
                <div className="relative">
                  <select
                    {...register("country", { required: true })}
                    defaultValue="US"
                    className="appearance-none bg-[#1e1e1e] text-white px-3 py-2 pr-8 rounded-md text-sm focus:outline-none"
                  >
                    <option value="US">US +1</option>
                    <option value="IN">IN +91</option>
                    <option value="GB">GB +44</option>
                    <option value="CA">CA +1</option>
                    <option value="AU">AU +61</option>
                  </select>
                  <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs">
                    ▼
                  </div>
                </div>

                <input
                  type="tel"
                  placeholder="Phone number"
                  {...register("phone", { required: true })}
                  className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400 text-sm"
                />
              </div>
                <div className="flex items-center bg-[#1e1e1e] rounded-md px-4 py-2">
                  <span className="text-gray-400 mr-2">🔒</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                    className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
              

              <button
                type="sumbit"
                className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-100 transition"
              >
                {mode === "signup" ? "Create an account" : "SignIn"}
              </button>
            </form>

            <div className="my-4 text-center text-sm text-gray-400">
              OR SIGN IN WITH
            </div>

            <div className="flex space-x-3 mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="w-1/2 flex items-center justify-center space-x-2 bg-[#1e1e1e] py-2 rounded-md hover:bg-[#2c2c2c] transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Google</span>
              </button>

              <button
                onClick={handleAppleSignIn}
                className="w-1/2 flex items-center justify-center space-x-2 bg-[#1e1e1e] py-2 rounded-md hover:bg-[#2c2c2c] transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-5 h-5"
                />
                <span>Apple</span>
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              By creating an account, you agree to our{" "}
              <a
                href="https://sheryians.com/terms-and-conditions/Terms_and_Conditions.pdf"
                target="_blank"
                className="underline cursor-pointer"
              >
                Terms & Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
