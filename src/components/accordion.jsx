// src/components/Accordion.jsx
import clsx from "clsx";
import { useEffect, useState } from "react";
import chevronDown from '../icons/Chevron-Down-Outline.svg?react'

const sizes = {
  sm: {
    text: "text-body-sm",
    padding: " p-2 ",
    corner: "rounded-curve-sm",
    icon: "w-4 h-4"
  },
  md: {
    text: "text-body-md",
    padding: " p-3 ",
    corner: "rounded-curve-md",
    icon: "w-5 h-5"
  },
  lg: {
    text: "text-body-lg ",
    padding: "p-4 ",
    corner: "rounded-curve-lg",
    icon: "w-6 h-6"
  }
};

const styles = {
  primary: {
    base: "border border-brand-primary-regular text-brand-primary-focused",
    expanded: "bg-brand-primary-rest text-neutral-white ",
  },
  neutral: {
    base: "border border-neutral-regular text-neutral-focused",
    expanded: "bg-neutral-rest text-neutral-white",
  },
  transparent: {
    base: "bg-transparent text-neutral-default",
    expanded: "bg-neutral-tertiary",
  },
};

export default function Accordion({
  title,
  children,
  size = "md",
  style = "neutral",
  icon = chevronDown,
  defaultExpanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const Icon = icon? icon : null;
  const toggleAccordion = () => setIsExpanded((prev) => !prev);

  return (
    <div
      className={clsx(
        "w-full transition-all ease-in-out",
        styles[style]?.base,
        //isExpanded && styles[style]?.expanded,
        sizes[size]?.text,
        sizes[size]?.corner,
        className
      )}
    >
      <div
        onClick={toggleAccordion}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleAccordion()}
        className={clsx(
          "flex w-full items-center justify-between font-medium cursor-pointer focus:outline-none",
          //(Object.values(sizes[size] || {})),
          isExpanded ? "border-2 border-neutral-subtle rounded-bl-none rounded-br-none" : "",
          isExpanded && styles[style]?.expanded,
          sizes[size]?.padding,
          sizes[size]?.corner,
        )}
      >
        <span>{title}</span>
        {Icon && (
          <Icon
            className={clsx(
              "transition-transform duration-700",
              isExpanded ? "rotate-180" : "rotate-0",
              sizes[size]?.icon
            )}
          />
        )}
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-700",
          isExpanded ? "max-h-screen" : "max-h-0 p-0"
        )}
      >
        {isExpanded && <div className={sizes[size]?.padding}>{children}</div>}
      </div>
    </div>
  );
}