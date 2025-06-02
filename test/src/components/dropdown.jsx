// src/components/Dropdown.jsx
import { useEffect, useRef, useState } from "react";

export default function Dropdown({ isOpen, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        setHeight(ref.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen, children]);

  return (
    <div
      style={{ height: isOpen ? `${height}px` : '0px' }}
      className="transition-[height] duration-300 ease-in-out overflow-hidden"
    >
      <div ref={ref} className="pl-4 pr-2 py-1 flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}