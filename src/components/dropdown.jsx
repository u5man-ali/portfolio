// src/components/Dropdown.jsx
import { useEffect, useRef, useState } from "react";

export default function Dropdown({ isOpen, children }) {
  const innerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const el = innerRef.current;

    if (!el) return;

    if (isOpen) {
      const scrollHeight = el.scrollHeight;
      setHeight(`${scrollHeight}px`);
      setToggle(true);

      const timeout = setTimeout(() => {
        setHeight("auto");
        setToggle(false);
      }, 400); // Must match transition duration

      return () => clearTimeout(timeout);
    } else {
      // Step 1: Set height back to measured scrollHeight from auto
      if (height === "auto") {
        const measuredHeight = el.scrollHeight;
        setHeight(`${measuredHeight}px`);
        setToggle(true);

        // Step 2: Force reflow before transitioning to 0
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setHeight("0px"); // trigger the transition to 0
          });
        });
        const timeout = setTimeout(() => {
          setToggle(false);
        }, 400);
        return () => clearTimeout(timeout);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen]);

  return (
    <div
      style={{ height }}
      className="transition-[height] duration-300 ease-in-out overflow-hidden"
    >
      <div ref={innerRef} className="py-1 flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}