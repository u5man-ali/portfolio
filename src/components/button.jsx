// src/components/Button.jsx
import PropTypes from "prop-types";

const sizes = {
  sm: "text-sm px-3 py-1.5 rounded-curve-xs",
  md: "text-md px-4 py-2 rounded-curve-sm",
  lg: "text-lg px-5 py-2.5 rounded-curve-md",
};

const variants = {
  primary: "bg-aqua-600 text-white-50 hover:bg-aqua-500 focus:ring-aqua-300",
  secondary: "bg-gray-300 text-black-800 hover:bg-gray-200 focus:ring-gray-300",
  neutral: "border align-middle select-none text-center duration-300 ease-in focus:shadow-none focus:ring-gray-500 text-sm bg-black-100 hover:bg-gray-800 relative bg-gradient-to-b from-black-100 to-black-300 border-black-300 text-white-50 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-950 hover:border-gray-950 after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  success: "bg-green-600 text-white-50 hover:bg-green-500 focus:ring-green-300",
  error: "bg-red-600 text-white-50 hover:bg-red-500 focus:ring-red-300",
  warning: "bg-yellow-600 text-white-50 hover:bg-yellow-500 focus:ring-yellow-300",
  info: "bg-blue-600 text-white-50 hover:bg-blue-500 focus:ring-blue-300",
};

export default function Button({
  children,
  size = "md",
  variant = "primary",
  disabled = false,
  showLeftIcon = true,
  leftIcon: LeftIcon,
  showRightIcon = true,
  rightIcon: RightIcon,
  ...props
}) {
  return (
      <button
        className={`
          inline-flex items-center justify-center gap-2 font-semibold shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2
          ${sizes[size]} 
          ${variants[variant]}
          ${disabled ? "opacity-50 shadow-none cursor-not-allowed" : ""}
        `}
        disabled={disabled}
        {...props}
      >
        {showLeftIcon && LeftIcon && <LeftIcon className="w-5 h-5" />}
        {children}
        {showRightIcon && RightIcon && <RightIcon className="w-5 h-5" />}
      </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "neutral", "success", "error"]),
  disabled: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  leftIcon: PropTypes.elementType,
  showRightIcon: PropTypes.bool,
  rightIcon: PropTypes.elementType,
};