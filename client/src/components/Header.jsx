import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/constants.js";
import { Link } from "react-router-dom"; // 👈 NEW

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown !== null && !event.target.closest(".group.relative")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <header className="absolute top-0 w-full z-50 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="/images/LogoNOBG.png"
              alt="Logo"
              className="h-12 w-auto drop-shadow-md"
            />
          </Link>
        </div>

        {/* 🌐 Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-semibold drop-shadow-md">
          {navItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-blue-300 transition-colors py-4"
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name} className="group relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.name ? null : item.name)
                  }
                  className="flex items-center hover:text-blue-300 transition-colors py-4"
                >
                  {item.name}{" "}
                  <ChevronDown
                    className={`ml-1 transform transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
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
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white px-4 py-2 rounded-full font-bold transition border border-white">
            LOGIN
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition drop-shadow-md">
            SIGNUP
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileNav(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
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
              <button onClick={() => setMobileNav(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center space-y-6 text-xl font-bold">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileNav(false)}
                    className="hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name} className="w-full text-center">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-center w-full hover:text-blue-600"
                    >
                      {item.name}{" "}
                      <ChevronDown
                        className={`ml-1 transform transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
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
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => {
                                setMobileNav(false);
                                setOpenDropdown(null);
                              }}
                              className="block w-full py-2 hover:bg-gray-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}

              <div className="w-full flex justify-center space-x-4 mt-4">
                <button className="w-1/2 bg-gray-200 text-gray-800 px-6 py-3 rounded-full">
                  LOGIN
                </button>
                <button className="w-1/2 bg-blue-600 text-white px-6 py-3 rounded-full">
                  SIGNUP
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
