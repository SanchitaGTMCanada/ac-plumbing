import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Button({
  href = "#",
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-[var(--primary)]
        px-2
        py-2
        pl-6
        text-white
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        ${className}
      `}
    >
      <span>{children}</span>

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