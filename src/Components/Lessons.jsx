import React from "react";
import { BookOpen } from "lucide-react";

const Lessons = () => {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3">
        <BookOpen size={32} className="text-blue-600" />
        <h1 className="text-2xl font-bold">Lessons</h1>
      </div>
      <p className="text-gray-600 mt-2">
        Browse topics in Data Structures & Algorithms.
      </p>
    </div>
  );
};

export default Lessons;
