"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to check authentication state
  const checkAuthState = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    // Initial auth check
    checkAuthState();
    setMounted(true);

    // Listen for storage changes (when token is added/removed)
    const handleStorageChange = () => {
      checkAuthState();
    };

    // Listen for custom auth events
    const handleAuthChange = () => {
      checkAuthState();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChanged', handleAuthChange);
    
    // Also check periodically for same-tab changes
    const interval = setInterval(checkAuthState, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChanged', handleAuthChange);
      clearInterval(interval);
    };
  }, [pathname]); // Re-check when route changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    
    // Trigger custom event to notify other components
    window.dispatchEvent(new Event('authChanged'));
    
    router.push("/login");
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "Browse Jobs", href: "/browse" },
    { label: "Post a Job", href: "/post" },
    { label: "About Us", href: "/about" },
  ];

  // Don't render auth-dependent parts until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <>
        {/* Top navbar */}
        <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="JobDrop Logo" width={40} height={40} className="mr-2" />
            <span className="text-xl font-bold text-blue-700 hidden sm:inline">Job</span>
            <span className="text-xl font-bold text-yellow-500 hidden sm:inline">Drop</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            ))}
            {/* Loading placeholder */}
            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl text-blue-700"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <HiMenu />
          </button>
        </nav>
      </>
    );
  }

  return (
    <>
      {/* Top navbar */}
      <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="JobDrop Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold text-blue-700 hidden sm:inline">Job</span>
          <span className="text-xl font-bold text-yellow-500 hidden sm:inline">Drop</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline transition text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition">
                Login
              </Link>
              <Link href="/register" className="text-gray-700 hover:text-blue-600 transition">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-blue-700"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <HiMenu />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-blue-700">Menu</h2>
          <button
            className="text-2xl text-gray-600"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <HiX />
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Link 
                href="/dashboard" 
                className="text-gray-700 hover:text-blue-600 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-red-600 hover:underline text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-gray-700 hover:text-blue-600 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/register" 
                className="text-gray-700 hover:text-blue-600 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}