import React from "react";

const Button = ({
  children,
  icon,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-70 ${className}`}
      {...rest}
    >
      {loading ? "Processing..." : children}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;