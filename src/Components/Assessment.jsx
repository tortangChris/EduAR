import React from "react";
import { ClipboardCheck } from "lucide-react";

const Assessment = () => {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3">
        <ClipboardCheck size={32} className="text-blue-600" />
        <h1 className="text-2xl font-bold">Assessment</h1>
      </div>
      <p className="text-gray-600 mt-2">
        Test your knowledge with quizzes and exercises.
      </p>
    </div>
  );
};

export default Assessment;
