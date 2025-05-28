// src/components/Button.jsx
import PropTypes from "prop-types";
import clsx from "clsx";
import { lazy, Suspense, useMemo } from "react";

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
const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
}
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
    outline: "border-2 border-aqua-600 hover:border-aqua-600 text-aqua-600 hover:text-aqua-700 active:bg-aqua-50 active:text-aqua-700",
    transparent: "bg-transparent text-aqua-600 hover:bg-aqua-50 active:bg-aqua-100"
  },
  success: {
    gradient: "border border-green-600 hover:border-green-600 bg-green-600 hover:bg-green-500 relative bg-gradient-to-b from-green-600 to-green-800 text-white-50 hover:bg-gradient-to-b hover:from-green-500 hover:to-green-700 active:bg-gradient-to-b active:from-green-600 active:to-green-800 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-green-700 hover:bg-green-600 text-white-50 active:bg-green-800",
    outline: "border-2 border-green-600 hover:border-green-700 text-green-700 hover:text-green-700 active:bg-green-50 active:text-green-800",
    transparent: "bg-transparent text-green-700 hover:bg-green-50 active:bg-green-100"
  },
  error: {
    gradient: "border border-red-600 hover:border-red-600 bg-red-600 hover:bg-red-500 relative bg-gradient-to-b from-red-600 to-red-800 text-white-50 hover:bg-gradient-to-b hover:from-red-500 hover:to-red-700 active:bg-gradient-to-b active:from-red-600 active:to-red-800 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-red-600 hover:bg-red-500 text-white-50 active:bg-red-700",
    outline: "border-2 border-red-600 hover:border-red-700  text-red-600 hover:text-red-700 active:bg-red-50 active:text-red-800",
    transparent: "bg-transparent text-red-600 hover:bg-red-50 active:bg-red-100"
  },
  warning: {
    gradient: "border border-orange-300 hover:border-orange-300 bg-orange-300 hover:bg-orange-200 relative bg-gradient-to-b from-orange-300 to-orange-500 text-white-50 hover:bg-gradient-to-b hover:from-orange-200 hover:to-orange-400 active:bg-gradient-to-b active:from-orange-400 active:to-orange-600 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-orange-300 hover:bg-orange-200 text-white-50 active:bg-orange-400",
    outline: "border-2 border-orange-600 hover:border-orange-700  text-orange-600 hover:text-orange-700 active:bg-orange-50 active:text-orange-800",
    transparent: "bg-transparent text-orange-600 hover:bg-orange-50 active:bg-orange-100"
  },
  info: {
    gradient: "border border-blue-200 hover:border-blue-200 bg-blue-200 hover:bg-blue-100 relative bg-gradient-to-b from-blue-200 to-blue-400 text-white-50 hover:bg-gradient-to-b hover:from-blue-100 hover:to-blue-300 active:bg-gradient-to-b active:from-blue-300 active:to-blue-500 align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_1px_1px_3px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.25)]",
    solid: "bg-blue-300 hover:bg-blue-200 text-white-50 active:bg-blue-400",
    outline: "border-2 border-blue-400 hover:border-blue-500 text-blue-400 hover:text-blue-500 active:bg-blue-50 active:text-blue-600",
    transparent: "bg-transparent text-blue-400 hover:bg-blue-50 active:bg-blue-100"
  },
};
const loadIcon = (iconName) => lazy(() => import(`../icons/${iconName}.svg?react`)); // utility function to load svg icon from name string

export default function Button({
  children,
  size = "md", // "sm", "md", or "lg"
  variant = "gradient", // "gradient", "solid", or "outline"
  style = "primary", // "neutral", "primary", "success", "error", "warning", "info"
  shape = "rounded", // "rounded", "square", or "pill"
  iconSize = "md", // "sm", "md", or "lg"
  className = "",
  disabled = false,
  showLeftIcon = true,
  iconLeftName = "", // check filenames of icons in src/icons
  showRightIcon = true,
  iconRightName = "", // check filenames of icons in src/icons
  ...props
}) {
  const baseClasses = "inline-flex items-center ${props.className || 'justify-center'} gap-2 font-medium transition-all";
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const sizeClass = sizes[size];
  const shapeClass = shapes[shape];
  const variantClass = styles[style]?.[variant] ?? "";
  const LeftIcon = useMemo(() => (iconLeftName ? loadIcon(iconLeftName) : null), [iconLeftName]);
  const RightIcon = useMemo(() => (iconRightName ? loadIcon(iconRightName) : null), [iconRightName]);
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
        {showLeftIcon && LeftIcon && (
          <Suspense fallback = {<span className={iconSizes[iconSize]} />}>
          <LeftIcon className={iconSizes[iconSize]} />
          </Suspense> 
        )}
        {children}
        {showRightIcon && RightIcon && (
          <Suspense fallback = {<span className={iconSizes[iconSize]} />}>
          <RightIcon className={iconSizes[iconSize]} />
          </Suspense>
        )}
      </button>
  );
}