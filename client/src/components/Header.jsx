import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/constants.js";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);


  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();

  /* ---------------- USER LOAD ---------------- */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoadingUser(false);
  }, []);

  /* ---------------- SCROLL HEADER ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- CLICK OUTSIDE DROPDOWN ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-dropdown")) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
  if (!mobileNav) setMobileDropdown(null);
}, [mobileNav]);


  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (loadingUser) return null;

  return (
    <>
      {/* ✅ SEO H1 (hidden but indexed) */}
      <h1 className="sr-only">
        Arabian Amenity Travels – Global Tours, Corporate Travel & Luxury Experiences
      </h1>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#0a0d1a]/95 shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3">

          {/* LOGO */}
          <Link to="/">
            <img
              src="/images/LogoNOBG.webp"
              alt="Arabian Amenity Travels Logo"
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8 font-semibold text-white">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link key={item.name} to={item.href} className="hover:text-blue-300">
                  {item.name}
                </Link>
              ) : (
                <div key={item.name} className="relative nav-dropdown">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex items-center hover:text-blue-300"
                    aria-expanded={openDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-3 w-56 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden"
                      >
                        {item.items.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-3 hover:bg-gray-100"
                          >
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

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex space-x-4">
            {!user ? (
              <>
                <Link to="/login" className={`
  px-6 py-2 rounded-full font-bold transition-all
  ${scrolled
    ? "bg-white text-blue-700"
    : "bg-white/10 text-white backdrop-blur-md border border-white/40"}
`}
>
                  Login
                </Link>
                <Link to="/signup" className="bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to={user.role === "admin" ? "/admin" : "/dashboard"}>
                  <button className="bg-green-600 px-5 py-2 rounded-full">
                    Dashboard
                  </button>
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-600 px-5 py-2 rounded-full"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* MOBILE MENU */}
          <button className="md:hidden text-white" onClick={() => setMobileNav(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 bg-[#0a0d1a] z-50 p-6 text-white overflow-y-auto overscroll-contain"

          >
            <div className="flex justify-end mb-6">
              <X size={30} onClick={() => setMobileNav(false)} />
            </div>
<nav className="flex flex-col items-center space-y-6 text-xl">
  {navItems.map((item) =>
    item.type === "link" ? (
      <Link
        key={item.name}
        to={item.href}
        onClick={() => setMobileNav(false)}
      >
        {item.name}
      </Link>
    ) : (
      <div key={item.name} className="text-center w-full">
        <button
          onClick={() =>
            setMobileDropdown(
              mobileDropdown === item.name ? null : item.name
            )
          }
          className="flex items-center justify-center w-full"
        >
          {item.name}
          <ChevronDown
            className={`ml-2 transition-transform ${
              mobileDropdown === item.name ? "rotate-180" : ""
            }`}
            size={16}
          />
        </button>

        {mobileDropdown === item.name && (
          <div className="mt-3 space-y-2">
            {item.items.map((sub) => (
              <Link
                key={sub.name}
                to={sub.href}
                onClick={() => {
                  setMobileDropdown(null);
                  setMobileNav(false);
                }}
                className="block text-blue-300 py-1"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  )}

  {/* ✅ MOBILE AUTH ACTIONS (CORRECT PLACE) */}
  <div className="w-full mt-10 flex flex-col space-y-4">
    {!user ? (
      <>
        <Link
          to="/login"
          onClick={() => setMobileNav(false)}
          className="w-full text-center py-3 rounded-full bg-white text-blue-700 font-bold"
        >
          Login
        </Link>

        <Link
          to="/signup"
          onClick={() => setMobileNav(false)}
          className="w-full text-center py-3 rounded-full bg-blue-500 text-white font-bold"
        >
          Sign Up
        </Link>
      </>
    ) : (
      <>
        <Link
          to={user.role === "admin" ? "/admin" : "/dashboard"}
          onClick={() => setMobileNav(false)}
          className="w-full text-center py-3 rounded-full bg-green-600 text-white font-bold"
        >
          Dashboard
        </Link>

        <button
          onClick={() => {
            logout();
            setMobileNav(false);
          }}
          className="w-full py-3 rounded-full bg-red-600 text-white font-bold"
        >
          Logout
        </button>
      </>
    )}
  </div>
</nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
