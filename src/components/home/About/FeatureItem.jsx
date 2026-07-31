"use client";

import { motion } from "framer-motion";

export default function FeatureItem({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
      flex
      gap-5
      items-start
      rounded-3xl
      border
      border-gray-100
      bg-white
      p-6
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-500
    "
    >
      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-[#B88A3B]
        text-white
      "
      >
        <Icon size={22} />
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#12233D]">
          {title}
        </h4>

        <p className="mt-2 text-gray-600 leading-7">
          {text}
        </p>
      </div>
    </motion.div>
  );
}