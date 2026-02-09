import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Wrench, Home, Search, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      {/* Animated Illustration */}
      <div className="relative">
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Wrench
            size={100}
            className="text-primary mb-8 mx-auto stroke-[1.5]"
          />
        </motion.div>

        {/* Shadow Circle */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-200 rounded-[100%] blur-sm -z-10" />

        {/* Floating Warning Sign */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 bg-orange-500 text-white p-2 rounded-lg shadow-lg"
        >
          <AlertTriangle size={24} />
        </motion.div>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-9xl font-black text-slate-200">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 -mt-10 mb-4">
          Oops! Something Needs Fixing.
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mb-8">
          The page you are looking for has been moved, deleted, or perhaps it
          never existed. Don't worry, even the best engineers get lost
          sometimes!
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-200"
        >
          <Home size={20} />
          Back to Home
        </Link>

        <Link
          to="/services"
          className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:bg-primary text-slate-700 hover:text-white px-8 py-3 rounded-full font-semibold transition-all"
        >
          <Search size={20} />
          Browse Services
        </Link>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="fixed top-20 left-20 opacity-10 -z-10">
        <Wrench size={120} />
      </div>
      <div className="fixed bottom-20 right-20 opacity-10 -z-10 rotate-45">
        <Home size={150} />
      </div>
    </div>
  );
};

export default NotFound;
