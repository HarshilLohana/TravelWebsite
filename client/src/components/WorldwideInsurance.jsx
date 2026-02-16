import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const insuranceHeroImages = [
  "/images/insurance1.webp",
  "/images/insurance2.webp",
  "/images/insurance3.webp"
];

const insurancePlans = [
  {
    title: "Comprehensive Travel Insurance",
    description:
      "Covers medical emergencies, trip cancellations, and lost belongings — for worry-free global travel.",
    icon: "🛡️"
  },
  {
    title: "Family & Group Plans",
    description:
      "Protect your loved ones with flexible multi-traveler policies designed for family vacations.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Corporate & Business Travel",
    description:
      "Tailored insurance for corporate clients — safeguard employees during international trips.",
    icon: "💼"
  },
  {
    title: "Student Travel Insurance",
    description:
      "Affordable plans designed for students studying abroad — stay secure wherever you go.",
    icon: "🎓"
  }
];

export default function WorldwideInsurance() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % insuranceHeroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={insuranceHeroImages[currentImage]}
            src={insuranceHeroImages[currentImage]}
            alt="Worldwide travel insurance services by Arabian Amenity Travels"
            loading={currentImage === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={currentImage === 0 ? "high" : "auto"}
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover brightness-75 will-change-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <h1 className="sr-only">
          Worldwide Travel Insurance Services by Arabian Amenity Travels
        </h1>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black/70 via-black/40 to-black/20 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-bold mb-4"
          >
            Worldwide Travel Insurance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[clamp(0.95rem,2.5vw,1.15rem)] mb-6 max-w-2xl text-gray-200"
          >
            Travel confidently anywhere in the world — Arabian Amenity Travels
            ensures you’re protected with trusted global insurance partners.
          </motion.p>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Choose the Right Coverage for Every Journey
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {insurancePlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{plan.icon}</div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">
                {plan.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-14 bg-white px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800">
          Why Choose Arabian Amenity Travels for Travel Insurance?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              title: "Global Partner Network",
              text: "We collaborate with leading international insurance providers for unmatched protection."
            },
            {
              title: "Instant Assistance",
              text: "24/7 emergency and claim support — wherever you are, help is just a call away."
            },
            {
              title: "Tailored Policies",
              text: "Get customized plans that fit your trip — whether leisure, business, or study."
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
          Secure Your Next Adventure
        </h2>
        <p className="mb-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Travel the world with confidence — let Arabian Amenity Travels handle
          your insurance so you can focus on making memories.
        </p>
      </section>
    </div>
  );
}
