// components/SplashScreen.jsx
import React from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-white z-[100]"
    >
      <motion.img
        src="/images/LogoNOBG.webp"
        alt="Logo"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="w-40 h-auto"
      />
    </motion.div>
  );
};

export default SplashScreen;
