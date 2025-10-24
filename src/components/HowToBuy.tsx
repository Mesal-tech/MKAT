import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Ticket, Trophy, Wallet } from "lucide-react";

const HowToParticipate = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };


  return (
    <section
      id="how-to-participate"
      className="relative py-28 text-white font-body overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 font-bold mb-6 leading-tight">
            How to Buy
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Follow the flow below to get started and become part of the experience.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-center text-center min-h-[50vh] space-y-20 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 transition-all duration-700 hover:border-purple-500/40 hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.5)]"
        >
          <h1>GUIDE ON HOW TO BUY</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToParticipate;
