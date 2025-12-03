import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Image, User, X } from "lucide-react";
import { FaCross } from "react-icons/fa";

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

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Your Profile</h3>

            <div className="modal-action justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}

                <div className="text-left space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text flex items-center font-medium">
                        <User size={16} className="mr-2 text-primary" /> Full
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="input input-bordered border-primary outline-primary w-full"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text flex items-center font-medium">
                        <Image size={16} className="mr-2 text-primary" />{" "}
                        Profile Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="photoUrl"
                      placeholder="Link to your profile picture"
                      className="input input-bordered border-primary outline-primary w-full"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" btn btn-primary text-white px-6 py-2 rounded-lg transition"
                  >
                    Update
                  </button>
                </div>
                <button className="btn mt-4 text-right">
                  <X></X>
                </button>
              </form>
            </div>
          </div>
        </dialog>

        <button
          onClick={() => document.getElementById("my_modal").showModal()}
          className="mt-6 btn btn-primary text-white px-6 py-2 rounded-lg transition"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
