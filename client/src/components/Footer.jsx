import React from "react";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0d1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
  src="/images/LogoNOBG.webp" 
  alt="Arabian Amenity Travels" 
  className="h-32 w-auto mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
/>
            <p className="text-gray-400 text-sm leading-relaxed">
              A premium travel agency offering global tours, corporate travel solutions, luxury experiences, and UAE-based services.
            </p>
            <div className="flex space-x-3 mt-5">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a84c] flex items-center justify-center transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/arabianamenity" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a84c] flex items-center justify-center transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/arabian-amenity-travels" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#c9a84c] flex items-center justify-center transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-[#c9a84c] font-bold text-base uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[{name:"Home",href:"/"},{name:"About Us",href:"/about"},{name:"Services",href:"/services"},{name:"Reviews",href:"/reviews"},{name:"Contact Us",href:"/contact"}].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#c9a84c] transition-colors duration-200 flex items-center justify-center md:justify-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] inline-block flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-[#c9a84c] font-bold text-base uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {[{name:"Corporate Travel",href:"/ctravel"},{name:"Rent a Car",href:"/rentacar"},{name:"Cruise Booking",href:"/cruisebooking"},{name:"Worldwide Visa",href:"/visaassistance"},{name:"Hotel Booking",href:"/hotelbooking"},{name:"Travel Insurance",href:"/travelinsurance"},{name:"Chauffeur Service",href:"/chauffeurservice"}].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#c9a84c] transition-colors duration-200 flex items-center justify-center md:justify-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] inline-block flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-[#c9a84c] font-bold text-base uppercase tracking-widest mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+971566857588" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#c9a84c] transition-colors duration-200">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Phone size={14} /></div>
                  +971 56 685 7588
                </a>
              </li>
              <li>
                <a href="mailto:ops@arabianamenity.com" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-[#c9a84c] transition-colors duration-200">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Mail size={14} /></div>
                  ops@arabianamenity.com
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5"><MapPin size={14} /></div>
                <span>Office 400-8, 4th Floor<br />Fahidi Heights Office Tower<br />Bur Dubai, Dubai, UAE</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-6" />
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Arabian Amenity Travels. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
          <Link to="/refund-policy" className="hover:text-[#c9a84c] transition-colors">Refund Policy</Link>
          <span className="text-gray-700">|</span>
          <Link to="/terms-conditions" className="hover:text-[#c9a84c] transition-colors">Terms & Conditions</Link>
          <span className="text-gray-700">|</span>
          <Link to="/privacy-policy" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
