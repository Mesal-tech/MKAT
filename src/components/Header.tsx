import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Twitter, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () =>
      setIsScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Smooth GSAP scroll hide/show
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: "0vh top",
      onEnter: () =>
        gsap.to(header, {
          y: "0%",
          duration: 0.6,
          ease: "power3.inOut",
        }),
      onLeaveBack: () =>
        gsap.to(header, {
          y: "0%",
          duration: 0.6,
          ease: "power3.out",
        }),
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMenuOpen) setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const handleNavClick = (itemId: string) => {
    if (itemId === "roadmap") {
      navigate("/roadmap");
      if (isMenuOpen) setTimeout(() => setIsMenuOpen(false), 300);
    } else {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => scrollToSection(itemId), 100);
      } else {
        scrollToSection(itemId);
      }
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "How to Buy", id: "how-to-buy" },
    { name: "Tokenomics", id: "tokenomics" },
  ];

  return (
    <>
      {/* === Desktop Header === */}
      <motion.header
        ref={headerRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 font-body"
      >
        <motion.div
          animate={{
            width: isScrolled ? "82%" : "100%",
            borderRadius: isScrolled ? "2.5rem" : "0rem",
            backgroundColor: isScrolled
              ? "rgba(29,29,29,0.35)"
              : "rgba(29,29,29,0.15)",
            boxShadow: isScrolled
              ? "0 8px 30px rgba(0,0,0,0.35)"
              : "0 0 0 rgba(0,0,0,0)",
            backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`mx-auto flex items-center justify-between ${
            isScrolled ? "py-4 px-8 mt-4 border border-[#6E54FF]/30" : "py-5 px-8"
          }`}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            onClick={() => handleNavClick("hero")}
            className="flex items-center cursor-pointer select-none"
          >
            <img
              src="/assets/meerkat.png"
              alt="$MKAT Logo"
              className="w-12 h-12 object-cover rounded-full border-2 border-[#6E54FF]/80 shadow-[0_0_20px_rgba(110,84,255,0.3)]"
            />
          </motion.div>

          {/* Nav Links */}
          <nav className="flex-1 flex justify-center items-center space-x-8 font-body">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-base text-gray-300 hover:text-[#9B7BFF] tracking-wide transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#6E54FF] to-[#B084FF] text-white font-medium py-2 px-6 rounded-full shadow-[0_0_20px_rgba(110,84,255,0.4)] hover:shadow-[0_0_30px_rgba(176,132,255,0.5)] transition-all duration-300"
            >
              Buy $MKAT
            </motion.a>

            <motion.a
              href="#"
              className="bg-[#1C1E22] text-gray-300 font-medium py-2 px-6 rounded-full hover:text-white hover:bg-[#2A2C31] transition-all duration-300"
            >
              Dex Screener
            </motion.a>
          </div>
        </motion.div>
      </motion.header>

      {/* === Mobile Header === */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          animate={{
            borderRadius: isScrolled ? "2rem" : "0rem",
            backgroundColor: isScrolled
              ? "rgba(14, 0, 15, 0.6)"
              : "rgba(29,29,29,0.95)",
            width: isScrolled ? "92%" : "100%",
            marginTop: isScrolled ? "0.6rem" : "0rem",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`mx-auto flex items-center justify-between h-16 shadow-lg backdrop-blur-md px-4 ${
            isScrolled ? "border border-[#6E54FF]/30" : ""
          }`}
        >
          <img
            src="/assets/meerkat.png"
            alt="$MKAT"
            className="w-10 h-10 rounded-full border-2 border-[#6E54FF]/80"
            onClick={() => handleNavClick("hero")}
          />

          <motion.button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-white"
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={26} />
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Slide-in Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 right-0 w-3/5 h-full z-50 bg-[#1D1D1D] shadow-2xl border-l border-[#6E54FF]/20 backdrop-blur-lg rounded-l-3xl flex flex-col justify-between font-body"
              >
                <div className="flex justify-end p-4">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-[#9B7BFF]"
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={28} />
                  </motion.button>
                </div>

                <div className="px-6 flex flex-col flex-1 justify-center space-y-6">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="text-lg font-medium text-gray-300 hover:text-[#9B7BFF] transition-colors text-left"
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                <div className="px-6 pb-10 space-y-4">
                  <motion.a
                    href="#"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="block w-full text-center bg-gradient-to-r from-[#6E54FF] to-[#B084FF] text-white font-semibold py-2.5 rounded-full"
                  >
                    Buy $MKAT
                  </motion.a>

                  <motion.button className="w-full bg-[#292A2D] text-gray-300 font-semibold py-2.5 rounded-full hover:bg-[#323438] transition">
                    Dex Screener
                  </motion.button>

                  <div className="flex justify-center items-center gap-6 pt-4 border-t border-[#6E54FF]/20">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#9B7BFF]"
                    >
                      <Twitter size={22} />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#9B7BFF]"
                    >
                      <MessageCircle size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;