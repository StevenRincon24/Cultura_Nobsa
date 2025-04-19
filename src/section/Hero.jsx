import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const Hero = ({
  title,
  subtitle,
  imageUrl,
  ctaText,
  ctaLink = "#",
  overlay = true,
  className = "",
}) => {
  return (
    <div
      className={`hero-section relative min-h-[70vh] flex items-center ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {overlay && <div className="absolute inset-0 bg-black opacity-50"></div>}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="secondary" size="lg">
                {ctaText}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
