import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const visaHeroImages = [
  "/images/visa1.webp",
  "/images/visa2.webp",
  "/images/visa3.webp"
];

export default function WorldwideVisa() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % visaHeroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={visaHeroImages[currentImage]}
            alt="Worldwide tourist visa assistance by Arabian Amenity Travels"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40">
          {/* SEO H1 (hidden for Google) */}
<h1 className="sr-only">
  Worldwide Tourist Visa Assistance Services by Arabian Amenity Travels
</h1>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-3"
          >
            Worldwide Tourist Visa Assistance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mb-6 max-w-2xl"
          >
            Arabian Amenity Travels provides worldwide tourist visa documentation support — 
            helping you explore every destination with ease, exclusively from the UAE.
          </motion.p>
        </div>
      </div>

      {/* --- VISA SERVICE SECTION --- */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Your Gateway to Global Travel
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🧳",
              title: "Tourist Visa Processing",
              desc: "Fast, reliable, and hassle-free tourist visa assistance for over 100+ countries — all handled from the UAE."
            },
            {
              icon: "📄",
              title: "Documentation Support",
              desc: "We ensure every document meets embassy requirements for a smooth and successful application."
            },
            {
              icon: "🌍",
              title: "Global Reach",
              desc: "From Europe to Asia to the Americas — our services cover all destinations across the world."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 bg-white px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Why Choose Arabian Amenity Travels?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "UAE-Based Experts",
              text: "We specialize in visa assistance for travelers applying from the UAE — ensuring quick embassy coordination."
            },
            {
              title: "Professional & Transparent Process",
              text: "Every step is handled with clarity — no hidden fees, no confusion, just smooth visa handling."
            },
            {
              title: "Proven Track Record",
              text: "Thousands of successful tourist visa applications for destinations across the globe."
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
          Plan Your Next Adventure with Confidence
        </h2>
        <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
          Trust Arabian Amenity Travels for your worldwide tourist visa processing — 
          making global travel simple, safe, and worry-free.
        </p>
      </section>
    </div>
  );
}
