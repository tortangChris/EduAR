import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Home, Settings } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="p-6">
      {/* Top Bar with Settings Icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">EduAR</h1>
        <Settings
          size={24}
          className="text-gray-600 cursor-pointer"
          onClick={() => navigate("/settings")} // Navigate to Settings page
        />
      </div>

      {/* Overall Progress Section */}
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
        <p className="text-sm font-medium">Overall Progress</p>
        <div className="flex items-center justify-between">
          {/* Circular Progress Indicator */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="absolute w-full h-full" viewBox="0 0 36 36">
              <circle
                className="stroke-gray-300"
                strokeWidth="2"
                fill="none"
                cx="18"
                cy="18"
                r="16"
                strokeDasharray="100"
                strokeDashoffset="0"
              />
              <circle
                className="stroke-dashed stroke-white"
                strokeWidth="2"
                fill="none"
                cx="18"
                cy="18"
                r="16"
                strokeDasharray="4 3"
                strokeDashoffset="0"
              />
            </svg>
            <span className="text-xl font-bold">0%</span>
          </div>

          {/* Goals Completed Info */}
          <div className="text-right text-sm">
            <p>Goals Completed</p>
            <p>Modules 0/12</p>
            <p>Lessons 0/36</p>
            <p>Interactive Assessment 0/24</p>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="mt-4">
        <p className="text-gray-600 font-semibold mb-2">Quick Start</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            Not Available.
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            Not Available.
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            Not Available.
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            Not Available.
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Recent Activity</p>
        </div>
        <div className="mt-2 flex items-center space-x-3">
          <div className="bg-gray-200 p-3 rounded-lg">
            <img
              src="https://via.placeholder.com/40"
              alt="Lesson"
              className="w-10 h-10"
            />
          </div>
          <div>
            <p className="font-medium">Introduction to Algorithms</p>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
          <div className="ml-auto">
            <span className="text-green-500 font-bold">
              <ArrowRight size={24} className="mr-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
