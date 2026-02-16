import React, { useEffect, useState, useRef } from "react";
import { Users, MapPin, Award, UserCircle, Compass, Star, Globe } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from '../data/constants.js';

const IconMap = {
  Award,
  Users,
  MapPin,
  Compass,
  Star,
  Globe
};

// --- AnimatedCounter ---
export const AnimatedCounter = ({ countTo, title, iconName, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const IconComponent = IconMap[iconName];

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * countTo));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, countTo]);

  return (
    <div ref={ref} className="bg-white p-5 sm:p-8 rounded-2xl shadow-xl flex flex-col items-center">
      {IconComponent && <IconComponent size={32} className="text-blue-600 mb-2" />}
      <h3 className="text-[clamp(1.6rem,5vw,3rem)] font-extrabold text-blue-600">
        {count}{suffix}
      </h3>
      <p className="mt-1 text-sm sm:text-lg font-semibold text-gray-600 text-center">
        {title}
      </p>
    </div>
  );
};

// --- WhyUsItem ---
export const WhyUsItem = ({ item }) => {
  const IconComponent = IconMap[item.iconName];

  return (
    <motion.div 
      whileHover={{ scale: 1.03 }} 
      className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 text-center"
    >
      {IconComponent && <IconComponent size={40} className="text-blue-600 mb-3 mx-auto" />}
      <h3 className="text-base sm:text-xl font-semibold mt-1">{item.title}</h3>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{item.text}</p>
    </motion.div>
  );
};

// --- FAQItem ---
export const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
      >
        <span className="text-sm sm:text-lg font-semibold text-gray-800">
          {item.q}
        </span>

        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-2xl sm:text-3xl font-bold text-gray-700"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 text-sm sm:text-base"
          >
            {item.a}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- TestimonialCarousel ---
export const TestimonialCarousel = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentReviewIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!testimonials || testimonials.length === 0) return null;

  const currentReview = testimonials[currentReviewIndex];

  return (
    <div className="relative min-h-[320px] sm:min-h-[380px] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReviewIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 text-center flex flex-col items-center">
              <UserCircle size={48} className="text-blue-500 mb-4" /> 
              <p className="text-gray-300 italic text-sm sm:text-lg mb-4 leading-relaxed">
                "{currentReview.feedback}"
              </p>
              <h3 className="text-sm sm:text-xl font-semibold text-blue-300">
                {currentReview.name}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute -bottom-6 flex space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReviewIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === currentReviewIndex ? 'bg-blue-500' : 'bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
