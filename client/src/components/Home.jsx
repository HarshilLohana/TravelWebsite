import React from "react";
import { motion } from "framer-motion";
import { Plane, MapPin, Globe, Award, MessageCircle } from "lucide-react";
import HeroSection from "../components/Hero.jsx";
import { statsData, destinations, whyUsItems } from "../data/constants.js";
import {
  AnimatedCounter,
  TestimonialCarousel,
  WhyUsItem,
  SectionHeading,
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
      answer: "Yes, Arabian Amenity Travels offers fully personalized travel itineraries tailored to your preferences and budget.",
    },
    {
      question: "Can you arrange corporate travel for large teams?",
      answer: "Absolutely! We handle end-to-end corporate travel including flights, hotels, transfers, meetings, and travel policies.",
    },
    {
      question: "Do you help with worldwide visa processing?",
      answer: "Yes, we provide expert visa assistance for over 100+ countries with complete documentation support.",
    },
    {
      question: "Is 24/7 customer support available?",
      answer: "Our team is available round the clock to assist you with bookings, emergencies, and travel updates.",
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we provide worldwide travel insurance plans for individuals, families, and corporate travelers.",
    },
  ];

  return (
    <div className="font-sans bg-white text-stone-800 overflow-x-hidden">

      {/* Hero */}
      <HeroSection />
      <h1 className="sr-only">
        Arabian Amenity Travels – Global Tours, UAE Experiences & Corporate Travel Solutions
      </h1>

      {/* Stats */}
      <section className="container mx-auto py-14 md:py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
          {statsData.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-14 md:py-16 px-4">
        <div className="container mx-auto text-center">
          <SectionHeading>Our Services</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-2">
            {[
              { Icon: Plane, title: "Flight Bookings", desc: "Best deals to any destination worldwide." },
              { Icon: MapPin, title: "Hotel Reservations", desc: "Comfortable stays guaranteed globally." },
              { Icon: Globe, title: "Tour Packages", desc: "Curated tours for every traveler." },
              { Icon: Award, title: "Visa Assistance", desc: "Expert visa guidance for 100+ countries." },
            ].map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                  <Icon size={32} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-xs md:text-sm mt-2 text-gray-500">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Attractions */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/attractions1 (2).webp')" }}
      >
        <div className="absolute inset-0 bg-[#0a0d1a]/70" />
        <div className="relative container mx-auto px-4">
          <SectionHeading>
            <span className="text-white">Dubai Attractions</span>
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dubaiAttractions.map((attraction) => (
              <motion.div
                key={attraction.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="260"
                  className="h-48 md:h-52 w-full object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-[#c9a84c] font-bold tracking-wide text-sm md:text-base">
                    {attraction.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto py-14 md:py-16 px-4">
        <SectionHeading>Popular Destinations</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest) => (
            <motion.div
              key={dest.id}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                decoding="async"
                className="h-56 md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-base md:text-lg font-bold">{dest.name}</h3>
                <p className="text-xs md:text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-14 md:py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading>Why Choose Us</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {whyUsItems.map((item) => (
              <WhyUsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0a0d1a] py-14 md:py-20 px-4 text-white">
        <div className="container mx-auto">
          <SectionHeading>
            <span className="text-white">What Our Clients Say</span>
          </SectionHeading>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-14 md:py-16 px-4">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left"
                >
                  <span className="text-sm md:text-base font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-2xl font-bold text-[#c9a84c] flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-4 md:px-5 overflow-hidden"
                >
                  <p className="pb-4 md:pb-5 text-sm md:text-base text-gray-600">
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
        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#20bc5a] transition-colors z-50"
      >
        <MessageCircle size={28} className="md:size-8" />
      </a>

    </div>
  );
};

export default Home;