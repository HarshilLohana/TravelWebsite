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

  // Load user from localStorage
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

  // Handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Submit form
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

      setForm((prev) => ({
        ...prev,
        message: "",
      }));
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
            key={currentImage}
            src={heroImages[currentImage]}
            alt="Contact Arabian Amenity Travels for travel enquiries and corporate bookings"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
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

      {/* CONTACT FORM SECTION */}
      <section className="relative py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Our travel experts are ready to help you with your dream vacation or business trip.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-gray-100 space-y-7"
        >
          {/* SUCCESS & ERROR */}
          {success && <p className="text-green-600 font-semibold text-sm">{success}</p>}
          {error && <p className="text-red-600 font-semibold text-sm">{error}</p>}

          {/* NAME */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              required
              value={form.name}
              disabled={isLogged}
              onChange={handleChange}
              className="peer w-full pt-5 pb-2.5 px-4 border-b-2 border-gray-300 bg-transparent 
                         text-gray-900 placeholder-transparent focus:outline-none 
                         focus:border-blue-600 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-sm md:text-base"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-1 text-gray-500 text-xs md:text-sm transition-all
                         peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                         peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Your Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative group">
            <input
              type="email"
              id="email"
              required
              value={form.email}
              disabled={isLogged}
              onChange={handleChange}
              className="peer w-full pt-5 pb-2.5 px-4 border-b-2 border-gray-300 bg-transparent 
                         text-gray-900 placeholder-transparent focus:outline-none 
                         focus:border-blue-600 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-sm md:text-base"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-1 text-gray-500 text-xs md:text-sm transition-all
                         peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                         peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Your Email
            </label>
          </div>

          {/* MESSAGE */}
          <div className="relative group">
            <textarea
              id="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="peer w-full pt-5 pb-2.5 px-4 border-b-2 border-gray-300 bg-transparent 
                         text-gray-900 placeholder-transparent focus:outline-none 
                         focus:border-blue-600 transition-all resize-none text-sm md:text-base"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-1 text-gray-500 text-xs md:text-sm transition-all
                         peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                         peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600"
            >
              Your Message
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3.5 md:py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white 
                       font-semibold rounded-full shadow-md transition-all text-sm md:text-base"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* CONTACT DETAILS */}
        <div className="max-w-4xl mx-auto mt-12 md:mt-16 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-gray-800">
              Contact Information
            </h3>
            <div className="space-y-3 text-gray-700 text-sm md:text-base">
              <p>
                <strong>Tel:</strong>{" "}
                <a href="tel:+97142648306" className="text-blue-600 hover:underline">
                  +971 56 685 7588
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:ops@arabianamenity.com" className="hover:underline">
                  ops@arabianamenity.com
                </a>
              </p>
              <p className="max-w-2xl mx-auto">
                <strong>Head Office:</strong> Office 400-8, 4th Floor, Fahidi Heights Office Tower, Bur Dubai, UAE
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-blue-600 text-white text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Let’s Start Planning Your Next Adventure
        </motion.h3>
        <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base">
          We’ll get back to you within 24 hours. Your perfect journey begins with a single message.
        </p>
      </section>
    </div>
  );
}
