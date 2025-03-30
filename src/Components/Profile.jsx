import React from "react";
import { UserCircle, LogOut, Save } from "lucide-react";

const Profile = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Personal Information</h1>
      </div>

      <div className="flex flex-col items-center text-center">
        <UserCircle size={100} className="text-gray-400" />
        <h2 className="mt-3 text-2xl font-semibold">Juan</h2>
      </div>

      <div className="mt-6 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Full Name</p>
          <p className="font-medium text-lg">Juan Dela Cruz</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium text-lg">jmangjuan23@example.com</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Contact Number</p>
          <p className="font-medium text-lg">+63 912 345 6789</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-500 text-sm">Change Password</p>
          <button className="text-blue-600 font-medium hover:underline">
            Update Password
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="flex items-center bg-green-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
          <Save size={20} className="mr-2" />
          Save
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <button className="flex items-center bg-red-500 text-white py-3 px-30 rounded-lg shadow-md hover:bg-red-600 transition">
          <LogOut size={20} className="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
