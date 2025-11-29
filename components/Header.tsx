"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-700">
        <img src="/icons/kairos-blue.svg" alt="KAIROS Logo" className="h-7 w-7" />
          KAIROS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/technology" className="hover:text-blue-600 transition">Technology</Link>
          <Link href="/use-cases" className="hover:text-blue-600 transition">Use Cases</Link>
          <Link href="/research" className="hover:text-blue-600 transition">Research</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-4 md:hidden z-50">
            <Link href="/about" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>About</Link>
            <Link href="/technology" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Technology</Link>
            <Link href="/use-cases" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Use Cases</Link>
            <Link href="/research" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Research</Link>
            <Link href="/contact" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
