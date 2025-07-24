import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="w-full mt-6">
      <Link to={props.url}>
        <div className="w-full bg-gray-800 text-white text-lg px-6 py-2 rounded-xl font-semibold text-center hover:bg-gray-700 transition duration-300">
          View Details
        </div>
      </Link>
    </div>
  );
};

export default Button;
