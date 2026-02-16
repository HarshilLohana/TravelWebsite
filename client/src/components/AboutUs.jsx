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
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-stone-100 text-stone-800">

      {/* --- HERO CAROUSEL --- */}
      {/* --- HERO CAROUSEL --- */}
<section className="relative h-[75vh] overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.img
      key={carouselImages[current]}
      src={carouselImages[current]}
      alt="About Arabian Amenity Travels – Global tours and corporate travel experts"
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </AnimatePresence>
    <h1 className="sr-only">
  About Arabian Amenity Travels – Global & Corporate Travel Experts
  </h1>
  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
    {/* --- COMPANY NAME --- */}
    <motion.h2
      className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-2 tracking-wider"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
    About Us
    </motion.h2>

    {/* --- ABOUT US --- */}
    <motion.h2
      className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      About Us
    </motion.h2>

    {/* --- SUBTEXT --- */}
    <motion.p
      className="text-lg md:text-xl text-white/80 max-w-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      Redefining corporate and luxury travel experiences across the globe.
    </motion.p>
  </div>
</section>


      {/* --- ABOUT SECTION --- */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/*<motion.img
          src="/images/about-team.webp"
          alt="Arabian Amenity Travels Team"
          className="rounded-3xl shadow-lg object-cover w-full h-[450px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At <strong>Arabian Amenity Travels</strong>, we believe travel is more than movement — 
            it’s an experience. Based in Dubai, we specialize in crafting personalized journeys, 
            corporate travel solutions, and luxury vacation packages designed to inspire and impress.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a passion for excellence, our team ensures that every itinerary — whether for business or leisure — 
            reflects the elegance and professionalism that defines the Arabian Amenity brand.
          </p>
        </motion.div>
      </section>
      
      {/* --- STATS SECTION --- */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-5xl font-bold mb-2">{item.value}</h3>
              <p className="text-white/90 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="container mx-auto px-6 py-20 text-center max-w-4xl">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission & Values
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our mission is to redefine modern travel by providing seamless, elegant, and 
          enriching experiences for every traveler. We stand by our values of 
          <strong> trust, quality, innovation,</strong> and <strong>personalization</strong>.
        </motion.p>
      </section>

      {/* --- SOCIAL SECTION --- */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Connect With Us</h2>
        
        <div className="flex justify-center space-x-6">
          {[
            { icon: <Facebook />, link: "https://facebook.com" },
            { icon: <Instagram />, link: "https://instagram.com" },
            { icon: <Linkedin />, link: "https://linkedin.com" },
            { icon: <Twitter />, link: "https://twitter.com" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl text-blue-600 transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Let’s Plan Your Next Journey</h2>
        <p className="text-white/80 mb-6">
          Partner with Arabian Amenity Travels — where every trip is a masterpiece.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
};

export default AboutUs;
