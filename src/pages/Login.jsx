import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="py-20 bg-base-100 flex justify-center items-center w-full">
      <div className="card w-full max-w-lg bg-white shadow-2xl p-8 lg:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-base-content mb-2">
            Login Your HomeHero Account
          </h2>
          <p className="text-gray-500">
            Join us to find verified Pros for all your home needs.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <Mail size={16} className="mr-2 text-primary" /> Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your valid email"
              className="input input-bordered border-primary outline-primary w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <Lock size={16} className="mr-2 text-primary" /> Password
              </span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter a strong password"
                className="input input-bordered border-primary outline-primary w-full"
                required
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-primary transition-colors duration-200 z-10 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary shadow-lg text-white rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="text-center text-sm pt-4">
            <p className="text-gray-600">
              Don't have an account?
              <Link
                to="/register"
                className="text-primary hover:underline ml-1 font-semibold"
              >
                Register Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
