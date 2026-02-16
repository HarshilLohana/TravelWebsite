import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const carouselImages = [
  "/images/aboutus1.webp",
  "/images/aboutus2.webp",
  "/images/aboutus3.webp",
];

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Happy Clients", value: "5000+" },
  { label: "Destinations Covered", value: "60+" },
  { label: "Corporate Partners", value: "300+" },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % carouselImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-stone-100 text-stone-800 overflow-x-hidden">
      {/* --- HERO CAROUSEL --- */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselImages[current]}
            src={carouselImages[current]}
            alt="About Arabian Amenity Travels – Global tours and corporate travel experts"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25 flex flex-col items-center justify-center text-center px-6">
          {/* SEO H1 (hidden) */}
          <h1 className="sr-only">
            About Arabian Amenity Travels – Global & Corporate Travel Experts
          </h1>

          <motion.h2
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-extrabold text-white drop-shadow-2xl mb-3 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-[clamp(0.95rem,2.5vw,1.2rem)] text-white/85 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Redefining corporate and luxury travel experiences across the globe.
          </motion.p>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="container mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-5 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            At <strong>Arabian Amenity Travels</strong>, we believe travel is more than movement — 
            it’s an experience. Based in Dubai, we specialize in crafting personalized journeys, 
            corporate travel solutions, and luxury vacation packages designed to inspire and impress.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            With a passion for excellence, our team ensures that every itinerary — whether for business or leisure — 
            reflects the elegance and professionalism that defines the Arabian Amenity brand.
          </p>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-blue-600 text-white py-14 md:py-16">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold mb-2">
                {item.value}
              </h3>
              <p className="text-white/90 text-sm md:text-base font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="container mx-auto px-6 py-16 md:py-20 text-center max-w-4xl">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Mission & Values
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our mission is to redefine modern travel by providing seamless, elegant, and 
          enriching experiences for every traveler. We stand by our values of{" "}
          <strong>trust, quality, innovation,</strong> and{" "}
          <strong>personalization</strong>.
        </motion.p>
      </section>

      {/* --- SOCIAL SECTION --- */}
      <section className="bg-gray-50 py-14 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          Connect With Us
        </h2>

        <div className="flex justify-center gap-5">
          {[
            { icon: <Facebook />, link: "https://facebook.com", label: "Facebook" },
            { icon: <Instagram />, link: "https://instagram.com", label: "Instagram" },
            { icon: <Linkedin />, link: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Twitter />, link: "https://twitter.com", label: "Twitter" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              aria-label={`Follow us on ${social.label}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="p-3 md:p-4 bg-white rounded-full shadow-md hover:shadow-xl text-blue-600 transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-black text-white text-center py-14 md:py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let’s Plan Your Next Journey
        </h2>
        <p className="text-white/80 mb-6 text-sm md:text-base">
          Partner with Arabian Amenity Travels — where every trip is a masterpiece.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-black font-semibold py-3 px-7 rounded-full shadow-md hover:shadow-lg transition"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
};

export default AboutUs;
