import React from "react";

const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      {/* Línea decorativa */}
      <div
        className={`w-24 h-1 mt-2 mb-6 mx-auto ${
          light ? "bg-white" : "bg-red-600"
        }`}
      ></div>

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
