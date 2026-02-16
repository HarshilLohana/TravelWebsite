// components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const footerBackground = "/images/footer_bg_final.png";

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
          opacity: 0.1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-gray-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              Arabian Amenity Travels is a premium travel agency offering global
              tours, corporate travel solutions, luxury experiences, and UAE-based
              services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ctravel" className="hover:text-blue-600">Corporate Travel</Link></li>
              <li><Link to="/rentacar" className="hover:text-blue-600">Rent a Car</Link></li>
              <li><Link to="/visaassistance" className="hover:text-blue-600">Worldwide Visa</Link></li>
              <li><Link to="/hotelbooking" className="hover:text-blue-600">Hotel Booking</Link></li>
              <li><Link to="/travelinsurance" className="hover:text-blue-600">Travel Insurance</Link></li>
              <li><Link to="/chauffeurservice" className="hover:text-blue-600">Chauffeur Service</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+97142648306" className="hover:text-blue-600">
                  +971 4 264 8306
                </a>
              </li>
              <li>
                <a href="mailto:ops@arabianamenity.com" className="hover:text-blue-600">
                  ops@arabianamenity.com
                </a>
              </li>
              <li>
                Office 400-8, 4th Floor<br />
                Fahidi Heights Office Tower<br />
                Bur Dubai, Dubai, UAE
              </li>
            </ul>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/arabianamenitytravels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/arabian-amenity-travels"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-4 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Arabian Amenity Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
