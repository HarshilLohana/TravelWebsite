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
    <div className="w-full bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={visaHeroImages[currentImage]}
            src={visaHeroImages[currentImage]}
            alt="Worldwide tourist visa assistance by Arabian Amenity Travels"
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

        {/* SEO H1 */}
        <h1 className="sr-only">
          Worldwide Tourist Visa Assistance Services by Arabian Amenity Travels
        </h1>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black/70 via-black/40 to-black/20 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-bold mb-4"
          >
            Worldwide Tourist Visa Assistance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[clamp(0.95rem,2.5vw,1.15rem)] mb-6 max-w-2xl text-gray-200"
          >
            Arabian Amenity Travels provides worldwide tourist visa documentation
            support — helping you explore every destination with ease,
            exclusively from the UAE.
          </motion.p>
        </div>
      </section>

      {/* VISA SERVICES */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Your Gateway to Global Travel
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl text-center"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{item.icon}</div>
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-14 bg-white px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-gray-800">
          Why Choose Arabian Amenity Travels?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
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
          Plan Your Next Adventure with Confidence
        </h2>
        <p className="mb-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Trust Arabian Amenity Travels for your worldwide tourist visa processing —
          making global travel simple, safe, and worry-free.
        </p>
      </section>
    </div>
  );
}
