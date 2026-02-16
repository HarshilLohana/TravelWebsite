// Services.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselImages = [
  "/images/service1.webp",
  "/images/service2.webp",
  "/images/service3.webp",
];

const serviceData = [
  {
    title: "Corporate Travel Management",
    description:
      "Seamless business travel solutions tailored for corporate clients. From meetings to incentives, we handle logistics so your team stays focused.",
    icon: "💼",
  },
  {
    title: "Leisure & Holiday Packages",
    description:
      "Explore breathtaking destinations across the globe with our handpicked luxury vacation experiences and custom itineraries.",
    icon: "🌴",
  },
  {
    title: "Visa & Documentation Assistance",
    description:
      "Our experts simplify your visa process — from documentation to approvals — ensuring a smooth travel experience every time.",
    icon: "🛂",
  },
  {
    title: "Hotel & Flight Bookings",
    description:
      "Access exclusive deals on global hotels and flights, curated for comfort, convenience, and premium travel experiences.",
    icon: "✈️",
  },
  {
    title: "Luxury Transfers & Car Rentals",
    description:
      "Arrive in style with premium chauffeur-driven transfers or self-drive rentals — perfect for business or leisure.",
    icon: "🚘",
  },
  {
    title: "Group & MICE Travel",
    description:
      "From conferences to incentive tours, we manage every detail to make your corporate gatherings truly world-class.",
    icon: "🗺️",
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-stone-100 text-stone-800">
      {/* Hero Carousel */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselImages[current]}
            src={carouselImages[current]}
            alt="Arabian Amenity Travels services including corporate travel and luxury holidays"
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

        <h1 className="sr-only">
          Arabian Amenity Travels Services – Global Travel & Corporate Solutions
        </h1>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25 flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-extrabold text-white drop-shadow-lg mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-[clamp(0.95rem,2.5vw,1.2rem)] text-white/85 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover world-class travel experiences crafted with care and luxury — tailored just for you.
          </motion.p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <motion.h2
          className="text-2xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between bg-white p-5 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
            >
              <div>
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              <a
                href="/contact"
                className="mt-5 md:mt-6 border-t border-gray-200 pt-3 md:pt-4 text-blue-600 font-semibold hover:underline text-sm md:text-base"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-14 md:py-16 text-center px-6">
        <motion.h3
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Explore the World with Us?
        </motion.h3>
        <motion.p
          className="text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Whether it’s a relaxing escape or a business journey, Arabian Amenity Travels makes every journey unforgettable.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-blue-600 font-bold py-3 px-7 md:px-8 rounded-full shadow-md hover:shadow-lg transition"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
};

export default Services;
