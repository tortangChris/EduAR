import React from "react";
import { ClipboardCheck, ArrowRight } from "lucide-react";

const Assessment = () => {
  const challenges = [
    {
      title: "AR/VR Code Tracing Challenge",
      subtitle: "Bubble Sort Algorithm",
      objective: "Understand how an algorithm executes step-by-step",
    },
    {
      title: "AR Debugging Challenge",
      subtitle: "Incorrect Loop Condition",
      objective: "Identify and fix errors in pseudocode",
    },
    {
      title: "VR Graph Traversal Adventure",
      subtitle: "A Maze",
      objective:
        "Learn Depth-First Search (DFS) and Breadth-First Search (BFS)",
    },
    {
      title: "AR Step-by-Step Algorithm Assembly",
      subtitle: "Drags and connects blocks",
      objective: "Construct an algorithm by placing steps in the correct order",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Interactive Assessment</h1>
      </div>
      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <div key={index} className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-3">
              <div className="bg-gray-200 p-3 rounded-lg">
                <ClipboardCheck className="w-8 h-12 text-gray-600" />
              </div>
              <div>
                <p className="font-medium">{challenge.title}</p>
                <p className="text-sm text-gray-500">{challenge.subtitle}</p>
                <p className="mt-3 text-sm italic text-gray-700 text-center">
                  Objective: {challenge.objective}
                </p>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#9047FF] text-white py-2 rounded-lg font-semibold flex items-center justify-center">
              Start Challenge <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
