import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

const heroImages = [
  "/images/contact1.webp",
  "/images/contact2.webp",
  "/images/contact3.webp",
];

export default function ContactUs() {
  const [currentImage, setCurrentImage] = useState(0);

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // STATUS
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // IS USER LOGGED?
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user) {
      setIsLogged(true);
      setForm({
        name: user.name || "",
        email: user.email || "",
        message: "",
      });
    }
  }, []);

  // Hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_BASE_URL}/api/contact`, form, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      setSuccess("Your message has been sent successfully!");
      setForm((prev) => ({ ...prev, message: "" }));
    } catch (err) {
      setError("Failed to send message. Try again.");
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[70svh] md:min-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[currentImage]}
            src={heroImages[currentImage]}
            alt="Contact Arabian Amenity Travels"
            loading={currentImage === 0 ? "eager" : "lazy"}
            fetchpriority={currentImage === 0 ? "high" : "auto"}
            decoding="async"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <h1 className="sr-only">
          Contact Arabian Amenity Travels – Global Tours & Corporate Travel Enquiries
        </h1>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-t from-black/70 via-black/45 to-black/25 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(1.8rem,6vw,3.5rem)] font-extrabold mb-4 leading-tight"
          >
            Get in Touch with Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[clamp(0.95rem,2.5vw,1.2rem)] max-w-2xl text-gray-200"
          >
            Let’s make your next travel experience extraordinary — we’re just a
            message away!
          </motion.p>
        </div>
      </section>

      {/* FORM */}
      <section className="relative py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-100">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100 space-y-7"
        >
          {success && <p className="text-green-600 font-semibold text-sm">{success}</p>}
          {error && <p className="text-red-600 font-semibold text-sm">{error}</p>}

          <input
            id="name"
            value={form.name}
            disabled={isLogged}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            id="email"
            type="email"
            value={form.email}
            disabled={isLogged}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            id="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
          />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}
