import React, { useEffect, useRef } from "react";
import { FaTwitter, FaTelegramPlane, FaArrowDown } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import uploadedMeerkatBackground from "/assets/mascot-character.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 0 },
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    const q = gsap.utils.selector(contentRef);

    gsap.set(q(".hero-stagger-item"), { opacity: 0, y: 60 });
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.to(q(".hero-stagger-item"), {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      delay: 0.3,
    });

    gsap.to(q(".scroll-indicator"), {
      y: 12,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden font-body text-white px-6 sm:px-12 lg:px-24"
    >
      {/* === Background === */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${uploadedMeerkatBackground}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          filter: "brightness(0.45) saturate(120%)",
          transform: "scale(1.05)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0014]/80 via-[#10001F]/70 to-[#0B0014]/90 z-0" />
      <div className="absolute w-[70vw] h-[70vw] bg-purple-600/20 blur-[140px] rounded-full top-[-15%] left-[-10%] z-0" />
      <div className="absolute w-[50vw] h-[50vw] bg-fuchsia-500/20 blur-[100px] rounded-full bottom-[-10%] right-[-10%] z-0" />

      {/* === Hero Content === */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl"
      >
        {/* Text Section */}
        <div className="hero-stagger-item flex-1 text-center md:text-left pt-14 space-y-6">
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight uppercase">
            <span className="block text-white">The Meerkat Has Landed</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 mt-2">
              Home of Meerkats on Monad
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto md:mx-0 leading-relaxed">
            We are the Meerkats of Monad. A bold pack building, trading, and
            having fun together. Fast, curious, and always alert, we move as one
            across the chain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("about")}
              className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white font-heading font-bold py-3 px-8 rounded-full text-base uppercase shadow-lg shadow-fuchsia-500/25 hover:scale-[1.05] hover:shadow-fuchsia-500/40 transition-all duration-300"
            >
              Join the Movement
            </button>

            <a
              href="/whitepaper"
              className="border-2 border-white/30 text-white/80 font-heading font-medium py-3 px-8 rounded-full text-base uppercase hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-8 mt-8 pt-6 border-t border-white/10">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-purple-400 transition-all duration-300 hover:scale-110"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-purple-400 transition-all duration-300 hover:scale-110"
            >
              <FaTelegramPlane size={22} />
            </a>

            <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-5 py-2 text-xs tracking-widest uppercase text-purple-200 font-heading">
              $MKAT on Monad
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-stagger-item flex-1 mt-10 md:mt-0 md:ml-12 hidden md:block relative">
          <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0">
            <img
              src={uploadedMeerkatBackground}
              alt="Meerkat Hero"
              className="w-full h-full object-cover rounded-[2rem] shadow-[0_0_40px_rgba(168,85,247,0.4)] border border-white/10 transform hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-purple-800/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection("about")}
          className="p-3 rounded-full border border-white/30 text-white/70 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 hover:scale-125"
        >
          <FaArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;