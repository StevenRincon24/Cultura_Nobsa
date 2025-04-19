import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, imageUrl, link, className = "" }) => {
  const cardContent = (
    <motion.div
      className={`card h-full ${className}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold font-heading mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {link && (
          <a
            href={link}
            className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center"
          >
            Saber más
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default Card;
