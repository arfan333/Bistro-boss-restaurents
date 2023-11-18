/* eslint-disable no-unused-vars */
import React from "react";
import error from "../../assets/404.gif";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-6xl">
      <img className="w-[648px] h-[455px] my-10 mx-auto" src={error} />
      <Link to={'/'}>
        <div className="bg-[#835D23] w-[139px] h-[24px] flex justify-center items-center gap-2 text-white mx-auto">
          <h1>Back To Home</h1>
          <p className="w-[24px] h-[24px]">
            <IoHomeOutline />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Error;
