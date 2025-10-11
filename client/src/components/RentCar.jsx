import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const rentCarOptions = [
  {
    id: 1,
    name: "Toyota Corolla",
    type: "Economy",
    image: "https://images.unsplash.com/photo-1605559424843-6a8f24e64f0d?w=1200&q=80&auto=format&fit=crop",
    features: ["Automatic", "5 Seats", "Air Conditioning", "Unlimited KM"],
  },
  {
    id: 2,
    name: "Range Rover Sport",
    type: "Luxury SUV",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=1200&q=80&auto=format&fit=crop",
    features: ["Luxury SUV", "Automatic", "GPS Navigation", "Full Insurance"],
  },
  {
    id: 3,
    name: "Nissan Patrol",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1600047509807-ba57b31d9ac0?w=1200&q=80&auto=format&fit=crop",
    features: ["7 Seats", "Automatic", "4x4 Drive", "Airport Pickup"],
  },
  {
    id: 4,
    name: "Lamborghini Huracán",
    type: "Sports",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80&auto=format&fit=crop",
    features: ["Luxury Sports", "Automatic", "Premium Interior", "Free Delivery"],
  },
];

const CarCard = ({ car, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer"
  >
    {/* Image */}
    <img
      src={car.image}
      alt={`Photo of ${car.name}`}
      className="w-full h-64 object-cover"
      loading="lazy"
    />

    {/* Type badge */}
    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
      {car.type}
    </div>

    {/* Info & Features */}
    <div className="p-6 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h3>
      <ul className="mt-3 text-gray-600 text-sm space-y-1">
        {car.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center gap-2"
          >
            <CheckCircle size={16} className="text-blue-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* Hover overlay */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 rounded-3xl"
    >
      Discover More
    </motion.div>
  </motion.div>
);

const RentCar = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            Explore Our Fleet 🚘
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100">
            Discover a wide variety of cars to make your Dubai travel unforgettable. From luxury SUVs to sporty rides — we have it all.
          </p>
        </motion.div>

        {/* Animated background blob */}
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-10 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"
        />
      </section>

      {/* Car Fleet Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Premium Fleet
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rentCarOptions.map((car, idx) => (
            <CarCard key={car.id} car={car} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RentCar;
