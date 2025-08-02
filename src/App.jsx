import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import MainRoute from "./routes/MainRoute";
import BgBluredBols from "./components/general/BgBluredBols";
import { asyncCurrentUser } from "./store/actions/userAction";
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  });

  return (
    <>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for Firefox */
          body {
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="relative bg-[#000000c6] text-white min-h-screen overflow-y-scroll">
        <BgBluredBols />
        <div className="relative z-10">
          <NavBar />
          <MainRoute />
        </div>
      </div>
    </>
  );
};

export default App;
