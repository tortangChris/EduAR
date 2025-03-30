import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Book, ClipboardList, User, Settings } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Lessons", path: "/lessons", icon: Book },
  { name: "Assessment", path: "/assessment", icon: ClipboardList },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around py-3 border-t border-gray-300">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative flex flex-col items-center text-gray-500 text-sm transition-all duration-300 group`
          }
        >
          {({ isActive }) => (
            <div className="relative flex flex-col items-center">
              <div
                className={`relative transition-all duration-300 ${
                  isActive ? "translate-y-[-5px]" : ""
                }`}
              >
                <item.icon
                  size={26}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-500 group-hover:text-blue-500"
                  }`}
                />
                {isActive && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full blur-md opacity-50"></div>
                )}
              </div>
              <span
                className={`mt-1 text-xs transition-all duration-300 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500 group-hover:text-blue-500"
                }`}
              >
                {item.name}
              </span>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
