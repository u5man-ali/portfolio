// src/components/sidebar.jsx
import { useState } from "react";
import Button from './button';
import arrowDownRight from '../icons/Arrow-Turn-Down-Right-Outline.svg?react'
import chevronUp from '../icons/Chevron-Up-Outline.svg?react'
import chevronDown from '../icons/Chevron-Down-Outline.svg?react'

// Sidebar structure with parent and child sections
const sections = [
  { 
    id: "introduction",
    label: "Introduction"
  },
  { 
    id: "basic-components",
    label: "Basic Components",
    children: [
      { id: "button", label: "Button", },
      { id: "badge", label: "Badge", },
      { id: "fab", label: "FAB", },
      { id: "switch" , label: "Toggle Switches"},
      { id: "radio" , label: "Radio Buttons"},
      { id: "checkbox" , label: "Checkboxes"},
      { id: "tab", label: "Tabs", },
      { id: "input", label: "Form Inputs", },
    ]
  },
  { 
    id: "building-blocks",
    label: "Building Blocks",
    children: [
      { id: "accordion", label: "Accrodion", },      
      { id: "table", label: "Table", },
      { id: "dropdown", label: "Dropdown", },
      { id: "breadcrumb", label: "Breadcrumb", }
    ]
  },
  { 
    id: "ui-blocks",
    label: "UI Blocks",
    children: [
      { id: "datepicker", label: "Date Picker", },
    ]
  },
];

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("introduction");
  const [expanded, setExpanded] = useState({});

  const handleSelect = (id, parentId = null) => {
    setActive(id);
    onSelect(id);
  };

  const toggleDropdown = (id) => {
    setExpanded(prev => {
      if (prev[id]) {
        return{};
      }
      return { [id]: true};
    }) 
  };

  return (
    <aside className="w-full overflow-y-auto px-4 py-6">
      <nav className="flex flex-col gap-1">
        {sections.map((section) => {
          const isExpanded = expanded[section.id] || section.children?.some(child => child.id === active);
          const isActive = active === section.id;
          return (
            <div key={section.id} className="flex flex-col">
              <Button
                size="md"
                variant={isActive ? "solid" : isExpanded ? "link" : "transparent"}
                style={isActive ? "primary" : isExpanded ? "primary" : "secondary"}
                shape="rounded"
                iconSize="md"
                iconLeft={null}
                iconRight={section.children ? (isExpanded ? chevronUp : chevronDown) : null}
                onClick={() => {
                  if (section.children) {
                    toggleDropdown(section.id); // sidebar item has children, toggle dropdown
                  } else {
                    handleSelect(section.id); // sidebar item has no children, select it directly
                  }
                }}
                className="justify-start "
              >
                <span className="flex-1 truncate text-left">{section.label}</span>
              </Button>

              {section.children && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? "h-min py-1" : "max-h-0"} flex flex-col gap-1`}>
                    {section.children.map((child) => (
                      <Button
                        key={child.id}
                        size="sm"
                        variant={active === child.id ? "solid" : "transparent"}
                        style={active === child.id ? "primary" : "secondary"}
                        shape="rounded"
                        iconSize="sm"
                        iconLeft= {arrowDownRight}
                        onClick={() => handleSelect(child.id, section.id)}
                        className="justify-start text-left"
                      >
                        {child.label}
                      </Button>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}