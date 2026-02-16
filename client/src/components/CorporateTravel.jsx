import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const corpHeroImages = [
  "/images/corporate1.webp",
  "/images/corporate2.webp",
  "/images/corporate3.webp"
];

export default function CorporateTravel() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % corpHeroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={corpHeroImages[currentImage]}
            alt="Corporate travel management solutions by Arabian Amenity Travels"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <h1 className="sr-only">
        Corporate Travel Management Solutions by Arabian Amenity Travels
        </h1>

{/* Visible hero heading */}

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30 px-6">
          <motion.h2
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.3 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Corporate Travel Management
          </motion.h2>
          <motion.p
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.5 }}
            className="text-lg md:text-xl max-w-3xl"
          >
            Arabian Amenity Travels empowers your business journeys with streamlined travel solutions — tailored for performance, professionalism & global reach.
          </motion.p>
        </div>
      </section>

      {/* SERVICES / SOLUTIONS SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Strategic Travel Planning",
              desc: "We analyze your business travel needs and implement strategies that reduce cost, improve compliance and ensure traveller satisfaction."
            },
            {
              title: "Flight & Hotel Booking",
              desc: "Access negotiated corporate rates, global inventory and real-time availability to ensure your team travels smart."
            },
            {
              title: "24/7 Duty Desk",
              desc: "Round the clock support, dedicated account manager and rapid response for any travel disruption or contingency."
            },
            {
              title: "Visa & Documentation Support",
              desc: "Complete visa processing for business travel across multiple destinations, solely from UAE-based operations."
            },
            {
              title: "Expense & Policy Management",
              desc: "We help implement travel policies, track spend analytics and provide reporting to optimize your travel budget."
            },
            {
              title: "Group & MICE Travel",
              desc: "From incentive trips to conferences and large-group itineraries — comprehensive handling under one roof."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y:-8, scale:1.02 }}
              transition={{ type:"spring", stiffness:140 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS / WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Corporate Travel Simplified
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: "📊",
              title: "Cost Efficiency",
              text: "Leveraging preferred partnerships and analytics to bring measurable savings to your travel program."
            },
            {
              icon: "🌍",
              title: "Global Reach",
              text: "With operations covering key business hubs worldwide, we support your travellers across all continents."
            },
            {
              icon: "👥",
              title: "Traveller Experience",
              text: "User-centric booking, mobile tools and proactive communication to ensure your team travels with peace of mind."
            }
          ].map((item,i) => (
            <motion.div
              key={i}
              whileHover={{ scale:1.05 }}
              className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES / TESTIMONIALS (optional) */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Trusted by Leading Corporations
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {[
            {
              name: "GlobalTech Inc.",
              feedback: "Arabian Amenity Travels delivered flawless travel management for our annual conference across 5 countries."
            },
            {
              name: "FinServe Group",
              feedback: "Their 24/7 team saved our travellers during an unexpected disruption — truly world-class service."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ delay: i * 0.3, duration:0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="italic text-gray-700 mb-4">"{item.feedback}"</p>
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Elevate Your Corporate Travel Program Today
        </h2>
        <p className="mb-6 text-gray-300 max-w-3xl mx-auto">
          Partner with Arabian Amenity Travels and ensure your business journeys are efficient, secure and tailored for success.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale:1.05 }}
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
        >
          Talk to our Corporate Specialist
        </motion.a>
      </section>
    </div>
  );
}
