import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const corpHeroImages = [
  "/images/corporate1.webp",
  "/images/corporate2.webp",
  "/images/corporate3.webp",
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
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={corpHeroImages[currentImage]}
            src={corpHeroImages[currentImage]}
            alt="Corporate travel management solutions by Arabian Amenity Travels"
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

        <h1 className="sr-only">
          Corporate Travel Management Solutions by Arabian Amenity Travels
        </h1>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black/70 via-black/45 to-black/25 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-extrabold mb-4 leading-tight"
          >
            Corporate Travel Management
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[clamp(0.95rem,2.5vw,1.2rem)] max-w-3xl text-gray-200"
          >
            Arabian Amenity Travels empowers your business journeys with streamlined travel solutions — tailored for performance, professionalism & global reach.
          </motion.p>
        </div>
      </section>

      {/* SERVICES / SOLUTIONS SECTION */}
      <section className="py-16 md:py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              title: "Strategic Travel Planning",
              desc: "We analyze your business travel needs and implement strategies that reduce cost, improve compliance and ensure traveller satisfaction.",
            },
            {
              title: "Flight & Hotel Booking",
              desc: "Access negotiated corporate rates, global inventory and real-time availability to ensure your team travels smart.",
            },
            {
              title: "24/7 Duty Desk",
              desc: "Round the clock support, dedicated account manager and rapid response for any travel disruption or contingency.",
            },
            {
              title: "Visa & Documentation Support",
              desc: "Complete visa processing for business travel across multiple destinations, solely from UAE-based operations.",
            },
            {
              title: "Expense & Policy Management",
              desc: "We help implement travel policies, track spend analytics and provide reporting to optimize your travel budget.",
            },
            {
              title: "Group & MICE Travel",
              desc: "From incentive trips to conferences and large-group itineraries — comprehensive handling under one roof.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-14 md:py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Elevate Your Corporate Travel Program Today
        </h2>
        <p className="mb-6 text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
          Partner with Arabian Amenity Travels and ensure your business journeys are efficient, secure and tailored for success.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-blue-900 font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition"
        >
          Talk to our Corporate Specialist
        </motion.a>
      </section>
    </div>
  );
}
