'use client';

import { useState, useRef, useEffect } from 'react';

type SidebarProps = {
  categories: string[];
  onCategorySelect: (category: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ categories, onCategorySelect }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
        setIsHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSidebarVisible = isMobile ? isMobileOpen : isHovered;

  return (
    <>
      {/* Toggle Icon — centered and clickable on both mobile and desktop */}
      {!isSidebarVisible && (
        <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50">
          <label
            className="cursor-pointer block w-12 h-12"
            onClick={() =>
              isMobile ? setIsMobileOpen(true) : setIsHovered(true)
            }
          >
            <input type="checkbox" className="hidden peer" />
            <svg
              viewBox="0 0 32 32"
              className="h-12 w-12 transition-transform duration-500"
            >
              <path
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                className="fill-none stroke-white stroke-[3] stroke-linecap-round stroke-linejoin-round"
                style={{
                  strokeDasharray: '12 63',
                  transition:
                    'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
              <path
                d="M7 16 27 16"
                className="fill-none stroke-white stroke-[3] stroke-linecap-round stroke-linejoin-round"
              />
            </svg>
          </label>
        </div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-[#7257fa] text-white z-40 transition-all duration-300
          ${isSidebarVisible ? 'w-64' : 'w-16'}
          ${isMobile ? (isMobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
        `}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        <div className="pt-24 px-4 overflow-hidden">
          <h2
            className={`text-xl font-bold mb-6 transition-opacity duration-200 ${
              isSidebarVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            JobDrop
          </h2>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`font-medium hover:underline transition-opacity duration-200 ${
                    isSidebarVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  onClick={() => {
                    onCategorySelect(category);
                    setIsMobileOpen(false);
                    setIsHovered(false);
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
