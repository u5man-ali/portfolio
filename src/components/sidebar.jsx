// src/components/sidebar.jsx
import { useState } from "react";
import Button from './button';
import IconLeft from '../icons/Placeholder-Outline.svg?react'
import IconRight from '../icons/Arrow-Enter-Left-Outline.svg?react'

const sections = [
  { id: "overview", label: "Overview" },
  { id: "button", label: "Button", icon: IconLeft },
  { id: "badge", label: "Badge", icon: IconRight },
  { id: "accordion", label: "Accordion", icon: IconLeft },
];

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("overview"); //default active section

  const handleSelect = (id) => {
    setActive(id);
    onSelect(id); //notify parent component of selected component
  };

  return (
    <aside className="sticky -left-64 bottom-0 top-0 z-1 hidden h-[calc(100vh-4px)] w-60 shrink-0 overflow-y-auto lg:left-0 lg:block border-l border-r
        border-white-500 px-4 py-6 bg-white-300">
        <h4 className="text-text-md font-semibold mb-4">Getting Started</h4>
        <nav className="flex flex-col gap-2">
        {sections.map((section) => (
          <Button
            size="md"
            variant="neutral"
            showLeftIcon={true}
            showRightIcon={false}
            leftIcon={icon => section.icon ? <section.icon className="w-5 h-5" /> : null}
            rightIcon={IconRight}
            key={section.id}
            onClick={() => handleSelect(section.id)}
            className={`inline-flex gap-2 items-center text-justify px-3 py-2 rounded-md font-medium transition-colors ${
              active === section.id
                ? "bg-aqua-600 text-white-50"
                : "hover:bg-aqua-100 text-black-800"
            }`}
          >
            {section.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}