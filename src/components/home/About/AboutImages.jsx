"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImages() {
  return (
    <div className="relative h-[720px]">

      {/* Main Image */}

      <motion.div
        initial={{ opacity:0,x:-80 }}
        whileInView={{ opacity:1,x:0 }}
        viewport={{ once:true }}
        transition={{ duration:.8 }}
        className="absolute left-0 top-0"
      >
        <Image
          src="/assets/about/about-1.jpg"
          alt=""
          width={470}
          height={600}
          className="
            rounded-[40px]
            object-cover
            shadow-2xl
          "
        />
      </motion.div>

      {/* Cross Image */}

      <motion.div
        initial={{ opacity:0,x:80 }}
        whileInView={{ opacity:1,x:0 }}
        viewport={{ once:true }}
        transition={{ delay:.3 }}
        className="
          absolute
          right-0
          bottom-0
        "
      >
        <Image
          src="/assets/about/about-2.jpg"
          alt=""
          width={290}
          height={360}
          className="
            rounded-[32px]
            border-8
            border-white
            shadow-2xl
          "
        />
      </motion.div>

      {/* Experience */}

      <motion.div

        animate={{
          y:[0,-10,0]
        }}

        transition={{
          repeat:Infinity,
          duration:4
        }}

        className="
          absolute
          top-12
          right-6
          rounded-3xl
          bg-white
          px-8
          py-6
          shadow-xl
        "
      >

        <h2 className="text-5xl font-black text-[#123B67]">
          15+
        </h2>

        <p className="text-gray-500">
          Years Experience
        </p>

      </motion.div>

    </div>
  );
}