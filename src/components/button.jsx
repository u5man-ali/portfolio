// src/components/Button.jsx
import PropTypes from "prop-types";

const sizes = {
  sm: "text-body-sm px-3 py-1.5 rounded-curve-sm",
  md: "text-body-md px-4 py-2 rounded-curve-md",
  lg: "text-body-lg px-5 py-2.5 rounded-curve-lg",
};

const variants = {
  primary: "border border-aqua-500 hover:border-aqua-500 focus:border-aqua-500 focus:ring-aqua-500 bg-aqua-500 hover:bg-aqua-400 relative bg-gradient-to-b from-aqua-500 to-aqua-700 text-white-50 hover:bg-gradient-to-b hover:from-aqua-500 hover:to-aqua-600 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  secondary: "border border-white-600 hover:border-white-600 focus:ring-white-600 bg-white-100 hover:bg-white-300 relative bg-gradient-to-b from-white-100 to-white-300 text-black-800 hover:bg-gradient-to-b hover:from-white-400 hover:to-white-600 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  neutral: "border border-gray-800 hover:border-gray-800 focus:border-gray-800 focus:ring-gray-800 bg-black-100 hover:bg-black-100 relative bg-gradient-to-b from-black-100 to-black-300 text-white-50 hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-950 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  success: "border border-green-600 hover:border-green-600 focus:border-green-600 focus:ring-green-600 bg-green-600 hover:bg-green-500 relative bg-gradient-to-b from-green-600 to-green-800 text-white-50 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-700 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  error: "border border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600 bg-red-600 hover:bg-red-500 relative bg-gradient-to-b from-red-600 to-red-800 text-white-50 hover:bg-gradient-to-b hover:from-red-500 hover:to-red-700 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  warning: "border border-orange-400 hover:border-orange-400 focus:border-orange-400 focus:ring-orange-400 bg-orange-400 hover:bg-orange-300 relative bg-gradient-to-b from-orange-400 to-orange-600 text-white-50 hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-500 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  info: "border border-blue-300 hover:border-blue-300 focus:border-blue-300 focus:ring-blue-300 bg-blue-300 hover:bg-blue-200 relative bg-gradient-to-b from-blue-300 to-blue-400 text-white-50 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-300 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
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
          inline-flex items-center justify-center gap-2 font-body font-medium transition-all focus:outline-none focus:ring-2
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