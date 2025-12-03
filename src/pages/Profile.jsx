import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center">
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-28 h-28 rounded-full border-4 border-teal-500 shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          Name: {user?.displayName}
        </h2>
        <p className="text-gray-500">Email: {user?.email}</p>

        <div className="mt-6 bg-gray-50 rounded-lg p-3 text-sm">
          <p className="text-gray-600">
            <span className="font-semibold text-teal-600">Last Login:</span>{" "}
            {user?.lastLogin || "Not available"}
          </p>
        </div>

        <button className="mt-6 btn btn-primary text-white px-6 py-2 rounded-lg transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
