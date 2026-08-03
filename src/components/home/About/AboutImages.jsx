"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImages() {
  return (
    <div className="relative flex h-[760px] justify-end">

      {/* Large Image */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0"
      >
        <Image
          src="/assets/about/about-1.jpg"
          width={500}
          height={620}
          alt=""
          className="rounded-[36px] object-cover shadow-2xl"
        />
      </motion.div>

      {/* Small Image */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-8 left-0"
      >
        <Image
          src="/assets/about/about-2.jpg"
          width={320}
          height={380}
          alt=""
          className="rounded-[32px] border-8 border-white shadow-2xl"
        />
      </motion.div>

      {/* Experience Card */}
<motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    repeat: Infinity,
    duration: 4,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-9
    top-24
    z-30
    min-w-[160px]
    rounded-[24px]
    bg-white
    px-9
    py-9
    shadow-[0_20px_50px_rgba(0,0,0,0.12)]
  "
>
  <span className="block text-[34px] font-bold leading-none text-[#123B67]">
    15+
  </span>

  <span className="mt-2 block text-sm font-medium uppercase text-[#667085]">
    Years Experience
  </span>
</motion.div>
    </div>
  );
}