import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const chauffeurHeroImages = [
  "/images/chauffeur1.webp",
  "/images/chauffeur2.webp",
  "/images/chauffeur3.webp"
];

const chauffeurServices = [
  {
    title: "Airport Transfers",
    description:
      "Seamless airport pickups and drop-offs — experience punctual, premium, and stress-free rides anywhere in the world.",
    icon: "✈️",
  },
  {
    title: "Business Chauffeur Service",
    description:
      "Arrive in style for your meetings and events with professional chauffeurs trained for executive travel.",
    icon: "💼",
  },
  {
    title: "Luxury City Tours",
    description:
      "Discover iconic destinations in comfort with our curated chauffeur-driven sightseeing experiences.",
    icon: "🌍",
  },
  {
    title: "Event & VIP Transfers",
    description:
      "Exclusive transfers for weddings, galas, and VIP occasions — tailored for unmatched sophistication.",
    icon: "🎩",
  },
];

export default function WorldwideChauffeur() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % chauffeurHeroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={chauffeurHeroImages[currentImage]}
            alt="Worldwide chauffeur services by Arabian Amenity Travels"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30">
          {/* SEO H1 (hidden for Google) */}
<h1 className="sr-only">
  Worldwide Chauffeur Services by Arabian Amenity Travels
</h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-3"
          >
            Worldwide Chauffeur Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg mb-6 max-w-2xl"
          >
            Experience global luxury travel with professional chauffeurs who
            redefine comfort, safety, and style — powered by Arabian Amenity Travels.
          </motion.p>
        </div>
      </div>

      {/* --- SERVICE CATEGORIES --- */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Premium Chauffeur Solutions Worldwide
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {chauffeurServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 bg-white px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose Arabian Amenity Travels for Chauffeur Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Global Coverage",
              text: "From Dubai to London to New York — our chauffeur partners operate in 100+ destinations.",
            },
            {
              title: "Professional Drivers",
              text: "Trained, multilingual chauffeurs ensure your journey is smooth, safe, and discreet.",
            },
            {
              title: "Luxury Fleet",
              text: "Choose from Mercedes, BMW, Rolls-Royce, and more — elegance that matches your lifestyle.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Travel in Luxury, Anywhere in the World
        </h2>
        <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
          Book a chauffeur today and let Arabian Amenity Travels handle every
          mile of your journey with precision and luxury.
        </p>
      </section>
    </div>
  );
}
