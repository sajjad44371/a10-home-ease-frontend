import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthContext";
import { use } from "react";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => {
        console.log("Error happened", error.code);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary hover:bg-transparent">
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/services"
          className="hover:text-primary hover:bg-transparent"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-services"
          className="hover:text-primary hover:bg-transparent"
        >
          My Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-service"
          className="hover:text-primary hover:bg-transparent"
        >
          Add Service
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/my-bookings"
          className="hover:text-primary hover:bg-transparent"
        >
          My Bookings
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar sticky top-0 z-10 lg:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-start items-center gap-1">
          <img src={logo} alt="logo" className="w-[20%] sm:w-[10%]" />
          <Link
            to="/"
            className="text-xl font-bold text-primary font-heading normal-case"
          >
            HomeEase
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* login-logout toggle  */}
      <div className="navbar-end space-x-3">
        {user && (
          <Link to="/profile" className="btn btn-ghost btn-circle">
            <BsPersonCircle className="h-6 w-6" title="My Profile" />
          </Link>
        )}
        {user ? (
          <Link
            onClick={handleLogout}
            className="btn btn-primary text-white duration-200 rounded-lg"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary text-white duration-200 rounded-lg"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
