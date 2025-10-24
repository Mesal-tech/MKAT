import React from "react";
import {
  Lock,
  PieChart,
  Wallet,
  Coins,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const Tokenomics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="tokenomics"
      className="py-16 lg:py-20 font-body text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Tokenomics <span className="text-[#6E54FF]">$MKAT</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Details on tokennomics goes here
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
