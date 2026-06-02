import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/constants.js";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoadingUser(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-dropdown")) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNav ? "hidden" : "";
  }, [mobileNav]);

  useEffect(() => {
    setMobileNav(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (loadingUser) return null;

  return (
    <>
      <h1 className="sr-only">Arabian Amenity Travels - Global Tours, Corporate Travel and Luxury Experiences</h1>

      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0d1a]/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-3">

          <Link to="/">
            <img 
  src="/images/LogoNOBG.webp" 
  alt="Arabian Amenity Travels Logo" 
  className="h-16 md:h-28 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
/>
          </Link>

          <nav className="hidden md:flex space-x-6 font-semibold text-white text-base">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link key={item.name} to={item.href} className="hover:text-[#c9a84c] transition-colors duration-200">
                  {item.name}
                </Link>
              ) : (
                <div key={item.name} className="relative nav-dropdown">
                  <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className="flex items-center hover:text-[#c9a84c] transition-colors duration-200" aria-expanded={openDropdown === item.name}>
                    {item.name}
                    <ChevronDown size={16} className={`ml-1 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute left-0 mt-3 w-60 bg-[#0a0d1a] border border-[#c9a84c]/20 text-white rounded-xl shadow-2xl overflow-hidden">
                        {item.items.map((sub) => (
                          <Link key={sub.name} to={sub.href} onClick={() => setOpenDropdown(null)} className="block px-5 py-3 hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] transition-colors duration-200 text-sm border-b border-white/5 last:border-0">
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            {!user ? (
              <>
                <Link to="/login" className="px-5 py-2 rounded-full font-semibold text-sm transition-all bg-white/10 text-white backdrop-blur-md border border-white/40 hover:bg-white/20">
                  Login
                </Link>
                <Link to="/signup" className="bg-[#c9a84c] hover:bg-[#b8963e] text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-200">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to={user.role === "admin" ? "/admin" : "/dashboard"}>
                  <button className="bg-[#c9a84c] hover:bg-[#b8963e] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200">
                    Dashboard
                  </button>
                </Link>
                <button onClick={logout} className="bg-white/10 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 border border-white/20">
                  Logout
                </button>
              </>
            )}
          </div>

          <button className="md:hidden text-white p-2 rounded-lg active:scale-95 transition" onClick={() => setMobileNav(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileNav && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed inset-0 bg-[#0a0d1a] z-50 overflow-y-auto overscroll-contain">

            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <Link to="/" onClick={() => setMobileNav(false)}>
                <img src="/images/LogoNOBG.webp" alt="Arabian Amenity Travels" className="h-12 w-auto" />
              </Link>
              <button onClick={() => setMobileNav(false)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <nav className="px-6 py-6 flex flex-col space-y-1">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <Link key={item.name} to={item.href} className="text-white hover:text-[#c9a84c] py-3 px-4 rounded-xl hover:bg-white/5 transition-colors duration-200 font-medium">
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name}>
                    <button onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)} className="flex items-center justify-between w-full text-white hover:text-[#c9a84c] py-3 px-4 rounded-xl hover:bg-white/5 transition-colors duration-200 font-medium">
                      {item.name}
                      <ChevronDown className={`transition-transform duration-200 ${mobileDropdown === item.name ? "rotate-180 text-[#c9a84c]" : ""}`} size={18} />
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === item.name && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                          <div className="ml-4 mt-1 mb-2 border-l-2 border-[#c9a84c]/40 pl-4 space-y-1">
                            {item.items.map((sub) => (
                              <Link key={sub.name} to={sub.href} className="block py-2.5 text-gray-300 hover:text-[#c9a84c] text-sm transition-colors duration-200">
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </nav>

            <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-6" />

            <div className="px-6 py-6 space-y-3">
              <a href="tel:+971566857588" className="flex items-center gap-3 text-[#c9a84c] font-semibold py-3 px-4 rounded-xl bg-[#c9a84c]/10">
                <Phone size={18} />
                +971 56 685 7588
              </a>
              {!user ? (
                <>
                  <Link to="/login" className="block w-full text-center py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition">
                    Login
                  </Link>
                  <Link to="/signup" className="block w-full text-center py-3 rounded-full bg-[#c9a84c] text-white font-semibold hover:bg-[#b8963e] transition">
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link to={user.role === "admin" ? "/admin" : "/dashboard"} className="block w-full text-center py-3 rounded-full bg-[#c9a84c] text-white font-semibold hover:bg-[#b8963e] transition">
                    Dashboard
                  </Link>
                  <button onClick={logout} className="w-full py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-red-600 transition">
                    Logout
                  </button>
                </>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
