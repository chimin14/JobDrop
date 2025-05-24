"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Browse Jobs", href: "/browse" },
    { label: "Post a Job", href: "/post" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
    { label: "About Us", href: "/about" }, 
    { label: "Login", href: "/login" },
  ];
  

  return (
    <>
      {/* Top navbar */}
      <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="flex items-center">
            <Image
            src="/logo.svg"
            alt="JobDrop Logo"
            width={40}
            height={40}
            className="mr-2"
            />
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
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-3xl text-blue-700"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <HiMenu />
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
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
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
