import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

const Lessons = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Interactive Algorithm Learning</h1>
      </div>

      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center"></div>
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
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center"></div>
        <div className="mt-2 flex items-center space-x-3">
          <div className="bg-gray-200 p-3 rounded-lg">
            <img
              src="https://via.placeholder.com/40"
              alt="Lesson"
              className="w-10 h-10"
            />
          </div>
          <div>
            <p className="font-medium">Searching Algorithms</p>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
          <div className="ml-auto">
            <span className="text-green-500 font-bold">
              <ArrowRight size={24} className="mr-2" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center"></div>
        <div className="mt-2 flex items-center space-x-3">
          <div className="bg-gray-200 p-3 rounded-lg">
            <img
              src="https://via.placeholder.com/40"
              alt="Lesson"
              className="w-10 h-10"
            />
          </div>
          <div>
            <p className="font-medium">Searching Algorithms</p>
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

export default Lessons;
