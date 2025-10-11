// components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const footerBackground = "/images/footer_bg_2.jpg";

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${footerBackground})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1, // <-- This makes it transparent
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-gray-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are a premium travel agency helping you explore the world in style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/rentacar" className="hover:text-blue-600">Rent a Car</Link></li>
              <li><Link to="#services" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="#contactus" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#paris" className="hover:text-blue-600">Paris</Link></li>
              <li><Link to="#tokyo" className="hover:text-blue-600">Tokyo</Link></li>
              <li><Link to="#bora-bora" className="hover:text-blue-600">Bora Bora</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">
              info@yourtravelagency.com<br/>
              +971 123 456 789
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-600"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-600"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-600"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-4 pt-4 text-center text-sm">
          &copy; 2025 Arabian Amenity Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
