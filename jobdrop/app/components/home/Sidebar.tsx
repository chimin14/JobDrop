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
  const [selectedCategory, setSelectedCategory] = useState('My Jobs');
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

  const getIcon = (category: string) => {
    switch (category) {
      case 'My Jobs':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'Applications':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'Settings':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category);
    setIsMobileOpen(false);
    setIsHovered(false);
  };

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
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-200">
              <svg
                viewBox="0 0 32 32"
                className="h-6 w-6 transition-transform duration-500"
              >
                <path
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  className="fill-none stroke-white stroke-[2] stroke-linecap-round stroke-linejoin-round"
                  style={{
                    strokeDasharray: '12 63',
                    transition:
                      'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
                <path
                  d="M7 16 27 16"
                  className="fill-none stroke-white stroke-[2] stroke-linecap-round stroke-linejoin-round"
                />
              </svg>
            </div>
          </label>
        </div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-slate-50 to-gray-100 border-r border-gray-200 shadow-lg z-40 transition-all duration-300
          ${isSidebarVisible ? 'w-64' : 'w-16'}
          ${isMobile ? (isMobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
        `}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Header */}
        <div className={`p-6 border-b border-gray-200 transition-opacity duration-200 ${
          isSidebarVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            <div className={`transition-opacity duration-200 ${
              isSidebarVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <h2 className="text-lg font-bold text-gray-900">JobDrop</h2>
              <p className="text-xs text-gray-500">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
                  } ${isSidebarVisible ? 'opacity-100' : 'opacity-0'}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className={`flex-shrink-0 ${selectedCategory === category ? 'text-white' : 'text-gray-400'}`}>
                    {getIcon(category)}
                  </span>
                  <span className={`font-medium transition-opacity duration-200 ${
                    isSidebarVisible ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {category}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 transition-opacity duration-200 ${
          isSidebarVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center">
            <p className="text-xs text-gray-500">JobDrop Dashboard</p>
            <p className="text-xs text-gray-400">v1.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;