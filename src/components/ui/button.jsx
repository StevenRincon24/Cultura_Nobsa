import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "font-medium rounded-md transition-colors duration-300 inline-flex items-center justify-center";

  const variantClasses = {
    primary: "bg-[#1E3A8A] hover:bg-[#3730A3] text-white",
    secondary: "bg-[#C2410C] hover:bg-[#9A3412] text-white",
    outline:
      "bg-transparent border border-[#1E3A8A] text-primary hover:bg-[#EEF2FF]",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
