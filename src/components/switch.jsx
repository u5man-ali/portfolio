// src/components/Switch.jsx
import clsx from "clsx";
import { useState } from "react";

export default function Switch({
  checked = false,
  onChange,
  disabled = false,
  className = "",
  id,
  name,
  label = "",
}) {
  const [isOn, setIsOn] = useState(checked);

  const toggle = () => {
    if (disabled) return;
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center gap-2">
      {label && (
        <label htmlFor={id} className="text-neutral-strong font-body font-normal text-body-md">
          {label}
        </label>
      )}
      <button
        type="button"
        role="switch"
        id={id}
        name={name}
        aria-checked={isOn}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
        tabIndex={0}
        className={clsx(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus:outline-none",
          isOn ? "bg-brand-primary-rest" : "bg-neutral-tertiary",
          disabled && "opacity-50 cursor-no-drop",
          className
        )}
      >
        <span
          className={clsx(
            "inline-block h-4 w-4 transform rounded-full transition-transform duration-500",
            isOn ? "translate-x-6 bg-neutral-inverse" : "translate-x-1 bg-brand-primary-rest"
          )}
        />
      </button>
      <span className="text-sm text-neutral-mute">{isOn ? "" : ""}</span>
    </div>
  );
}