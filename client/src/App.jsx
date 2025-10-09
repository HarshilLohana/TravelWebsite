import React, { useState, useEffect, useRef } from "react";
import { Plane, Globe, Compass, Star, Search, Facebook, Twitter, Instagram, Linkedin, ChevronDown, Menu, X, Users, MapPin, Award, Mail, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Array of images for the hero section
const heroImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg"
];

const navItems = [
  { name: "How it works", href: "#howitworks", type: "link" },
  { 
    name: "Trips", 
    type: "dropdown", 
    items: [
      { name: "Start Planning", href: "#startplanning" },
      { name: "Services", href: "#services" },
      { name: "Holidays", href: "#holidays" }
    ]
  },
  { name: "Blog", href: "#blogs", type: "link" },
  { name: "Reviews", href: "#reviews", type: "link" },
  { name: "Contact", href: "#contactus", type: "link" }
];

const statsData = [
  { countTo: 10, title: "Years of Experience", icon: <Award size={36} className="text-blue-600 mx-auto mb-2" />, suffix: "+" },
  { countTo: 5000, title: "Happy Customers", icon: <Users size={36} className="text-blue-600 mx-auto mb-2" />, suffix: "+" },
  { countTo: 100, title: "Tour Destinations", icon: <MapPin size={36} className="text-blue-600 mx-auto mb-2" />, suffix: "+" },
];

const destinations = [
  { id: 1, name: "Paris, France", text: "Iconic landmarks, exquisite cuisine, and world-class art.", image: '/images/image5.jpg' },
  { id: 2, name: "Tokyo, Japan", text: "A mesmerizing blend of ancient temples and futuristic cityscapes.", image: '/images/image6.jpg' },
  { id: 3, name: "Bora Bora", text: "Private villas, turquoise waters, and ultimate relaxation.", image: '/images/image7.jpg' },
];

const tours = [
  { id: 1, name: "Adventure Seeker", duration: "7 Days", text: "Premium experience in exotic destinations, perfect for thrill-seekers.", image: 'https://images.unsplash.com/photo-1504101185010-3882f05a5a1e?q=80&w=2574&auto=format&fit=crop' },
  { id: 2, name: "Relaxation Retreat", duration: "10 Days", text: "Thrilling activities and breathtaking adventures for a peaceful getaway.", image: 'https://images.unsplash.com/photo-1502759683294-ea460d37e602?q=80&w=2574&auto=format&fit=crop' },
  { id: 3, name: "Cultural Explorer", duration: "5 Days", text: "Perfect for couples seeking tranquility and deep cultural immersion.", image: 'https://images.unsplash.com/photo-1522854084620-1a777646a782?q=80&w=2574&auto=format&fit=crop' },
];

const whyUsItems = [
  { id: 1, title: "Expert Guidance", text: "Our travel experts provide personalized advice.", icon: <Compass size={48} className="text-[#a18158] mb-4" /> },
  { id: 2, title: "Unbeatable Prices", text: "We find the best deals for your dream vacation.", icon: <Star size={48} className="text-[#a18158] mb-4" /> },
  { id: 3, title: "24/7 Support", text: "We are here to help you every step of the way.", icon: <Globe size={48} className="text-[#a18158] mb-4" /> },
];

