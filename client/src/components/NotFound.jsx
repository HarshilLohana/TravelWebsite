import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Phone, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Arabian Amenity Travels</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0d1a] flex flex-col items-center justify-center px-6 text-white text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/LogoNOBG.webp"
            alt="Arabian Amenity Travels"
            className="h-24 w-auto mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(6rem,20vw,12rem)] font-extrabold text-[#c9a84c] leading-none"
        >
          404
        </motion.h1>

        {/* Gold divider */}
        <div className="h-1 w-24 rounded-full bg-[#c9a84c] my-6" />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8">
            The page you are looking for does not exist or has been moved.
            Let us help you find your way back.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8963e] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/20 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/10 pt-8 w-full max-w-lg"
        >
          <p className="text-gray-500 text-sm mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { name: "Services", href: "/services" },
              { name: "Rent a Car", href: "/rentacar" },
              { name: "Visa Assistance", href: "/visaassistance" },
              { name: "Hotel Booking", href: "/hotelbooking" },
              { name: "Corporate Travel", href: "/ctravel" },
              { name: "Reviews", href: "/reviews" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-[#c9a84c] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 text-sm text-gray-500"
        >
          <a href="tel:+971566857588" className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors">
            <Phone size={14} />
            +971 56 685 7588
          </a>
          <a href="mailto:ops@arabianamenity.com" className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors">
            <Mail size={14} />
            ops@arabianamenity.com
          </a>
        </motion.div>

      </div>
    </>
  );
}