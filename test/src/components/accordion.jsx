// src/components/Accordion.jsx
import clsx from "clsx";
import { useEffect, useState } from "react";

const sizes = {
  sm: "text-body-sm px-3 py-2",
  md: "text-body-md px-4 py-3",
  lg: "text-body-lg px-5 py-4",
};

const styles = {
  neutral: {
    base: "border border-black-100 bg-white-50 text-black-700",
    expanded: "bg-white-100",
  },
  primary: {
    base: "border border-aqua-500 bg-aqua-50 text-aqua-700",
    expanded: "bg-aqua-100",
  },
  // Add success, error, etc. if needed
};

export default function Accordion({
  title,
  children,
  size = "md", // "sm", "md", "lg"
  style = "neutral", // "neutral", "primary", ...
  iconName = "Chevron-Down-Outline", // your icons
  defaultExpanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [Icon, setIcon] = useState(null);

  const toggleAccordion = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    if (iconName) {
      import(`../icons/${iconName}.svg?react`)
        .then((icon) => setIcon(() => icon.default))
        .catch((error) =>
          console.error(`Error loading icon '${iconName}':`, error)
        );
    }
  }, [iconName]);

  return (
    <div
      className={clsx(
        "w-full rounded-curve-md transition-all duration-200 ease-in-out",
        styles[style]?.base,
        isExpanded && styles[style]?.expanded,
        className
      )}
    >
      <button
        onClick={toggleAccordion}
        className={clsx(
          "flex w-full items-center justify-between font-medium cursor-pointer",
          sizes[size]
        )}
      >
        <span>{title}</span>
        {Icon && (
          <Icon
            className={clsx(
              "transition-transform duration-200",
              isExpanded ? "rotate-180" : "rotate-0",
              "w-5 h-5"
            )}
          />
        )}
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-screen py-2 px-4" : "max-h-0 p-0"
        )}
      >
        {isExpanded && <div className="text-body-sm">{children}</div>}
      </div>
    </div>
  );
}