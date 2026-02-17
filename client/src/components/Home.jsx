import React from "react";
import { motion } from "framer-motion";
import { Plane, MapPin, Globe, Award, MessageCircle } from "lucide-react";
import HeroSection from "../components/Hero.jsx";
import { statsData, destinations, whyUsItems } from "../data/constants.js";
import {
  AnimatedCounter,
  TestimonialCarousel,
  WhyUsItem,
} from "../components/Utilities.jsx";

const dubaiAttractions = [
  { id: 1, name: "Burj Khalifa", image: "/images/burj.webp" },
  { id: 2, name: "Dubai Mall", image: "/images/mall.webp" },
  { id: 3, name: "Palm Jumeirah", image: "/images/palm.webp" },
  { id: 4, name: "Dubai Marina", image: "/images/marina.webp" },
  { id: 5, name: "Desert Safari", image: "/images/safari.webp" },
  { id: 6, name: "Dubai Fountain", image: "/images/fountain.webp" },
];

const Home = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const faqs = [
    {
      question: "Do you provide customized travel packages?",
      answer:
        "Yes, Arabian Amenity Travels offers fully personalized travel itineraries tailored to your preferences and budget.",
    },
    {
      question: "Can you arrange corporate travel for large teams?",
      answer:
        "Absolutely! We handle end-to-end corporate travel including flights, hotels, transfers, meetings, and travel policies.",
    },
    {
      question: "Do you help with worldwide visa processing?",
      answer:
        "Yes, we provide expert visa assistance for over 100+ countries with complete documentation support.",
    },
    {
      question: "Is 24/7 customer support available?",
      answer:
        "Our team is available round the clock to assist you with bookings, emergencies, and travel updates.",
    },
    {
      question: "Do you offer travel insurance?",
      answer:
        "Yes, we provide worldwide travel insurance plans for individuals, families, and corporate travelers.",
    },
  ];

  return (
    <div className="font-sans bg-stone-100 text-stone-800 overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      <h1 className="sr-only">
        Arabian Amenity Travels – Global Tours, UAE Experiences & Corporate Travel Solutions
      </h1>

      {/* Stats Section */}
      <section className="container mx-auto py-14 md:py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
          {statsData.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto py-14 md:py-16 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-12">
          {[
            { Icon: Plane, title: "Flight Bookings", desc: "Best deals to any destination." },
            { Icon: MapPin, title: "Hotel Reservations", desc: "Comfortable stays guaranteed." },
            { Icon: Globe, title: "Tour Packages", desc: "Curated tours for every traveler." },
            { Icon: Award, title: "Visa Assistance", desc: "Expert visa guidance." },
          ].map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-xl flex flex-col items-center"
            >
              <Icon size={40} className="text-blue-600 mb-3" />
              <h3 className="text-base md:text-xl font-bold">{title}</h3>
              <p className="text-xs md:text-sm mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dubai Attractions (FIXED IMAGE LOADING ONLY) */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/attractions1 (2).webp')" }}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

        <div className="relative container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-[#FFD700] tracking-wide">
            DUBAI ATTRACTIONS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dubaiAttractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-visible border border-white/20 shadow-2xl p-3"
              >
                <h3 className="absolute left-1/2 -top-5 transform -translate-x-1/2 text-[#FFD700] font-bold tracking-wide text-sm md:text-lg transition-opacity duration-500 group-hover:opacity-0">
                  {attraction.name}
                </h3>

                <img
                  src={attraction.image}
                  alt={attraction.name}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="250"
                  className="h-52 md:h-56 w-full object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto py-14 md:py-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900">
          POPULAR DESTINATIONS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              whileHover={{ scale: 1.04 }}
              className="relative group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            >
              <motion.img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                decoding="async"
                className="h-56 md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-base md:text-xl font-bold mb-2 text-center">
                  {dest.name}
                </h3>
                <p className="text-xs md:text-sm text-center mb-4">
                  {dest.text}
                </p>
              </div>
              <div className="p-5 md:p-6 text-center transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-base md:text-xl font-semibold uppercase">
                  {dest.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto py-14 md:py-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900">
          WHY CHOOSE US
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {whyUsItems.map((item) => (
            <WhyUsItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-14 md:py-16 px-4 text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-white">
            WHAT OUR CLIENTS SAY
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section (ICON RESTORED) */}
      <section className="container mx-auto py-14 md:py-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left"
                >
                  <span className="text-sm md:text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        d="M12 5v14m7-7H5"
                      />
                    </svg>
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-4 md:px-5 overflow-hidden"
                >
                  <p className="pb-4 md:pb-5 text-xs md:text-base text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/97142648306?text=Hello%20Arabian%20Amenity%20Travels%2C%20I%20need%20travel%20assistance"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={28} className="md:size-8" />
      </a>
    </div>
  );
};

export default Home;
