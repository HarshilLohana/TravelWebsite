import React, { useEffect, useState, useRef } from "react";
import { Users, MapPin, Award, Compass, Star, Globe } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from '../data/constants.js';

const IconMap = { Award, Users, MapPin, Compass, Star, Globe };

// ── Section Heading Helper ─────────────────────────────────────────────────────
export const SectionHeading = ({ children }) => (
  <div className="text-center mb-10 md:mb-14">
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
      {children}
    </h2>
    <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9a84c]" />
  </div>
);

// ── AnimatedCounter ────────────────────────────────────────────────────────────
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
    <div ref={ref} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center group hover:shadow-xl transition-shadow duration-300">
      {IconComponent && (
        <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-3">
          <IconComponent size={28} className="text-[#c9a84c]" />
        </div>
      )}
      <h3 className="text-[clamp(1.8rem,5vw,3rem)] font-extrabold text-[#0a0d1a]">
        {count}{suffix}
      </h3>
      <p className="mt-1 text-sm sm:text-base font-semibold text-gray-500 text-center">
        {title}
      </p>
    </div>
  );
};

// ── WhyUsItem ──────────────────────────────────────────────────────────────────
export const WhyUsItem = ({ item }) => {
  const IconComponent = IconMap[item.iconName];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300"
    >
      {IconComponent && (
        <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4 mx-auto">
          <IconComponent size={32} className="text-[#c9a84c]" />
        </div>
      )}
      <h3 className="text-base sm:text-xl font-bold mt-1 text-gray-900">{item.title}</h3>
      <p className="text-gray-500 mt-2 text-sm sm:text-base">{item.text}</p>
    </motion.div>
  );
};

// ── FAQItem ────────────────────────────────────────────────────────────────────
export const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
      >
        <span className="text-sm sm:text-lg font-semibold text-gray-800 pr-4">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-2xl font-bold text-[#c9a84c] flex-shrink-0"
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

// ── TestimonialCarousel ────────────────────────────────────────────────────────
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
    <div className="relative min-h-[300px] sm:min-h-[340px] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReviewIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#0f1526] border border-[#c9a84c]/20 rounded-2xl shadow-xl p-6 sm:p-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mb-4">
                <span className="text-[#c9a84c] text-2xl font-bold">
                  {currentReview.name.charAt(0)}
                </span>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#c9a84c] text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 italic text-sm sm:text-lg mb-5 leading-relaxed">
                "{currentReview.feedback}"
              </p>
              <h3 className="text-sm sm:text-base font-bold text-[#c9a84c]">
                — {currentReview.name}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReviewIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentReviewIndex
                ? 'bg-[#c9a84c] w-6'
                : 'bg-gray-500 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};