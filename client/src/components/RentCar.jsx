import React from "react";
import { motion,AnimatePresence  } from "framer-motion";


const carHeroImages = [
  "/images/BMW.webp",
  "/images/rr.webp",
  "/images/KIA.webp"
];

const carCategories = [
  {
    title: "Standard Cars",
    description:
      "Reliable and comfortable rides for everyday travel — perfect for quick getaways or business trips.",
    icon: "🚗"
  },
  {
    title: "Premium Cars",
    description:
      "A step up in performance and style — experience luxury without breaking the bank.",
    icon: "💼"
  },
  {
    title: "Premium Sedan",
    description:
      "Sleek design, smooth handling, and utmost comfort for executives and family travel.",
    icon: "✨"
  },
  {
    title: "Luxury Cars",
    description:
      "Drive the finest brands like BMW, Audi, and Mercedes — where comfort meets prestige.",
    icon: "💎"
  }
];

export default function RentCar() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carHeroImages.length);
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
      src={carHeroImages[currentImage]}
      alt="Premium and luxury car rentals in Dubai by Arabian Amenity Travels"
      className="absolute inset-0 w-full h-full object-cover brightness-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </AnimatePresence>

  {/* Overlay content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30">
    <h1 className="sr-only">
  Rent Premium and Luxury Cars in Dubai with Arabian Amenity Travels
</h1>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-3xl md:text-5xl font-bold mb-3"
    >
      Rent Premium & Luxury Cars in Dubai
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-base md:text-lg mb-6 max-w-2xl"
    >
      From sleek sedans to exotic supercars — find your perfect ride with
      Arabian Amenity Travels’ trusted car rental partners.
    </motion.p>
  </div>
</div>



      {/* --- CATEGORIES SECTION --- */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Car Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {carCategories.map((car, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">{car.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{car.title}</h3>
              <p className="text-gray-600 text-sm">{car.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 bg-white px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose Arabian Amenity Travels for Car Rentals?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Wide Range of Cars",
              text: "From compact to luxury vehicles — find the perfect car for any occasion."
            },
            {
              title: "Trusted Partners",
              text: "We collaborate only with verified and premium car rental services in Dubai."
            },
            {
              title: "24/7 Assistance",
              text: "Our travel experts are available anytime to ensure a seamless experience."
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

      {/* --- CTA --- */}
      <section className="bg-black text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Hit the Road in Style?
        </h2>
        <p className="mb-6 text-gray-300">
          Book your car rental today and experience Dubai your way.
        </p>
        
      </section>
    </div>
  );
}
