const Button = ({
  children,
  icon,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
  variant = "primary",
  fullWidth = true,
  ...rest
}) => {
const baseClasses = [
  "flex",
  "items-center",
  "justify-center",
  "gap-2",
  "py-3",
  "px-4",
  "rounded-lg",
  "transition-colors",
  "duration-300",
  "disabled:opacity-70",
];

  if (fullWidth) baseClasses.push("w-full");

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    dangerOutline: "bg-white border border-red-500 text-red-500 hover:bg-red-50",
    outline: "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
  };

  const allClasses = [...baseClasses, variants[variant] || "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={allClasses}
      {...rest}
    >
      {loading ? "Processing..." : children}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;