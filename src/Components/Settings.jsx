import React from "react";
import {
  ArrowLeft,
  User,
  ShieldCheck,
  Moon,
  Bell,
  Star,
  Send,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const settingsOptions = [
  {
    category: "Account Settings",
    options: [
      {
        title: "Profile Information",
        desc: "Manage name, email, and security",
        icon: <User size={24} className="text-gray-600" />,
      },
      {
        title: "Privacy",
        desc: "Adjust your privacy settings",
        icon: <ShieldCheck size={24} className="text-gray-600" />,
      },
      {
        title: "Theme",
        desc: "Toggle between light and dark mode",
        icon: <Moon size={24} className="text-gray-600" />,
      },
    ],
  },
  {
    category: "Notifications",
    options: [
      {
        title: "Push Notifications",
        desc: "Enable or disable notifications",
        icon: <Bell size={24} className="text-gray-600" />,
      },
    ],
  },
  {
    category: "General",
    options: [
      {
        title: "Rate Our App",
        desc: "Give feedback and rate us",
        icon: <Star size={24} className="text-gray-600" />,
      },
      {
        title: "Send Feedback",
        desc: "Share your experience with us",
        icon: <Send size={24} className="text-gray-600" />,
      },
      {
        title: "Privacy Policy",
        desc: "View our privacy terms",
        icon: <FileText size={24} className="text-gray-600" />,
      },
    ],
  },
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-700 font-bold text-lg mb-4"
      >
        <ArrowLeft size={24} className="mr-2" />
        Settings
      </button>

      {settingsOptions.map((section, index) => (
        <div key={index} className="mb-4 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">{section.category}</h3>
          <div className="space-y-3">
            {section.options.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition"
              >
                {item.icon}
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Settings;
