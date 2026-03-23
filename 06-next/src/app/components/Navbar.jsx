"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/home" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contract" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          YourCo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`h-1 w-6 bg-gray-700 rounded transition ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`h-1 w-6 bg-gray-700 rounded transition ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-6 bg-gray-700 rounded transition ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
