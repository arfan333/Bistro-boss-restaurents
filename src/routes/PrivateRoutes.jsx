/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../PROVIDERS/AUTH/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-ball loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;
