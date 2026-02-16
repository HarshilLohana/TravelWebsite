import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Williams",
    title: "Marketing Director, UK",
    image: "https://avatars.dicebear.com/api/bottts/sarah.svg",
    review:
      "Our corporate trip to Dubai was perfectly organized by Arabian Amenity Travels. From flights to events, everything was flawless. Their team truly understands luxury and precision!",
  },
  {
    name: "Ahmed Khan",
    title: "Entrepreneur, UAE",
    image: "https://avatars.dicebear.com/api/bottts/ahmed.svg",
    review:
      "Arabian Amenity Travels arranged our Maldives vacation — breathtaking villas, private transfers, and seamless planning. Couldn’t ask for a better experience.",
  },
  {
    name: "Emily Carter",
    title: "Travel Blogger, USA",
    image: "https://avatars.dicebear.com/api/bottts/emily.svg",
    review:
      "They’re redefining travel luxury. Every detail felt curated — from the hotel selection to local experiences. 100% recommended!",
  },
];

const carouselImages = [
  "/images/review1.webp",
  "/images/review2.webp",
  "/images/review3.webp",
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-stone-800 relative overflow-hidden bg-stone-100">
      {/* Hero Carousel */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselImages[current]}
            src={carouselImages[current]}
            alt="Customer Reviews & Testimonials | Arabian Amenity Travels"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25 flex flex-col items-center justify-center text-center px-6">
          <h1 className="sr-only">
            Customer Reviews & Testimonials | Arabian Amenity Travels
          </h1>

          <motion.h2
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-extrabold text-white drop-shadow-lg mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.p
            className="text-[clamp(0.95rem,2.5vw,1.2rem)] text-white/85 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Real stories from real travelers — see how Arabian Amenity Travels creates experiences that stay with you forever.
          </motion.p>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="relative flex justify-center items-center py-12 md:py-16 px-6">
        <div className="relative w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6 md:p-10 text-center relative"
            >
              <Quote className="absolute top-4 left-4 text-blue-400 opacity-30 w-8 h-8 md:w-10 md:h-10" />
              <div className="flex flex-col items-center">
                <motion.img
                  src={testimonials[testimonialIndex].image}
                  alt={testimonials[testimonialIndex].name}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-md mb-5 md:mb-6"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <p className="text-sm md:text-lg italic text-gray-700 leading-relaxed mb-5 md:mb-6">
                  “{testimonials[testimonialIndex].review}”
                </p>
                <h3 className="text-base md:text-2xl font-semibold text-blue-700">
                  {testimonials[testimonialIndex].name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">
                  {testimonials[testimonialIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Review Cards Grid */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-blue-800">
          More Happy Travelers
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Raj Mehta",
              text: "Everything from flight booking to hotel transfers was handled seamlessly. Highly professional team!",
              stars: 5,
            },
            {
              name: "Lisa Wong",
              text: "Arabian Amenity Travels made our Europe trip stress-free. Every city was perfectly planned. Loved their support.",
              stars: 5,
            },
            {
              name: "David Miller",
              text: "Their 24/7 travel assistance made a big difference when our flight was delayed. Exceptional service!",
              stars: 4,
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-white p-5 md:p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="flex justify-center mb-3 md:mb-4 text-yellow-500 text-lg md:text-xl">
                {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </div>
              <p className="text-gray-700 italic mb-4 md:mb-6 text-sm md:text-base">
                “{review.text}”
              </p>
              <h3 className="font-semibold text-blue-700 text-sm md:text-base">
                {review.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-14 md:py-16 px-6">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join Hundreds of Satisfied Travelers
        </motion.h2>
        <p className="text-white/90 mb-6 text-sm md:text-base">
          Your story could be next — plan your dream journey with Arabian Amenity Travels.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-white text-blue-700 font-semibold py-3 px-7 rounded-full shadow-md hover:shadow-lg transition"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
}
