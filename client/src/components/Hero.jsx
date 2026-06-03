import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "../data/constants.js";

function preloadImage(src) {
  const img = new Image();
  img.src = src;
}

const HeroSection = () => {
  const heroVideo = "/images/video1.mp4";
  const totalSlides = heroImages.length + 1;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    heroImages.forEach((src) => preloadImage(src));
    if (!isMobile) {
      const video = document.createElement("video");
      video.src = heroVideo;
      video.preload = "auto";
      video.oncanplaythrough = () => setVideoReady(true);
    }
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const isVideo = currentIndex === 0 && !isMobile && videoReady;
  const currentImageIndex = isVideo ? null : currentIndex === 0 ? 0 : currentIndex - 1;

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          {isVideo ? (
            <motion.video
              key="hero-video"
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              src={heroVideo}
            />
          ) : (
            <motion.img
              key={`hero-img-${currentImageIndex}`}
              src={heroImages[currentImageIndex]}
              alt="Luxury travel destinations with Arabian Amenity Travels"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="1920"
              height="1080"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      </div>

      <motion.div
        className="relative z-20 text-center px-6 flex flex-col items-center justify-center min-h-[100svh]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="sr-only">
          Arabian Amenity Travels - Global Tours, UAE Experiences and Corporate Travel Solutions
        </h1>
        <h2 className="text-[clamp(2rem,6vw,4rem)] font-extrabold drop-shadow-xl leading-tight">
          FIND THE PERFECT PLACE TO GO
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[clamp(1rem,2.5vw,1.25rem)] drop-shadow-md">
          Receive personalized recommendations for activities, hotels, and more
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;