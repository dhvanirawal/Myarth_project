"use client";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-5 md:px-9 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="text-[#FF1376] font-semibold text-lg font-poppins leading-tight">
        Ngo
        <br />
        Foundation
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white font-medium text-sm hover:text-[#F998BB] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#donate"
        className="hidden md:block bg-[#D62062] text-white text-sm font-semibold px-5 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Donate
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2.5 rounded"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1E1E1E]/95 backdrop-blur-sm md:hidden py-4 px-5 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-medium text-sm py-1 hover:text-[#F998BB] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setMenuOpen(false)}
            className="bg-[#D62062] text-white text-sm font-semibold px-5 py-2 rounded text-center hover:opacity-90 transition-opacity"
          >
            Donate
          </a>
        </div>
      )}
    </nav>
  );
}
