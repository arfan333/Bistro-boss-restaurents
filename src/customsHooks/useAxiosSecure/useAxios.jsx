/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../customsHooks/useAuth/useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // interceptors request api call section
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stopped by all interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //   interceptors 401 & 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async(error)=>{
      const status = error.response.status;
      // console.log("status error in interceptors:", status);
      if (status === 401 || status === 401) {
        await logOut();
        return navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;
