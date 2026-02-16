import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const cruiseHeroImages = [
  "/images/cruise1.webp",
  "/images/cruise2.webp",
  "/images/cruise3.webp",
];

const cruiseTypes = [
  {
    title: "Luxury Ocean Cruises",
    description:
      "Experience world-class voyages aboard the finest ships sailing across the Caribbean, Mediterranean, Asia, and beyond.",
    icon: "🛳️",
  },
  {
    title: "River Cruises",
    description:
      "Explore scenic rivers like the Danube, Nile, and Mekong — offering authentic cultural journeys through timeless destinations.",
    icon: "🌅",
  },
  {
    title: "Expedition Cruises",
    description:
      "Venture into the Arctic, Antarctica, or the Galápagos Islands with guided expeditions and luxury onboard experiences.",
    icon: "❄️",
  },
  {
    title: "Private Yacht Charters",
    description:
      "Charter an exclusive yacht anywhere in the world — perfect for honeymoons, celebrations, or a serene escape at sea.",
    icon: "⚓",
  },
];

export default function CruiseBooking() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % cruiseHeroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={cruiseHeroImages[currentImage]}
            src={cruiseHeroImages[currentImage]}
            alt="Worldwide luxury cruise experiences by Arabian Amenity Travels"
            loading={currentImage === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={currentImage === 0 ? "high" : "auto"}
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black/70 via-black/40 to-black/20 px-6">
          <h1 className="sr-only">
            Worldwide Cruise Booking Services by Arabian Amenity Travels
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-extrabold mb-4 leading-tight"
          >
            Worldwide Cruise Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[clamp(0.95rem,2.5vw,1.2rem)] max-w-3xl text-gray-200"
          >
            Embark on unforgettable journeys across the world’s oceans and rivers with{" "}
            <span className="font-semibold">Arabian Amenity Travels</span>.
          </motion.p>
        </div>
      </section>

      {/* --- CRUISE TYPES --- */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Our Global Cruise Options
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cruiseTypes.map((cruise, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-4xl md:text-5xl mb-4">{cruise.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-700">
                {cruise.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {cruise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 bg-gray-50 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-800">
          Why Cruise with Arabian Amenity Travels?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Worldwide Cruise Network",
              text: "Access the world’s best cruise lines, from Royal Caribbean to MSC, Viking, and more.",
            },
            {
              title: "Tailor-Made Packages",
              text: "We design cruise itineraries that fit your budget, preferences, and dream destinations.",
            },
            {
              title: "24/7 Global Support",
              text: "Our dedicated travel experts are available round-the-clock to assist you, wherever you sail.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 md:p-8 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-blue-900 text-white text-center py-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Ready to Sail the World?
        </motion.h2>

        <p className="mb-6 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Whether you dream of the Mediterranean, Caribbean, or Antarctica — Arabian Amenity Travels is your trusted partner.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-blue-900 font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-xl transition"
        >
          Get in Touch
        </motion.a>
      </section>
    </div>
  );
}
