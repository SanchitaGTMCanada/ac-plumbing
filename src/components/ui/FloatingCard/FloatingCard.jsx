"use client";

import { motion } from "framer-motion";

export default function FloatingCard({
  number,
  text,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="
        rounded-3xl
        bg-white
        p-6
        shadow-2xl
      "
    >
      <h3 className="text-4xl font-bold text-[var(--primary)]">
        {number}
      </h3>

      <p className="mt-2 text-gray-600">
        {text}
      </p>
    </motion.div>
  );
}