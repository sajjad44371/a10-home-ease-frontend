import React from "react";
import { motion } from "framer-motion";
import { Home, Wrench, Zap, Droplets, Sparkles, Fan } from "lucide-react";

const Loading = () => {
  const icons = [
    { Icon: Wrench, color: "text-orange-500", delay: 0 },
    { Icon: Zap, color: "text-yellow-500", delay: 0.2 },
    { Icon: Droplets, color: "text-blue-500", delay: 0.4 },
    { Icon: Sparkles, color: "text-green-500", delay: 0.6 },
    { Icon: Fan, color: "text-cyan-500", delay: 0.8 },
  ];

  return (
    /* Full Screen Overlay wrapper */
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Central Home Icon with Pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="z-10 bg-white p-6 rounded-full shadow-2xl border border-blue-50/50"
        >
          <Home size={60} className="text-blue-600" />
        </motion.div>

        {/* Orbiting Icons */}
        {icons.map((item, index) => {
          const angle = index * (360 / icons.length) * (Math.PI / 180);
          const x = Math.cos(angle) * 100; // Expanded radius for full screen
          const y = Math.sin(angle) * 100;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [x, x + 8, x],
                y: [y, y - 8, y],
              }}
              transition={{
                delay: item.delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute p-4 bg-white rounded-full shadow-lg border border-slate-50 ${item.color}`}
            >
              <item.Icon size={28} />
            </motion.div>
          );
        })}

        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute w-52 h-52 border-2 border-dashed border-blue-200/60 rounded-full"
        />
      </div>

      {/* Loading Text & Progress Bar */}
      <div className="mt-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-slate-800 tracking-tight"
        >
          Loading Home Services...
        </motion.h3>

        <div className="w-64 h-2 bg-slate-200 rounded-full mt-6 overflow-hidden shadow-inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-full h-full bg-linear-to-r from-blue-400 via-blue-600 to-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
