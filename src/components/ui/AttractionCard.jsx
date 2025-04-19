import React from "react";
import { motion } from "framer-motion";

const AttractionCard = ({
  title,
  description,
  imageUrl,
  type,
  className = "",
}) => {
  return (
    <motion.div
      className={`card overflow-hidden ${className}`}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
          {type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold font-heading mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default AttractionCard;
