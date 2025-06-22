// src/components/RadioButton.jsx
import clsx from "clsx";

export default function RadioButton({
  id,
  name,
  value,
  label,
  checked = false,
  onChange,
  disabled = false,
  description = "",
  className = "",
}) {
  return (
    <div className={clsx("flex items-start gap-2", className)}>
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          className={clsx(
            "h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-neutral-strong checked:border-[6px] checked:border-neutral-regular transition-all checked:bg-brand-primary-rest",
            disabled && "opacity-50 cursor-no-drop"
          )}
        />
      </div>
      <label htmlFor={id} className="cursor-pointer select-none">
        <span className="block text-sm font-medium text-neutral-strong">{label}</span>
        {description && (
          <span className="block text-xs text-neutral-placeholder">{description}</span>
        )}
      </label>
    </div>
  );
}