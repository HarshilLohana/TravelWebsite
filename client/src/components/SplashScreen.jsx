// components/SplashScreen.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center bg-white z-[100] pointer-events-none"
        onAnimationComplete={onFinish}
      >
        <motion.img
          src="/images/LogoNOBG.webp"
          alt="Arabian Amenity Travels Logo"
          loading="eager"
          decoding="async"
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-28 sm:w-36 h-auto"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
