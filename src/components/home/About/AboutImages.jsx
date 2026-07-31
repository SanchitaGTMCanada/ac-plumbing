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
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute left-10 top-24 rounded-[28px] bg-white px-8 py-6 shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
      >
        <h2 className="text-5xl font-black text-[#123B67]">
          15+
        </h2>

        <p className="mt-2 font-medium tracking-wide text-gray-500">
          Years Experience
        </p>
      </motion.div>
    </div>
  );
}