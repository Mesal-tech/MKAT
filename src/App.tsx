import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Ensure ScrollToPlugin is imported for smooth scrolling
import { Analytics } from "@vercel/analytics/react";

import { useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import MemeSection from "./components/MemeSection"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const { isDark } = useTheme();

  const heroRef = useRef(null);

  useEffect(() => {
    // --- 1. Pinning Setup (CORRECTED) ---
    // Pin hero while Info scrolls up to cover it
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=100%", // keep hero pinned for one viewport height
      pin: true,
      scrub: true,
      pinSpacing: false, // allow Info to overlap
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <Router>
      <div
        className="min-h-screen transition-all duration-500"
      >
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <div ref={heroRef}>
                  <Hero />
                </div>
                <About />
                <MemeSection />
                <HowToBuy />
                <Tokenomics />
                <Footer />
              </>
            }
          />

        </Routes>



        <Analytics />
      </div>
    </Router>
  );
}

export default App;
