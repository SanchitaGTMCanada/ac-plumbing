"use client";

import Link from "next/link";
import navigation from "@/data/navigation";

export default function MobileMenu({ open }) {
  return (
    <div
      className={`lg:hidden fixed top-[90px] left-0 w-full bg-white shadow-md transition-all duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex flex-col p-6 gap-5">
        {navigation.map((item) => (
          <Link key={item.title} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}