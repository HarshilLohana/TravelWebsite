import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "../data/constants.js";

const HeroSection = () => {
  const heroVideo = "/images/video1.mp4"; // your single video
  const totalSlides = heroImages.length + 1; // 1 video + 4 images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // Determine if current slide is video or image
  const isVideo = currentIndex === 0;
  const currentImageIndex = currentIndex - 1; // images start at index 1

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {isVideo ? (
            <motion.video
              key="hero-video"
              preload="none"
              aria-label="Luxury travel destinations and experiences video"
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              src={heroVideo}
            />
          ) : (
            <motion.img
              key={`hero-img-${currentImageIndex}`}
              src={heroImages[currentImageIndex]}
              alt="Luxury travel destinations with Arabian Amenity Travels"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/10"></div>
      </div>

      <motion.div
        className="relative z-20 text-center p-6 flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="sr-only">
  Arabian Amenity Travels – Global Tours, UAE Experiences & Corporate Travel Solutions
</h1>

{/* Visible Hero Heading */}
<h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
  FIND THE PERFECT PLACE TO GO
</h2>


        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl drop-shadow-md">
          Receive personalized recommendations for activities, hotels, and more
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
