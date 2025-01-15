import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If there is no token, redirect to login page
    return <Navigate to="/" />;
  }

  // If there is a token, render the children (dashboard page in this case)
  return <>{children}</>;
};

export default ProtectedRoute;
