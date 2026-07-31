"use client";

import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: .35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#EEF3F8]
        bg-white/90
        backdrop-blur-md
        p-7
        shadow-[0_15px_45px_rgba(0,0,0,.06)]
        transition-all
        duration-500
        hover:border-[var(--primary)]
        hover:shadow-[0_30px_60px_rgba(24,74,124,.18)]
      "
    >
      {/* Gradient Circle */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-[#1F4D7A]
          to-[#C89B3C]
          text-white
          text-3xl
          shadow-lg
          transition-all
          duration-500
          group-hover:rotate-6
        "
      >
        {icon}
      </div>

      <h3 className="mt-7 text-[22px] font-bold text-[#13233A]">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-[#64748B]">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-[var(--primary)] font-semibold">
        Learn More

        <HiArrowUpRight
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>

      {/* Decorative Glow */}

      <div
        className="
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-[var(--primary)]
          opacity-5
          blur-3xl
        "
      />
    </motion.div>
  );
}