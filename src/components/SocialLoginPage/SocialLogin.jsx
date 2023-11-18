/* eslint-disable no-unused-vars */
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../customsHooks/useAuth/useAuth";
import useAxiosPublic from "../../customsHooks/useAxiosInPublic/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="p-8 mx-auto">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2 w-[24px] h-[24px]"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
