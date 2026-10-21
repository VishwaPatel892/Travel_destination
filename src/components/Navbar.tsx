"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Travel<span className="text-blue-600">Explorer</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/destinations"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Destinations
          </Link>

          <Link
            href="/region"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Regions
          </Link>

          <Link
            href="/guide"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Guide
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            About
          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border px-3 py-2 md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </div>

      {/* Mobile Navigation */}

      {menuOpen && (
        <nav className="border-t bg-white px-6 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/destinations"
              onClick={() => setMenuOpen(false)}
            >
              Destinations
            </Link>

            <Link
              href="/region"
              onClick={() => setMenuOpen(false)}
            >
              Regions
            </Link>

            <Link
              href="/guide"
              onClick={() => setMenuOpen(false)}
            >
              Guide
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

          </div>

        </nav>
      )}
    </header>
  );
}