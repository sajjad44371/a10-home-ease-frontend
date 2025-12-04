import React, { useState, useMemo, use } from "react";
import {
  Mail,
  User,
  Lock,
  Image,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });

  const [validPassword, setValidPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      setValidPassword(true);
    }
  };

  const validation = useMemo(() => {
    const password = formData.password || "";
    return {
      minLength: password.length >= 6,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      isValid:
        password.length >= 6 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password),
    };
  }, [formData.password]);

  const handleRegister = (e) => {
    e.preventDefault();
    setValidPassword(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    console.log(name, email, photoUrl, password);

    if (validation.isValid) {
      console.log("Registration Data Submitted:", formData);
      // TODO: Add your actual registration logic here (e.g., API call to Firebase/Backend)
      createUser(email, password)
        .then((userCredential) => {
          // Signed up
          const currentUser = userCredential.user;
          console.log(currentUser);
          alert("User created Successfully");
          e.target.reset();
        })
        .catch((error) => {
          console.error(error.code);
          alert(error.code);
        });
      alert("Registration Attempted! Check the console for data.");
    } else {
      alert("Please correct the errors in the password field.");
    }
  };

  const renderValidationItem = (condition, text) => {
    const Icon = condition ? CheckCircle : XCircle;
    const colorClass = condition ? "text-success" : "text-error";
    return (
      <li className={`flex items-center text-sm ${colorClass}`}>
        <Icon size={14} className="mr-2" />
        {text}
      </li>
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="py-20 bg-base-100 flex justify-center items-center w-full">
      <div className="card w-full max-w-lg bg-white shadow-2xl p-8 lg:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-base-content mb-2">
            Create Your HomeHero Account
          </h2>
          <p className="text-gray-500">
            Join us to find verified Pros for all your home needs.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <User size={16} className="mr-2 text-primary" /> Full Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered border-primary outline-primary w-full"
              required
            />
          </div>

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
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered border-primary outline-primary w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center font-medium">
                <Image size={16} className="mr-2 text-primary" /> Profile Photo
                URL
              </span>
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Link to your profile picture"
              value={formData.photoUrl}
              onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                onBlur={() => setValidPassword(true)}
                className={`input input-bordered w-full pr-12 ${
                  validPassword && !validation.isValid ? "input-error" : ""
                }`}
                required
                minLength={6}
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

            {validPassword && (
              <ul className="mt-2 pl-1 space-y-1">
                {renderValidationItem(
                  validation.minLength,
                  "Minimum 6 characters"
                )}
                {renderValidationItem(
                  validation.hasUppercase,
                  "At least one uppercase letter (A-Z)"
                )}
                {renderValidationItem(
                  validation.hasLowercase,
                  "At least one lowercase letter (a-z)"
                )}
              </ul>
            )}
          </div>

          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary shadow-lg text-white rounded-lg"
              disabled={validPassword && !validation.isValid}
            >
              Register Account
            </button>
          </div>

          <div className="text-center text-sm pt-4">
            <p className="text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-primary hover:underline ml-1 font-semibold"
              >
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
