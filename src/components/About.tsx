import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#6B3E96";

const About = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.utils.toArray(q(".reveal")).forEach((el) => {
      const element = el as HTMLElement;
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

    gsap.utils.toArray(q(".angled-image")).forEach((el) => {
      const element = el as HTMLElement;
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
            “Quick paws. Sharp minds. Built for Monad speed.”
          </p>
        </div>

        {/* Intro paragraph */}
        <div className="reveal text-gray-800 text-lg leading-relaxed space-y-8">
          <p>
            <span className="font-semibold text-[#6B3E96]">$MKAT</span> is the spirit of Meerkats on Monad. 
            A mix of curiosity, teamwork, and speed. Just like real Meerkats, we move together, stay aware, 
            and build with intent. Fast chain, fast moves, same energy.
          </p>
        </div>

        {/* First image */}
        <div className="my-20 flex justify-start rotate-[-3deg]">
          <div
            className="angled-image w-[75%] sm:w-[60%] shadow-2xl rounded-3xl overflow-hidden"
            data-rotate="-3"
          >
            <img
              src="/assets/meerkat.png"
              alt="Meerkat Concept"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Middle text */}
        <div className="reveal text-gray-800 text-lg leading-relaxed space-y-8">
          <p>
            Meerkats thrive because they look out for one another. That same idea drives $MKAT on Monad. 
            Builders, creators, and meme lovers working together to grow something fun and fast.
          </p>
        </div>

        {/* Right image */}
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
            This is more than a token. It’s a space for people who build, joke, and create with purpose. 
            No central control, no empty talk. Just real energy and shared progress.
          </p>
          <p>
            $MKAT is about community, speed, and good vibes on a chain that matches our pace. 
            Keep your eyes open and your paws ready.
          </p>
        </div>

        {/* Final image */}
        <div className="my-24 flex rotate-[-3deg] justify-start">
          <div
            className="angled-image w-[75%] sm:w-[60%] shadow-2xl rounded-3xl overflow-hidden"
            data-rotate="-3"
          >
            <img
              src="/assets/meerkat2.jpg"
              alt="Meerkat community illustration"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Final text */}
        <div className="reveal text-center space-y-6 mt-16">
          <p className="text-xl text-gray-700 italic max-w-3xl mx-auto">
            “Built by Meerkats, for the Monad ecosystem.”
          </p>
          <h3 className="text-3xl font-bold text-[#111]">
            Stay fast. Stay curious. Stay $MKAT ⚡
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;