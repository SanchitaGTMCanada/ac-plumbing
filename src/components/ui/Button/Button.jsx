"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Button({
  href = "#",
  children,
  className = "",
  onClick,
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    // Smooth scroll for section links
    if (href.startsWith("#")) {
      e.preventDefault();

      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-[var(--primary)]
        px-2
        py-2
        pl-6
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-105
        ${className}
      `}
    >
      <span
        style={{
          marginLeft: "10px",
          color: "white",
        }}
      >
        {children}
      </span>

      <span
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white
          text-[var(--primary)]
        "
      >
        <HiArrowUpRight size={18} />
      </span>
    </Link>
  );
}