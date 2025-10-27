import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MemeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const memesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth < 768) return; // Disable pinning on mobile

      const section = sectionRef.current;
      const text = textRef.current;
      const memes = memesRef.current;

      if (!section || !text || !memes) return;

      const memesHeight = memes.scrollHeight;
      const viewportHeight = window.innerHeight;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${memesHeight - viewportHeight}`,
        pin: text,
        scrub: true,
        pinSpacing: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const memeImages = [
    "/assets/meerkat1.jpg",
    "/assets/meerkat1.jpg",
    "/assets/meerkat1.jpg",
    "/assets/meerkat1.jpg",
    "/assets/meerkat1.jpg",
    "/assets/meerkat1.jpg",
  ];

  return (
    <section
      ref={sectionRef}
      id="meme-section"
      className="relative w-full flex flex-col md:flex-row text-white pt-20 overflow-hidden"
    >
      {/* Text Section */}
      <div
        ref={textRef}
        className="md:w-1/2 w-full h-auto md:h-screen flex flex-col justify-center px-6 md:px-16 py-16 md:py-20 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 leading-tight">
          The Energy of <br /> $MKAT Memes
        </h2>
        <p className="text-gray-300 text-base md:text-xl mt-5 md:mt-6 leading-relaxed">
          $MKAT captures the fun and fearless side of Meerkats on Monad.  
          Each meme carries our energy, humor, and drive to push culture forward on-chain.  
          Scroll through and feel the pulse.
        </p>
      </div>

      {/* Meme Gallery Section */}
      <div
        ref={memesRef}
        className="md:w-1/2 w-full flex md:flex-col flex-wrap md:items-center justify-center gap-6 md:gap-12 px-4 md:px-12 pb-12 md:py-32"
      >
        {memeImages.map((src, i) => (
          <div
            key={i}
            className={`shadow-lg rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 ${
              i % 2 === 0 ? "md:rotate-3 -rotate-1" : "md:-rotate-3 rotate-1"
            }`}
          >
            <img
              src={src}
              alt={`meme-${i + 1}`}
              className="w-full max-w-[280px] md:max-w-[320px] object-cover rounded-2xl border border-white/10"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemeSection;