// src/components/Tabs.jsx
import clsx from "clsx";
import { useEffect, useState } from "react";

const sizes = {
  sm: {
    text: "text-body-xs",
    padding: "px-4 py-1",
    corner: "rounded-tl-curve-sm rounded-tr-curve-sm",
  },
  md: {
    text: "text-body-md",
    padding: "px-6 py-1",
    corner: "rounded-tl-curve-md rounded-tr-curve-md",
  },
  lg: {
    text: "text-body-lg",
    padding: "px-6 py-2",
    corner: "rounded-tl-curve-lg rounded-tr-curve-lg",
  },
};

const styles = {
  primary: {
    base: "text-brand-primary-default hover:bg-neutral-tertiary",
    active: "bg-brand-primary-focus text-neutral-white hover:text-brand-primary-default",
  },
  neutral: {
    base: "text-neutral-default hover:bg-neutral-primary",
    active: "bg-neutral-rest text-neutral-white hover:text-neutral-default",
  },
  transparent: {
    base: "bg-transparent text-neutral-default",
    active: "border-b border-neutral-strong text-neutral-default bg-neutral-primary",
  },
};

export default function Tabs({
  tabs = [],
  size = "md",
  style = "neutral",
  defaultActive = 0,
  className = "",
  tabClassName = "",
  onSelect = () => {},
}) {
  const [activeTab, setActiveTab] = useState(defaultActive);

  const handleSelect = (id, index) => {
    setActiveTab(index);
    onSelect(id); // returns tab id to parent
  };

  return (
    <div className={clsx("w-full", className)}>
      <div className="flex overflow-x-scroll lg:overflow-hidden">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => handleSelect(tab.id, index)}
            role="button"
            className={clsx(
              "transition-all duration-300 ease-in-out font-medium cursor-pointer focus:outline-none text-center text-nowrap",
              sizes[size]?.padding,
              sizes[size]?.corner,
              styles[style]?.base,
              index === activeTab && styles[style]?.active,
              sizes[size]?.text,
              tabClassName
            )}
          >
            <div className="block w-full">
              <span>{tab.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}