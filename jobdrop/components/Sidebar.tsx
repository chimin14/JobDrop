'use client';

import { useState, useRef, useEffect } from "react";

type SidebarProps = {
  categories: string[];
  onCategorySelect: (category: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ categories, onCategorySelect }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Burger Button - fully outside sidebar, top left under header */}
      <div className="fixed top-26 left-4 z-50"> {/* moved lower (112px) */}
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="relative w-8 h-6 flex flex-col justify-between items-start group"
        >
          <span
            className={`h-1 w-full rounded transition-transform duration-300 origin-left ${
              isSidebarOpen ? 'rotate-45 translate-y-[10px] bg-white' : 'bg-blue-700'
            }`}
          />
          <span
            className={`h-1 w-full rounded transition-all duration-300 origin-left ${
              isSidebarOpen ? 'w-0 opacity-0' : 'bg-blue-700'
            }`}
          />
          <span
            className={`h-1 w-full rounded transition-transform duration-300 origin-left ${
              isSidebarOpen ? '-rotate-45 -translate-y-[10px] bg-white' : 'bg-blue-700'
            }`}
          />
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-blue-900 shadow-md transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 w-64 z-40`}
      >
        <div className="pt-38 px-6"> {/* more padding top to make room for icon */}
          <h2 className="text-xl font-bold mb-6 text-white">JobDrop</h2>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className="text-white font-medium hover:underline"
                  onClick={() => {
                    onCategorySelect(category);
                    setIsSidebarOpen(false);
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
