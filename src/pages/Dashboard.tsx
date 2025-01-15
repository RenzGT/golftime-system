import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Landing Page!</h1>
        <p className="text-xl text-gray-600 mt-4">You have successfully logged in.</p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
