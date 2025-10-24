import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#6B3E96";

const About = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    // Reveal text blocks
    gsap.utils.toArray(q(".reveal")).forEach((el) => {
      const element = el as HTMLElement; // 👈 Explicit cast

      gsap.fromTo(
        element,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Cinematic parallax & scale reveal for images
    gsap.utils.toArray(q(".angled-image")).forEach((el) => {
      const element = el as HTMLElement; // 👈 Explicit cast
      const rotate = parseFloat(element.dataset.rotate || "0");

      gsap.fromTo(
        element,
        { opacity: 0, y: 100, rotate, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);


  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white overflow-hidden rounded-[30px] md:rounded-[70px] border-b-8 border-[#6B3E96] font-body py-32"
    >
      {/* Ambient gradient glows */}
      <div
        className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] rounded-full blur-[180px] opacity-20"
        style={{ background: ACCENT }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-[40rem] h-[40rem] rounded-full blur-[180px] opacity-20"
        style={{ background: ACCENT }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-6xl font-heading font-extrabold text-[#111] leading-tight tracking-tight">
            About <span className="text-[#6B3E96]">$MKAT</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 italic">
            “Fast, curious, and always on the lookout — the Meerkat never misses a block.”
          </p>
        </div>

        {/* Intro paragraph */}
        <div className="reveal text-gray-800 text-lg leading-relaxed space-y-8">
          <p>
            <span className="font-semibold text-[#6B3E96]">$MKAT</span> is more than just a meme —
            it’s a signal of speed, intelligence, and community. Inspired by the Meerkat’s agility
            and awareness, it reflects the essence of{" "}
            <span className="font-semibold">Monad</span>: fast, secure, and adaptive.
          </p>
        </div>

        {/* New early image (left tilt) */}
        <div className="my-20 flex justify-start rotate-[-3deg]">
          <div
            className="angled-imagebw-fit w-[75%] sm:w-[60%] shadow-2xl rounded-3xl overflow-hidden"
            data-rotate="-3"
          >
            <img
              src="/assets/meerkat1.jpg"
              alt="Meerkat Concept"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* More text */}
        <div className="reveal text-gray-800 text-lg leading-relaxed space-y-8">
          <p>
            Every block, every meme, every moment of collaboration pushes $MKAT closer to being the
            cultural heartbeat of the chain. The Meerkat embodies curiosity, standing tall on its
            paws, scanning the horizon — alert, united, and ready.
          </p>
        </div>

        {/* Right-aligned image */}
        <div className="my-24 flex justify-end rotate-[3deg]">
          <div
            className="angled-image w-[75%] sm:w-[60%] shadow-2xl rounded-3xl overflow-hidden"
            data-rotate="3"
          >
            <img
              src="/assets/meerkat1.jpg"
              alt="Meerkat mascot"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Second text block */}
        <div className="reveal text-gray-800 text-lg leading-relaxed space-y-8">
          <p>
            The Meerkat represents{" "}
            <span className="font-semibold text-[#6B3E96]">decentralized cooperation</span>.
            No one rules the mob — they move together, guided by instinct and trust. That’s what
            Monad stands for: a network that scales by collaboration, not control.
          </p>
          <p>
            We believe in memes as messages — stories that travel faster than code. $MKAT is our
            symbol of that cultural fusion, where humor meets high performance and speed meets soul.
          </p>
        </div>

        {/* Left-aligned image */}
        <div className="my-24 flex rotate-[-3deg] justify-start">
          <div
            className="angled-image w-[75%] sm:w-[60%] shadow-2xl rounded-3xl overflow-hidden"
            data-rotate="-3"
          >
            <img
              src="/assets/meerkat1.jpg"
              alt="Meerkat community illustration"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Final text block */}
        <div className="reveal text-center space-y-6 mt-16">
          <p className="text-xl text-gray-700 italic max-w-3xl mx-auto">
            “We see you, Monad builders — fast, fearless, and focused. The Meerkat runs beside you.”
          </p>
          <h3 className="text-3xl font-bold text-[#111]">
            The Meerkat runs on Monad energy ⚡
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
