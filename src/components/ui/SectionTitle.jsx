import React from "react";

const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 relative inline-block ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform -translate-y-2 opacity-75"></span>
      </h2>
      {subtitle && (
        <p
          className={`max-w-3xl mx-auto text-lg ${
            light ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
