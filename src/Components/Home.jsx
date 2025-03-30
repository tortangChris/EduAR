import React from "react";
import { Home, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 relative">
      {/* Settings Icon at Top-Right */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
        onClick={() => navigate("/settings")}
      >
        <Settings size={24} className="text-gray-600" />
      </button>

      <div className="flex items-center space-x-3">
        <Home size={32} className="text-blue-600" />
        <h1 className="text-2xl font-bold">Welcome to EduAR</h1>
      </div>
      <p className="text-gray-600 mt-2">
        Explore Data Structures & Algorithms with AR/VR.
      </p>
    </div>
  );
};

export default HomePage;
