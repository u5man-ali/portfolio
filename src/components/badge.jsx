// src/components/badge.jsx
import clsx from "clsx";

const sizes = {
  sm: "text-body-xs leading-[16px] px-2 py-1",
  md: "text-body-sm leading-[20px] px-2 py-1",
  lg: "text-body-md leading-[24px] px-3 py-1",
};

const shapes = {
  rounded: "rounded-curve-xs",
  pill: "rounded-pill",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

const styles = {
  primary: {
    filled: "bg-brand-primary-light text-brand-primary-default border border-brand-primary-default",
    outline: "text-brand-primary-default border border-brand-primary-regular",
  },
  neutral: {
    filled: "bg-neutral-tertiary text-neutral-placeholder border border-neutral-regular",
    outline: "text-neutral-hovered border border-neutral-strong",
  },
  success: {
    filled: "bg-semantic-success-light text-semantic-success-default border border-semantic-success-regular",
    outline: "text-semantic-success-default border border-semantic-success-regular",
  },
  error: {
    filled: "bg-semantic-error-light text-semantic-error-default border border-semantic-error-regular",
    outline: "text-semantic-error-default border border-semantic-error-regular",
  },
  warning: {
    filled: "bg-semantic-warning-light text-semantic-warning-default border border-semantic-warning-regular",
    outline: "text-semantic-warning-default border border-semantic-warning-regular",
  },
  info: {
    filled: "bg-semantic-info-light text-semantic-info-default border border-semantic-info-regular",
    outline: "text-semantic-info-default border border-semantic-info-regular",
  },
};

export default function Badge({
  children,
  size = "md", // "sm", "md", or "lg"
  variant = "filled", // "filled" or "outline"
  style = "primary", // "neutral", "primary", "success", "error", "warning", "info"
  shape = "rounded", // "rounded", "square", or "pill"
  iconSize = "md", // "sm", "md", or "lg"
  className = "",
  disabled = false,
  iconLeft = null, //default is null, can obtain pre-imported svg icons as react component
  iconRight = null, //default is null, can obtain pre-imported svg icons as react component
  ...props
}) {
  const baseClasses = "inline-flex items-center gap-2 font-body font-medium transition-all whitespace-nowrap";
  const stateClasses = disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";
  const sizeClass = sizes[size];
  const shapeClass = shapes[shape];
  const variantClass = styles[style]?.[variant] ?? "";
  const LeftIcon = iconLeft? iconLeft: null;
  const RightIcon = iconRight? iconRight: null;

  return (
    <span
      className={clsx(
        className="px-2",
        baseClasses,
        sizeClass,
        shapeClass,
        variantClass,
        stateClasses,
        className
      )}
      {...props}
    >
      {LeftIcon && <LeftIcon className={iconSizes[iconSize]} />}
      {children }
      {RightIcon && <RightIcon className={iconSizes[iconSize]} />}
    </span>
  );
}