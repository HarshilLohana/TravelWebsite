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
    <div className="w-full bg-white text-gray-900">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={insuranceHeroImages[currentImage]}
            alt="Worldwide travel insurance services by Arabian Amenity Travels"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30">
          {/* SEO H1 (hidden for Google) */}
<h1 className="sr-only">
  Worldwide Travel Insurance Services by Arabian Amenity Travels
</h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-3"
          >
            Worldwide Travel Insurance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg mb-6 max-w-2xl"
          >
            Travel confidently anywhere in the world — Arabian Amenity Travels
            ensures you’re protected with trusted global insurance partners.
          </motion.p>
        </div>
      </div>

      {/* --- INSURANCE CATEGORIES --- */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Choose the Right Coverage for Every Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {insurancePlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{plan.title}</h3>
              <p className="text-gray-600 text-sm">{plan.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 bg-white px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose Arabian Amenity Travels for Travel Insurance?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
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
          Secure Your Next Adventure
        </h2>
        <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
          Travel the world with confidence — let Arabian Amenity Travels handle
          your insurance so you can focus on making memories.
        </p>
      </section>
    </div>
  );
}
