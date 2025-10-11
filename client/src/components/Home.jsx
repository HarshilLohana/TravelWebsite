import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, MapPin, Globe, Award, MessageCircle } from "lucide-react";
import { heroImages, statsData, destinations, whyUsItems } from '../data/constants.js';
import { AnimatedCounter, TestimonialCarousel, WhyUsItem } from '../components/Utilities.jsx';

const dubaiAttractions = [
  {
    id: 1,
    name: "Burj Khalifa",
    image: "/images/dubai/burj-khalifa.jpg",
    text: "The tallest building in the world, offering stunning views of Dubai."
  },
  {
    id: 2,
    name: "Dubai Mall",
    image: "/images/dubai/dubai-mall.jpg",
    text: "A shopping paradise with world-class entertainment and dining."
  },
  {
    id: 3,
    name: "Palm Jumeirah",
    image: "/images/dubai/palm-jumeirah.jpg",
    text: "A man-made island with luxurious resorts and pristine beaches."
  },
  {
    id: 4,
    name: "Dubai Marina",
    image: "/images/dubai/dubai-marina.jpg",
    text: "A vibrant waterfront with skyscrapers, restaurants, and nightlife."
  },
  {
    id: 5,
    name: "Desert Safari",
    image: "/images/dubai/desert-safari.jpg",
    text: "Experience thrilling dune bashing, camel rides, and traditional shows."
  },
  {
    id: 6,
    name: "Dubai Fountain",
    image: "/images/dubai/dubai-fountain.jpg",
    text: "A spectacular water show set to music at the base of Burj Khalifa."
  },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-stone-100 text-stone-800">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImages[currentImageIndex]}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              alt="Hero"
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/10"></div>
        </div>
        <motion.div
          className="relative z-20 text-center p-6 flex flex-col items-center justify-center h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            FIND THE PERFECT PLACE TO GO
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl drop-shadow-md">
            Receive personalized recommendations for activities, hotels, and more
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">HOW IT WORKS</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover destinations, plan itineraries, and enjoy 24/7 support for a stress-free trip.
        </p>
      </section>

      {/* Services */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">OUR SERVICES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
            <Plane size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Flight Bookings</h3>
            <p className="text-sm mt-2 text-gray-600">Best deals to any destination.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
            <MapPin size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Hotel Reservations</h3>
            <p className="text-sm mt-2 text-gray-600">Comfortable stays guaranteed.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
            <Globe size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Tour Packages</h3>
            <p className="text-sm mt-2 text-gray-600">Curated tours for every traveler.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
            <Award size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold">Visa Assistance</h3>
            <p className="text-sm mt-2 text-gray-600">Expert visa guidance.</p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">POPULAR DESTINATIONS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(dest => (
            <motion.div key={dest.id} whileHover={{ scale: 1.05 }} className="relative group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer">
              <motion.img src={dest.image} alt={dest.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold mb-2 text-center">{dest.name}</h3>
                <p className="text-sm text-center mb-4">{dest.text}</p>
              </div>
              <div className="p-6 text-center transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-xl font-semibold uppercase">{dest.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dubai Attractions */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#FFD700]">DUBAI ATTRACTIONS</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dubaiAttractions.map(attraction => (
            <motion.div key={attraction.id} whileHover={{ scale: 1.05 }} className="relative group bg-white text-stone-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer">
              <motion.img src={attraction.image} alt={attraction.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold mb-2 text-center">{attraction.name}</h3>
                <p className="text-sm text-center">{attraction.text}</p>
              </div>
              <div className="p-6 text-center transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-xl font-bold">{attraction.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">WHY CHOOSE US</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {whyUsItems.map(item => <WhyUsItem key={item.id} item={item} />)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-16 px-4 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">WHAT OUR CLIENTS SAY</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">GET IN TOUCH</h2>
        <form className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <textarea rows={4} placeholder="Message" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={32} />
      </a>

    </div>
  );
};

export default Home;
