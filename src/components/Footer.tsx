import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import meerkatLogo from "/assets/meerkat1.jpg";

const Footer = () => {
  const { isDark } = useTheme();

  const textColor = isDark ? "text-gray-400" : "text-gray-600";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  return (
    <footer
      className={`relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-[#0A0014] via-[#140028] to-[#0A0014]"
          : "bg-gradient-to-b from-white via-purple-50 to-white"
      } font-body border-t border-purple-500/20`}
    >
      {/* Glowing gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="relative">
                <img
                  src={meerkatLogo}
                  alt="$MKAT Logo"
                  className="w-14 h-14 object-cover rounded-full ring-4 ring-purple-500/40 shadow-lg shadow-purple-500/20"
                />
                <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-md"></div>
              </div>
              <h2 className={`text-3xl font-extrabold font-heading ${headingColor}`}>
                $MKAT
              </h2>
            </div>

            <p className={`${textColor} text-sm leading-relaxed max-w-xs`}>
              Smart, fast, and unstoppable.{" "}
              <span className="text-purple-400 font-medium font-heading">Meerkat</span> represents
              the speed and creativity of the Monad ecosystem. Meme powered. Community driven.
            </p>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`font-semibold text-lg mb-5 ${headingColor}`}>Explore</h3>
            <ul className="space-y-3">
              {[
                { name: "About $MKAT", href: "/about" },
                { name: "Whitepaper", href: "/whitepaper" },
                { name: "Community", href: "/community" },
                { name: "Legal Disclaimer", href: "/legal-disclaimer" },
              ].map((link, i) => (
                <motion.li key={i} whileHover={{ x: 6 }}>
                  <a
                    href={link.href}
                    className={`${textColor} text-sm hover:text-purple-400 transition-colors duration-200`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`font-semibold text-lg mb-5 ${headingColor}`}>Stay Connected</h3>
            <div className="flex items-center space-x-8">
              <motion.a
                href="https://x.com/meerkatcoin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter className="text-purple-400 hover:text-purple-300 transition-colors duration-200" size={22} />
              </motion.a>
              <motion.a
                href="https://t.me/meerkatcoin"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <FaTelegramPlane
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  size={22}
                />
              </motion.a>
            </div>

            <p className={`mt-6 text-xs tracking-wide uppercase ${textColor}`}>
              Stay curious. Stay creative. Stay{" "}
              <span className="text-purple-400 font-heading">MKAT.</span>
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-12 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <p className={`text-sm ${textColor}`}>
            © {new Date().getFullYear()}{" "}
            <span className="text-purple-400 font-medium font-heading">$MKAT</span>. All rights
            reserved.
          </p>
          <p className={`text-sm mt-3 md:mt-0 ${textColor}`}>
            Built with 🧠 by{" "}
            <span className="text-purple-400 font-semibold font-heading">Meerkats on Monad</span>.
          </p>
        </motion.div>
      </div>

      {/* Floating Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-500 opacity-60 animate-pulse" />
    </footer>
  );
};

export default Footer;