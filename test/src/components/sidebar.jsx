// src/components/sidebar.jsx
import { useState } from "react";
import Button from './button';
                                                              
const sections = [
  { id: "introduction", label: "تعارف"},
  { id: "education", label: "درس و تدریس", showLeftIcon: true, iconLeftName: "Arrow-Enter-Left-Outline" },
  { id: "random", label: "متفرقات",  showLeftIcon: true, iconLeftName: "Arrow-Enter-Left-Outline" },
    
];

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("introduction"); //default active section

  const handleSelect = (id) => {
    setActive(id);
    onSelect(id); //notify parent component of selected component
  };

  return (
    <aside className="h-screen w-full overflow-y-auto border-white-500 px-4 py-6 bg-white-300">
        <nav className="flex flex-col gap-1">
        {sections.map((section) => (
          <Button
            size="md"
            variant={active === section.id ? "solid" : "transparent"} // Change variant based on active state
            style={active === section.id ? "primary" : "neutral"} // Change style based on active state
            shape="rounded"
            iconSize="md"
            showLeftIcon={section.showLeftIcon || false}
            showRightIcon={section.showRightIcon || false}
            iconLeftName={section.iconLeftName} // Use section's iconLeftName or null
            iconRightName={section.iconRightName} // Use section's iconRightName or null
            key={section.id}
            onClick={() => handleSelect(section.id)}
            className="justify-start font-disp text-body-xxl font-bold" // override justify-center for the sidebar only
          >
            <span className="flex-1 truncate text-right">{section.label}</span>
          </Button>
        ))}
      </nav>
    </aside>
  );
}