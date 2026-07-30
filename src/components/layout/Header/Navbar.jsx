"use client";

import Link from "next/link";
import navLinks from "./navLinks";

export default function Navbar() {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navLinks.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="font-medium hover:text-red-600 transition-colors"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}