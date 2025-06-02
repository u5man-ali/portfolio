// src/components/sidebar.jsx
import {useState} from "react";
import Button from './button';
import Dropdown from './dropdown';
                                                              
const sections = [
  {
    id: "introduction",
    label: "تعارف",
  },
  {
    id: "education",
    label: "درس و تدریس",
    iconLeftName: "Arrow-Enter-Left-Outline",
    children: [
      { id: "schools", label: "مدارس" },
      { id: "universities", label: "جامعات" },
    ],
  },
  {
    id: "random",
    label: "متفرقات",
    iconLeftName: "Arrow-Enter-Left-Outline",
    children: [
      { id: "stories", label: "کہانیاں" },
      { id: "poetry", label: "شاعری" },
    ],
  },
]

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("introduction");
  const [expanded, setExpanded] = useState({});

  const handleSelect = (id, parentId = null) => {
    setActive(id);
    onSelect(id);

    // If parentId is passed, ensure dropdown is expanded
    if (parentId) {
      setExpanded(prev => ({ ...prev, [parentId]: true }));
    }
  };

  const toggleDropdown = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside className="h-screen w-full overflow-y-auto border-white-500 px-4 py-6 bg-white-300">
      <nav className="flex flex-col gap-1">
        {sections.map((section) => {
          const isExpanded = expanded[section.id] || section.children?.some(child => child.id === active);
          const isActive = active === section.id;

          return (
            <div key={section.id} className="flex flex-col">
              <Button
                size="md"
                variant={isActive ? "solid" : "transparent"}
                style={isActive ? "primary" : "neutral"}
                shape="rounded"
                iconSize="md"
                showLeftIcon={!!section.iconLeftName}
                showRightIcon={!!section.children}
                iconLeftName={section.iconLeftName}
                iconRightName={section.children ? (isExpanded ? "Chevron-Up-Outline" : "Chevron-Down-Outline") : null}
                onClick={() => {
                  if (section.children) {
                    toggleDropdown(section.id);
                  } else {
                    handleSelect(section.id);
                  }
                }}
                className="justify-start font-disp text-body-xxl font-bold"
              >
                <span className="flex-1 truncate text-right">{section.label}</span>
              </Button>

              {section.children && isExpanded && (
                <div className="pl-4 pr-2 py-1 flex flex-col gap-1 transition-all duration-200 ease-in-out">
                  {section.children && (
                  <Dropdown isOpen={isExpanded}>
                    {section.children.map((child) => (
                      <Button
                        key={child.id}
                        size="sm"
                        variant={active === child.id ? "solid" : "transparent"}
                        style={active === child.id ? "primary" : "neutral"}
                        shape="rounded"
                        iconSize="sm"
                        showLeftIcon={false}
                        showRightIcon={false}
                        onClick={() => handleSelect(child.id, section.id)}
                        className="justify-start text-body-md text-right"
                      >
                        {child.label}
                      </Button>
                    ))}
                  </Dropdown>
                )}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}