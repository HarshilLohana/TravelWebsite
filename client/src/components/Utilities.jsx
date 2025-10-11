import React, { useState, useEffect, useRef } from "react";
import { Users, MapPin, Award, UserCircle, Compass, Star, Globe } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from '../data/constants.js';

// Define a map of icon names to Lucide React components
const IconMap = {
    Award: Award,
    Users: Users,
    MapPin: MapPin,
    Compass: Compass, // Added
    Star: Star,     // Added
    Globe: Globe    // Added
};

// --- AnimatedCounter Component ---
export const AnimatedCounter = ({ countTo, title, iconName, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const IconComponent = IconMap[iconName];

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const startTime = Date.now();
      
      const animateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const animatedValue = Math.floor(progress * countTo);
        setCount(animatedValue);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, countTo]);

  return (
    <div ref={ref} className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center">
      {/* Icon uses the IconMap for dynamic rendering and has blue color */}
      {IconComponent && <IconComponent size={36} className="text-blue-600 mx-auto mb-2" />}
      <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mt-2">{count}{suffix}</h3>
      <p className="mt-2 text-lg font-semibold text-gray-600">{title}</p>
    </div>
  );
};

// --- WhyUsItem Component ---
export const WhyUsItem = ({ item }) => {
  const IconComponent = IconMap[item.iconName];

  return (
    <motion.div 
      key={item.id} 
      whileHover={{ scale: 1.05 }} 
      className="bg-white rounded-2xl shadow-xl p-8 text-center"
    >
      {/* Icon uses the IconMap for dynamic rendering and has blue color */}
      {IconComponent && <IconComponent size={48} className="text-blue-600 mb-4 mx-auto" />}
      <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
      <p className="text-gray-600 mt-2">{item.text}</p>
    </motion.div>
  );
};

// --- TestimonialCarousel Component ---
export const TestimonialCarousel = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-advance logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const currentReview = testimonials[currentReviewIndex];

  return (
    <div className="relative h-96 flex flex-col items-center justify-center p-4">
      {/* Testimonial Card */}
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReviewIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12 text-center flex flex-col items-center">
              {/* Favicon for User Face */}
              <UserCircle size={64} className="text-blue-500 mx-auto mb-4" /> 
              
              <p className="text-gray-300 italic text-base sm:text-lg mb-4 leading-relaxed">"{currentReview.feedback}"</p>
              <h3 className="text-xl font-semibold text-blue-300 mt-4">{currentReview.name}</h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReviewIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${index === currentReviewIndex ? 'bg-blue-500' : 'bg-gray-500 hover:bg-gray-400'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
