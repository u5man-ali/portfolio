// src/components/Button.jsx
import PropTypes from "prop-types";
import clsx from "clsx";

const sizes = {
  sm: "text-body-sm px-3 py-1.5",
  md: "text-body-md px-4 py-2 ",
  lg: "text-body-lg px-5 py-2.5",
};

const shapes = {
  rounded: "rounded-curve-md",
  square: "rounded-none",
  pill: "rounded-full",
};
const styles = {
  neutral: {
    gradient: "border border-black-50 hover:border-black-50 bg-black-50 hover:bg-black-50 relative bg-gradient-to-b from-black-50 to-black-400 text-white-50 hover:bg-gradient-to-b hover:from-gray-950 hover:to-black-50 active:bg-gradient-to-b active:from-gray-950 active:to-black-400 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-black-400 hover:bg-gray-950 text-white-50 active:bg-black-500",
    outline: "border-2 border-gray-950 hover:border-black-300 text-gray-950 hover:text-black-300 active:bg-white-600 active:text-black-400",
    transparent: "bg-transparent text-black-600 hover:bg-white-500 active:bg-white-600"
  },
  primary: {
    gradient: "border border-aqua-500 hover:border-aqua-500 bg-aqua-500 hover:bg-aqua-400 relative bg-gradient-to-b from-aqua-500 to-aqua-700 text-white-50 hover:bg-gradient-to-b hover:from-aqua-500 hover:to-aqua-600 active:bg-gradient-to-b active:from-aqua-600 active:to-aqua-700 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-aqua-600 hover:bg-aqua-500 text-white-50 active:bg-aqua-700",
    outline: "border-2 border-aqua-500 hover:border-aqua-600 text-aqua-500 hover:text-aqua-600 active:bg-aqua-50 active:text-aqua-700",
    transparent: "bg-transparent text-aqua-600 hover:bg-aqua-50 active:bg-aqua-100"
  },
  success: {
    gradient: "border border-green-600 hover:border-green-600 bg-green-600 hover:bg-green-500 relative bg-gradient-to-b from-green-600 to-green-800 text-white-50 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-700 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-green-600 hover:bg-green-500 text-white-50",
    outline: "border-2 border-green-600 hover:border-green-700  text-green-600 hover:text-green-700",
    transparent: "bg-transparent text-green-600 hover:bg-green-100 "
  },
}

const colors = {
  success: "border border-green-600 hover:border-green-600 focus:border-green-600 focus:ring-green-600 bg-green-600 hover:bg-green-500 relative bg-gradient-to-b from-green-600 to-green-800 text-white-50 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-700 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  error: "border border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600 bg-red-600 hover:bg-red-500 relative bg-gradient-to-b from-red-600 to-red-800 text-white-50 hover:bg-gradient-to-b hover:from-red-500 hover:to-red-700 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  warning: "border border-orange-400 hover:border-orange-400 focus:border-orange-400 focus:ring-orange-400 bg-orange-400 hover:bg-orange-300 relative bg-gradient-to-b from-orange-400 to-orange-600 text-white-50 hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-500 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
  info: "border border-blue-300 hover:border-blue-300 focus:border-blue-300 focus:ring-blue-300 bg-blue-300 hover:bg-blue-200 relative bg-gradient-to-b from-blue-300 to-blue-400 text-white-50 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-300 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
};

export default function Button({
  children,
  size = "md", // "sm", "md", or "lg"
  variant = "gradient", // "gradient", "solid", or "outline"
  style = "primary", // "neutral", "primary", "success", "error", "warning", "info"
  shape = "rounded", // "rounded", "square", or "pill"
  className = "",
  disabled = false,
  showLeftIcon = true,
  leftIcon: LeftIcon,
  showRightIcon = true,
  rightIcon: RightIcon,
  ...props
}) {
  const baseClasses = "inline-flex items-center ${props.className || 'justify-center'} gap-2 font-medium transition-all";
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const sizeClass = sizes[size];
  const shapeClass = shapes[shape];
  const variantClass = styles[style]?.[variant] ?? "";
  return (
      <button
        className={clsx(
        baseClasses,
        sizeClass,
        shapeClass,
        variantClass,
        stateClasses,
        className
      )}
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