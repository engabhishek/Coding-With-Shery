import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogOutUser, asyncUpdateUser } from "../store/actions/userAction";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.users);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center mt-20 text-xl text-red-500">
        You are not logged in.
      </div>
    );
  }

  const initial =
    user.firstName?.charAt(0).toUpperCase() ||
    user.email?.charAt(0).toUpperCase();

  const logoutHandeler = () => {
    dispatch(asyncLogOutUser());
    navigate("/login");
  };


  return (
    <div className="max-w-md mx-auto mt-56 p-6 ">
      <div className=" bg-[#1e1e1e] p-6 mx-auto shadow-lg rounded-2xl text-center ">
        <div className="w-32 h-32 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold mb-4 border-4 border-blue-800">
          {initial}
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600 mx-8">{user.email}</p>
       
      </div>
      <div className="text-end m-8">
        <button
          onClick={logoutHandeler}
          className="bg-red-400 hover:bg-red-600 px-4 py-2 rounded text-sm font-bold text-white transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
