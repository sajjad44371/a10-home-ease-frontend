import React from "react";
import { motion } from "framer-motion";
import { Home, Wrench, Zap, Droplets, Sparkles, Fan } from "lucide-react";

const Loading = () => {
  // Service icons and their positions in the circle
  const icons = [
    { Icon: Wrench, color: "text-orange-500", delay: 0 },
    { Icon: Zap, color: "text-yellow-500", delay: 0.2 },
    { Icon: Droplets, color: "text-blue-500", delay: 0.4 },
    { Icon: Sparkles, color: "text-green-500", delay: 0.6 },
    { Icon: Fan, color: "text-cyan-500", delay: 0.8 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-slate-50">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Central Home Icon with Pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="z-10 bg-white p-5 rounded-full shadow-xl border border-blue-100"
        >
          <Home size={48} className="text-blue-600" />
        </motion.div>

        {/* Orbiting Icons */}
        {icons.map((item, index) => {
          const angle = index * (360 / icons.length) * (Math.PI / 180);
          const x = Math.cos(angle) * 80; // Radius 80
          const y = Math.sin(angle) * 80;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [x, x + 5, x],
                y: [y, y - 5, y],
              }}
              transition={{
                delay: item.delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute p-3 bg-white rounded-full shadow-md ${item.color}`}
            >
              <item.Icon size={24} />
            </motion.div>
          );
        })}

        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute w-40 h-40 border-2 border-dashed border-blue-200 rounded-full"
        />
      </div>

      {/* Loading Text & Progress Bar */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-slate-700 tracking-wide">
          Loading Home Services...
        </h3>

        <div className="w-48 h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
