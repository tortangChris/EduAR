import React from "react";
import { UserCircle } from "lucide-react";

const Profile = () => {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3">
        <UserCircle size={32} className="text-blue-600" />
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>
      <p className="text-gray-600 mt-2">Manage your profile and settings.</p>
    </div>
  );
};

export default Profile;
