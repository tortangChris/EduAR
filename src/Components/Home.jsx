import React from "react";
import { Home } from "lucide-react";

const HomePage = () => {
  return (
    <div className="p-6">
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
