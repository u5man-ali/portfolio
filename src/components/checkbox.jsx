// src/components/Checkbox.jsx
import { useEffect, useRef } from "react";
import clsx from "clsx";

import CheckmarkIcon from "../icons/Checkmark-Outline.svg?react";
import MinusIcon from "../icons/Subtract-Outline.svg?react";

export default function Checkbox({
  id,
  name,
  label,
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  description = "",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e) => {
    if (disabled) return;
    onChange?.(e.target.checked);
  };

  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <div className="flex items-center">
        <label htmlFor={id} className="cursor-pointer">
          <div
            className={clsx(
              "flex h-5 w-5 items-center justify-center rounded border-2 transition-colors",
              disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
              checked || indeterminate
                ? "bg-brand-primary-rest border-brand-primary-rest text-neutral-inverse"
                : "bg-neutral-secondary border-neutral-regular"
            )}
          >
            {indeterminate ? (
              <MinusIcon className="h-4 w-4 text-neutral-white" />
            ) : checked ? (
              <CheckmarkIcon className="h-4 w-4 text-neutral-white" />
            ) : null}
          </div>
          <input
            ref={ref}
            id={id}
            name={name}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
          />
        </label>
      </div>

      <label htmlFor={id} className="cursor-pointer select-none">
        <span className="block text-md font-heading font-normal text-neutral-strong">{label}</span>
        {description && (
          <span className="block text-sm font-body font-normal text-neutral-placeholder">{description}</span>
        )}
      </label>
    </div>
  );
}