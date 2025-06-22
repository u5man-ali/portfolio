// src/components/table.jsx
import clsx from "clsx";

const sizes = {
  sm: {
    cell: "px-4 py-1 text-body-sm",
    corner: "rounded-curve-sm",
  },
  md: {
    cell: "px-6 py-1 text-body-md",
    corner: "rounded-curve-md",
  },
  lg: {
    cell: "px-6 py-2 text-body-lg",
    corner: "rounded-curve-lg",
  },
};

const styles = {
  primary: {
    head: "bg-brand-primary-bg text-brand-primary-default",
    row: "text-neutral-hovered border-b border-brand-primary-subtle",
  },
  neutral: {
    head: "bg-neutral-tertiary text-neutral-default",
    row: "text-neutral-hovered border-b border-neutral-regular",
  },
  transparent: {
    head: "bg-transparent text-neutral-default border-b border-neutral-regular",
    row: "text-neutral-hovered",
  },
};

export default function Table({
    rows = [],
    columns = [],
    size = "md",
    style = "neutral",
    className = "",
}) {

  return (
    <div className={clsx("overflow-x-auto", className)}>
      <table className={clsx("w-full text-left border-collapse", sizes[size]?.corner)}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className={clsx(
                  sizes[size]?.cell,
                  styles[style]?.head,
                )}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={clsx("transition-all", styles[style]?.row)}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={clsx(
                    sizes[size]?.cell,
                    
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}