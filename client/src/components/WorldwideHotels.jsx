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
    <div className="w-full bg-white text-gray-900">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={hotelHeroImages[currentImage]}
            alt="Worldwide hotel booking services by Arabian Amenity Travels"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30">
          {/* SEO H1 (hidden for Google) */}
<h1 className="sr-only">
  Worldwide Hotel Booking Services by Arabian Amenity Travels
</h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-3"
          >
            Worldwide Hotel Booking
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg mb-6 max-w-2xl"
          >
            Discover the best hotels across the globe — handpicked by Arabian
            Amenity Travels for every traveler’s need and style.
          </motion.p>
        </div>
      </div>

      {/* --- HOTEL CATEGORIES --- */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Find the Perfect Stay For Every Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {hotelCategories.map((hotel, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">{hotel.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{hotel.title}</h3>
              <p className="text-gray-600 text-sm">{hotel.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 bg-white px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Book Hotels with Arabian Amenity Travels?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
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
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Plan Your Stay Anywhere in the World
        </h2>
        <p className="mb-6 text-gray-300">
          Let Arabian Amenity Travels handle your hotel booking — luxury,
          comfort, and reliability guaranteed.
        </p>
      </section>
    </div>
  );
}
