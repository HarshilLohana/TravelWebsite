import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const hotelHeroImages = [
  "/images/hotel1.webp",
  "/images/hotel2.webp",
  "/images/hotel3.webp"
];

const hotelCategories = [
  {
    title: "Luxury Stays",
    description:
      "Stay in 5-star hotels and resorts worldwide — where elegance meets comfort and service excellence.",
    icon: "🏨"
  },
  {
    title: "Budget Hotels",
    description:
      "Affordable and cozy accommodations for smart travelers who love comfort without overspending.",
    icon: "💰"
  },
  {
    title: "Family & Group Bookings",
    description:
      "Spacious and convenient options for families or travel groups with exclusive group discounts.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Business Hotels",
    description:
      "Premium business-class hotels with top-notch amenities for corporate travelers and events.",
    icon: "💼"
  }
];

export default function WorldwideHotels() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % hotelHeroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={hotelHeroImages[currentImage]}
            alt="Worldwide hotel booking services by Arabian Amenity Travels"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <h1 className="sr-only">
          Worldwide Hotel Booking Services by Arabian Amenity Travels
        </h1>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black/70 via-black/40 to-black/20 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-bold mb-4"
          >
            Worldwide Hotel Booking
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[clamp(0.95rem,2.5vw,1.15rem)] mb-6 max-w-2xl text-gray-200"
          >
            Discover the best hotels across the globe — handpicked by Arabian
            Amenity Travels for every traveler’s need and style.
          </motion.p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Find the Perfect Stay For Every Journey
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {hotelCategories.map((hotel, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{hotel.icon}</div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">
                {hotel.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {hotel.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-14 bg-white px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800">
          Why Book Hotels with Arabian Amenity Travels?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              title: "Global Hotel Network",
              text: "Access top hotels and exclusive deals in more than 80+ countries worldwide."
            },
            {
              title: "Best Price Guarantee",
              text: "Enjoy competitive prices with flexible booking options — no hidden costs."
            },
            {
              title: "24/7 Booking Support",
              text: "Our travel specialists are always available to help you find and manage your stays."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="p-5 md:p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-14 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Plan Your Stay Anywhere in the World
        </h2>
        <p className="mb-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Let Arabian Amenity Travels handle your hotel booking — luxury,
          comfort, and reliability guaranteed.
        </p>
      </section>
    </div>
  );
}
