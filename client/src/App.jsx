// App.jsx
import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { Header } from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import RentCar from "./components/RentCar";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import CruiseBooking from "./components/CruiseBooking";
import WorldwideVisa from "./components/WorldwideVisa";
import WorldwideHotels from "./components/WorldwideHotels";
import WorldwideInsurance from "./components/WorldwideInsurance";
import WorldwideChauffeur from "./components/WorldwideChauffeur";
import CorporateTravel from "./components/CorporateTravel";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SplashScreen from "./components/SplashScreen";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/AdminDashboard";

// Page transition
const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const PageWrapper = ({ children }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// This component will ALWAYS be inside <Router>
function MainLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Header />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/rentacar" element={<PageWrapper><RentCar /></PageWrapper>} />
          <Route path="/cruisebooking" element={<PageWrapper><CruiseBooking /></PageWrapper>} />
          <Route path="/visaassistance" element={<PageWrapper><WorldwideVisa /></PageWrapper>} />
          <Route path="/hotelbooking" element={<PageWrapper><WorldwideHotels /></PageWrapper>} />
          <Route path="/travelinsurance" element={<PageWrapper><WorldwideInsurance /></PageWrapper>} />
          <Route path="/chauffeurservice" element={<PageWrapper><WorldwideChauffeur /></PageWrapper>} />
          <Route path="/ctravel" element={<PageWrapper><CorporateTravel /></PageWrapper>} />
          <Route path="/reviews" element={<PageWrapper><Reviews /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactUs /></PageWrapper>} />
          <Route path="/admin" element={<PageWrapper><AdminDashboard /></PageWrapper>} />
          <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AnimatePresence>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <Router>
      <Suspense fallback={null}>
        <MainLayout />
      </Suspense>
    </Router>
  );
}
