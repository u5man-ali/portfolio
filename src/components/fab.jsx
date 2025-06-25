// src/components/fab.jsx
import clsx from "clsx";
import { useEffect, useState } from "react";

const sizes = {
  sm: "text-body-sm p-2",
  md: "text-body-md p-3",
  lg: "text-body-lg p-4",
};
const shapes = {
  rounded: "rounded-curve-md",
  square: "rounded-none",
  pill: "rounded-full",
  inherit: "rounded-[inherit]"
};
const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
}
const styles = {
  primary: {
    gradient: "relative bg-gradient-to-b from-brand-primary-rest to-brand-primary-focus text-neutral-white hover:bg-gradient-to-b hover:from-brand-primary-hover hover:to-brand-primary-rest active:ring-1 active:ring-offset-1 active:ring-brand-primary-regular active:bg-gradient-to-b active:from-brand-primary-focus active:to-brand-primary-rest focus:bg-gradient-to-b focus:from-brand-primary-hover focus:to-brand-primary-focus align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-brand-primary-rest hover:bg-brand-primary-hover text-neutral-white active:bg-brand-primary-focus ",
    outline: "border-2 border-brand-primary-rest text-brand-primary-default hover:border-brand-primary-hover hover:text-brand-primary-hovered active:bg-brand-primary-bg active:text-brand-primary-focused",
    transparent: "bg-transparent text-brand-primary-default hover:bg-brand-primary-light active:bg-brand-primary-bg",
    link: "bg-transparent text-brand-primary-default hover:underline active:text-brand-primary-focused"
  },
    secondary: {
    gradient: "relative bg-gradient-to-b from-neutral-rest to-neutral-focus text-neutral-white hover:bg-gradient-to-b hover:from-neutral-hover hover:to-neutral-rest active:ring-1 active:ring-offset-1 active:ring-neutral-regular active:bg-gradient-to-b active:from-neutral-focus active:to-neutral-rest focus:bg-gradient-to-b focus:from-neutral-hover focus:to-neutral-focus align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md focus:shadow-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-neutral-rest hover:bg-neutral-hover text-neutral-white active:bg-neutral-focus ",
    outline: "border-2 border-neutral-rest text-neutral-default hover:border-neutral-hover hover:text-neutral-hovered active:bg-neutral-bg active:text-neutral-focused",
    transparent: "bg-transparent text-neutral-default hover:bg-neutral-secondary active:bg-neutral-bg",
    link: "bg-transparent text-neutral-default hover:underline active:text-neutral-focused"
  },
  success: {
    gradient: "relative bg-gradient-to-b from-semantic-success-rest to-semantic-success-focus text-neutral-white hover:bg-gradient-to-b hover:from-semantic-success-hover hover:to-semantic-success-rest active:ring-1 active:ring-offset-1 active:ring-semantic-success-regular active:bg-gradient-to-b active:from-semantic-success-focus active:to-semantic-success-rest focus:bg-gradient-to-b focus:from-semantic-success-hover focus:to-semantic-success-focus align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-semantic-success-rest hover:bg-semantic-success-hover text-neutral-white active:bg-semantic-success-focus ",
    outline: "border-2 border-semantic-success-rest text-semantic-success-default hover:border-semantic-success-hover hover:text-semantic-success-hovered active:bg-semantic-success-bg active:text-semantic-success-focused",
    transparent: "bg-transparent text-semantic-success-default hover:bg-semantic-success-light active:bg-semantic-success-bg",
    link: "bg-transparent text-semantic-success-default hover:underline active:text-semantic-success-focused"
  },
  error: {
    gradient: "relative bg-gradient-to-b from-semantic-error-rest to-semantic-error-focus text-neutral-white hover:bg-gradient-to-b hover:from-semantic-error-hover hover:to-semantic-error-rest active:ring-1 active:ring-offset-1 active:ring-semantic-error-regular active:bg-gradient-to-b active:from-semantic-error-focus active:to-semantic-error-hover focus:bg-gradient-to-b focus:from-semantic-error-hover focus:to-semantic-error-focus align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-semantic-error-rest hover:bg-semantic-error-hover text-neutral-white active:bg-semantic-error-focus ",
    outline: "border-2 border-semantic-error-rest text-semantic-error-default hover:border-semantic-error-hover hover:text-semantic-error-hovered active:bg-semantic-error-bg active:text-semantic-error-focused",
    transparent: "bg-transparent text-semantic-error-default hover:bg-semantic-error-light active:bg-semantic-error-bg",
    link: "bg-transparent text-semantic-error-default hover:underline active:text-semantic-error-focused"
  },
  warning: {
    gradient: "relative bg-gradient-to-b from-semantic-warning-rest to-semantic-warning-focus text-neutral-white hover:bg-gradient-to-b hover:from-semantic-warning-hover hover:to-semantic-warning-rest active:ring-1 active:ring-offset-1 active:ring-semantic-warning-regular active:bg-gradient-to-b active:from-semantic-warning-focus active:to-semantic-warning-hover focus:bg-gradient-to-b focus:from-semantic-warning-hover focus:to-warning-focus align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-semantic-warning-rest hover:bg-semantic-warning-hover text-nuetral-white active:bg-semantic-warning-focus ",
    outline: "border-2 border-semantic-warning-rest text-semantic-warning-default hover:border-semantic-warning-hover hover:text-semantic-warning-hovered active:bg-semantic-warning-bg active:text-semantic-warning-focused",
    transparent: "bg-transparent text-semantic-warning-default hover:bg-semantic-warning-light active:bg-semantic-warning-bg",
    link: "bg-transparent text-semantic-warning-default hover:underline active:text-semantic-warning-focused"
  },
  info: {
    gradient: "relative bg-gradient-to-b from-semantic-info-rest to-semantic-info-focus text-neutral-white hover:bg-gradient-to-b hover:from-semantic-info-hover hover:to-semantic-info-rest active:ring-1 active:ring-offset-1 active:ring-semantic-info-regular active:bg-gradient-to-b active:from-semantic-info-focus active:to-semantic-info-hover focus:bg-gradient-to-b focus:from-semantic-info-hover focus:to-semantic-info-focus align-middle select-none text-center duration-100 ease-in shadow-sm hover:shadow-md after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_1px_rgba(0,0,0,0.25)]",
    solid: "bg-semantic-info-rest hover:bg-semantic-info-hover text-neutral-white active:bg-semantic-info-focus ",
    outline: "border-2 border-semantic-info-rest text-semantic-info-default hover:border-semantic-info-hover hover:text-semantic-info-hovered active:bg-semantic-info-bg active:text-semantic-info-focused",
    transparent: "bg-transparent text-semantic-info-default hover:bg-semantic-info-light active:bg-semantic-info-bg",
    link: "bg-transparent text-semantic-info-default hover:underline active:text-semantic-info-focused"
  },
};

export default function FAB({
  size = "md", // "sm", "md", or "lg"
  variant = "gradient", // "gradient", "solid", or "outline"
  style = "primary", // "neutral", "primary", "success", "error", "warning", "info"
  shape = "rounded", // "rounded", "square", or "pill"
  iconSize = "md", // "sm", "md", or "lg"
  className = "",
  disabled = false,
  icon = null,
  ...props
}) {
  const baseClasses = "inline-flex items-center gap-2 transition-all whitespace-nowrap";
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const sizeClass = sizes[size];
  const shapeClass = shapes[shape];
  const variantClass = styles[style]?.[variant] ?? "";
  const Icon = icon? icon: null;
  
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
        {Icon && <Icon className={iconSizes[iconSize]} /> }
      </button>
  );
}