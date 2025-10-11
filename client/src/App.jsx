// App.jsx
import React, { useState, useEffect, Suspense } from "react";
import { Header } from './components/Header';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import RentCar from "./components/RentCar";
import SplashScreen from "./components/SplashScreen.jsx";

// Page animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

// Transition settings
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Wrapper component to animate route content
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/rentacar" element={<RentCar />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Finish loading after splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // splash duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <Router>
      <Suspense fallback={null}>
        <Header /> {/* Always visible navbar */}
        <AnimatedRoutes /> {/* Page content with animations */}
        <Footer /> {/* Footer always visible, no flashing */}
      </Suspense>
    </Router>
  );
}

export default App;