const testimonials = [
  { id: 1, name: "Alice Johnson", feedback: "Amazing trip! Everything was perfectly organized.", image: 'https://images.unsplash.com/photo-1573496359142-b8d87734b413?q=80&w=2574&auto=format&fit=crop' },
  { id: 2, name: "Mark Smith", feedback: "Best travel experience ever. Highly recommended!", image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909c34f?q=80&w=2574&auto=format&fit=crop' },
  { id: 3, name: "Sophie Lee", feedback: "Luxury and comfort combined with adventure. Loved it!", image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop' },
];

const AnimatedCounter = ({ countTo, title, icon, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const startTime = Date.now();
      const endTime = startTime + duration;

      const animateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const animatedValue = Math.floor(progress * countTo);
        setCount(animatedValue);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, countTo]);

  return (
    <div ref={ref} className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center">
      {icon}
      <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mt-2">{count}{suffix}</h3>
      <p className="mt-2 text-lg font-semibold text-gray-600">{title}</p>
    </div>
  );
};


const App = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown !== null && !event.target.closest('.group.relative')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  // Automatic image change for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-stone-100 text-stone-800">
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Header has been moved inside the hero section and 'fixed' class removed */}
        <header className="absolute top-0 w-full z-50 text-white">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex items-center space-x-2">
              <Plane className="text-blue-500 h-8 w-8 rotate-45" />
              <span className="text-xl font-bold drop-shadow-md">PEREDRIFT</span>
            </div>
            <nav className="hidden md:flex space-x-6 font-semibold drop-shadow-md">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <a key={item.name} href={item.href} className="hover:text-blue-300 transition-colors py-4">{item.name}</a>
                ) : (
                  <div key={item.name} className="group relative">
                    <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className="flex items-center hover:text-blue-300 transition-colors py-4">
                      {item.name} <ChevronDown className={`ml-1 transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} size={16} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 bg-white text-stone-800 rounded-md shadow-lg py-2"
                        >
                          {item.items.map(subItem => (
                            <a 
                              key={subItem.name} 
                              href={subItem.href} 
                              onClick={() => setOpenDropdown(null)} 
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              ))}
            </nav>
            <div className="hidden md:flex space-x-4">
              <button className="text-white px-4 py-2 rounded-full font-bold transition border border-white">LOGIN</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition drop-shadow-md">SIGNUP</button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileNav(true)}><Menu size={24} /></button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-50 p-6"
            >
              <div className="flex justify-end mb-4">
                <button onClick={() => setMobileNav(false)}><X size={24} /></button>
              </div>
              <nav className="flex flex-col items-center space-y-6 text-xl font-bold">
                {navItems.map((item) => (
                  item.type === "link" ? (
                    <a key={item.name} href={item.href} onClick={() => setMobileNav(false)} className="hover:text-blue-600">{item.name}</a>
                  ) : (
                    <div key={item.name} className="w-full text-center">
                      <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className="flex items-center justify-center w-full hover:text-blue-600">
                        {item.name} <ChevronDown className={`ml-1 transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} size={16} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center mt-2 space-y-2 bg-gray-100 rounded-md shadow-inner"
                          >
                            {item.items.map(subItem => (
                              <a 
                                key={subItem.name} 
                                href={subItem.href} 
                                onClick={() => { setMobileNav(false); setOpenDropdown(null); }} 
                                className="block w-full py-2 hover:bg-gray-200"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                ))}
                <div className="w-full flex justify-center space-x-4 mt-4">
                  <button className="w-1/2 bg-gray-200 text-gray-800 px-6 py-3 rounded-full">LOGIN</button>
                  <button className="w-1/2 bg-blue-600 text-white px-6 py-3 rounded-full">SIGNUP</button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImages[currentImageIndex]}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              alt="Hero"
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/10"></div>
          <div className="absolute bottom-0 w-full h-1/2 bg-[url('https://www.transparentpng.com/download/cloud/cloud-png-white-cloud-in-the-blue-sky-40.png')] bg-cover bg-center animate-pulse"></div>
        </div>
        
        <motion.div 
            className="relative z-20 text-center p-6 flex flex-col items-center justify-center h-full" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            FIND THE PERFECT PLACE TO GO
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl drop-shadow-md">
            Receive personalized recommendations for activities, hotels, and more
          </p>
          <div className="mt-8 flex items-center w-full max-w-4xl bg-white rounded-full p-2 shadow-lg">
            <Search className="text-gray-400 ml-4" size={24} />
            <input 
              type="text" 
              placeholder="What would you like to do?" 
              className="flex-grow p-2 text-gray-800 focus:outline-none placeholder-gray-400" 
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              START PLANNING
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, index) => (
            <AnimatedCounter
              key={index}
              countTo={stat.countTo}
              title={stat.title}
              icon={stat.icon}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="howitworks" className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">HOW IT WORKS</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We believe travel should be seamless and stress-free. Our process is simple: we help you discover the perfect destination, craft a personalized itinerary, and provide 24/7 support so you can relax and enjoy your trip.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">OUR SERVICES</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of services to make your journey unforgettable, from flight and hotel bookings to curated tour packages.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
                <Plane size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold">Flight Bookings</h3>
                <p className="text-sm mt-2 text-gray-600">Find the best deals on flights to any destination.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
                <MapPin size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold">Hotel Reservations</h3>
                <p className="text-sm mt-2 text-gray-600">Secure luxurious stays and comfortable accommodations.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
                <Globe size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold">Tour Packages</h3>
                <p className="text-sm mt-2 text-gray-600">Explore curated tours that fit your style and budget.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
                <Award size={48} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold">Visa Assistance</h3>
                <p className="text-sm mt-2 text-gray-600">Simplify the visa process with our expert guidance.</p>
            </div>
        </div>
      </section>

      {/* Holidays Section */}
      <section id="holidays" className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">HOLIDAY PACKAGES</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover a world of adventure with our exclusive holiday packages tailored for every type of traveler.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-xl text-left">
                <h3 className="text-2xl font-bold text-blue-600">Tropical Escape</h3>
                <p className="mt-2 text-gray-600">An all-inclusive getaway to a stunning island paradise with pristine beaches and vibrant marine life.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl text-left">
                <h3 className="text-2xl font-bold text-blue-600">Mountain Adventure</h3>
                <p className="mt-2 text-gray-600">Hike, ski, and explore breathtaking mountain ranges with our expert-led adventure tours.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl text-left">
                <h3 className="text-2xl font-bold text-blue-600">European Grand Tour</h3>
                <p className="mt-2 text-gray-600">Experience the rich history and culture of Europe with a tour of its most iconic cities and landmarks.</p>
            </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">POPULAR DESTINATIONS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <motion.div 
              key={dest.id} 
              whileHover={{ scale: 1.05 }} 
              className="relative group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            >
              <motion.img 
                src={dest.image} 
                alt={dest.name} 
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div 
                className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              >
                <h3 className="text-xl font-bold mb-2 text-center">{dest.name}</h3>
                <p className="text-sm text-center mb-4">{dest.text}</p>
                <a href="#" className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
                  Learn More
                </a>
              </div>
              <div className="p-6 text-center transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-xl font-semibold uppercase">{dest.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="bg-blue-900 text-white py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#a18158]">OUR TOURS</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <motion.div 
              key={tour.id} 
              whileHover={{ scale: 1.05 }} 
              className="relative group bg-white text-stone-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
            >
              <motion.img 
                src={tour.image} 
                alt={tour.name} 
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              >
                <h3 className="text-xl font-bold mb-2 text-center">{tour.name}</h3>
                <p className="text-sm text-center mb-4">{tour.text}</p>
                <a href="#" className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
                  Learn More
                </a>
              </div>
              <div className="p-6 text-center transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-xl font-bold">{tour.name}</h3>
                <p className="text-gray-600 mt-1">{tour.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">WHY CHOOSE US</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {whyUsItems.map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">WHAT OUR CLIENTS SAY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div 
              key={t.id} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <img src={t.image} alt={t.name} className="w-20 h-20 mx-auto rounded-full mb-4 object-cover" />
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <h3 className="text-lg font-semibold mt-2">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactus" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">GET IN TOUCH</h2>
        <form className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <textarea rows={4} placeholder="Message" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* WhatsApp Chat Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageCircle size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#"><Facebook size={24} className="hover:text-blue-600" /></a>
            <a href="#"><Twitter size={24} className="hover:text-blue-600" /></a>
            <a href="#"><Instagram size={24} className="hover:text-blue-600" /></a>
            <a href="#"><Linkedin size={24} className="hover:text-blue-600" /></a>
          </div>
          <p className="text-sm">&copy; 2025 PEREDRIFT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
