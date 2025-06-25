// src/components/Input.jsx
import clsx from "clsx";

const sizes = {
  sm: {
    text: "text-body-sm",
    padding: "px-3 py-1",
    icon: "w-4 h-4",
  },
  md: {
    text: "text-body-md",
    padding: "px-3 py-1.5",
    icon: "w-5 h-5",
  },
  lg: {
    text: "text-body-lg",
    padding: "px-3 py-2",
    icon: "w-6 h-6",
  },
};

const shapes = {
  rounded: "rounded-curve-md",
  pill: "rounded-pill",
};

export default function Input({
  label,
  size = "md", // sm | md | lg
  shape = "rounded", // rounded | square | pill
  iconLeft = null,
  iconRight = null,
  className = "",
  error = "",
  hint = "",
  multiline = false, //true for large text area
  id,
  ...props
}) {
  const { text, padding, icon } = sizes[size] || {};
  const shapeClass = shapes[shape];

  const hasError = Boolean(error);
  const hintOrErrorId = hasError ? `${id}-error` : hint ? `${id}-hint` : undefined;

  const LeftIcon = iconLeft;
  const RightIcon = iconRight;

  const InputElement = multiline ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="font-disp font-medium text-neutral-default">
          {label}
        </label>
      )}
      <div
        className={clsx(
          "flex items-center border bg-neutral-primary transition-all font-body font-normal",
          multiline? null : padding,
          text,
          shapeClass,
          hasError ? "border-semantic-error-regular text-semantic-error-default" : "border-neutral-regular text-neutral-default",
          className
        )}
      >
        {LeftIcon && <LeftIcon className={clsx(icon, "mr-2 text-neutral-placeholder")} />}
        <InputElement
          id={id}
          className={clsx(
            "flex-1 bg-transparent outline-none resize-none ",
            multiline? "resize-y" : "resize-none", //if multimline is true add a resize icon
            multiline? padding : null, //if multiline is true adjust padding 
            LeftIcon && "pl-1",
            RightIcon && "pr-1",
            "placeholder:text-neutral-placeholder placeholder:font-body placeholder:font-normal"
          )}
          aria-invalid={hasError}
          aria-describedby={hintOrErrorId}
          {...props}
        />
        {RightIcon && <RightIcon className={clsx(icon, "ml-2 text-neutral-placeholder")} />}
      </div>
      {hasError ? (
        <p id={hintOrErrorId} className="text-semantic-error-default text-sm font-body font-light">
          {error}
        </p>
      ) : hint ? (
        <p id={hintOrErrorId} className="text-neutral-placeholder text-sm font-body font-light">
          {hint}
        </p>
      ) : null}
    </div>
  );
}