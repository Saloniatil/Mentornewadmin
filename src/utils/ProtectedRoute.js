import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("token");

  return auth ? <><Outlet /></> : <Navigate to="/admin/login" />
};

export default ProtectedRoute;
