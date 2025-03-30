import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Book, ClipboardList, User, Settings } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Lessons", path: "/lessons", icon: Book },
  { name: "Assessment", path: "/assessment", icon: ClipboardList },
  { name: "Profile", path: "/profile", icon: User },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around py-3 border-t border-gray-300">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative flex flex-col items-center text-gray-500 text-sm transition-all duration-300 ${
                isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`relative transition-transform duration-300 ${
                    isActive ? "-translate-y-2" : ""
                  }`}
                >
                  <item.icon size={24} />
                </div>
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default BottomNav;
