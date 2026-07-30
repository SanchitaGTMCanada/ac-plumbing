"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      {/* <Image
        src="/images/hero/hero-bg.jpg"
        alt="AC Plumbing"
        fill
        priority
        className="object-cover"
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.5 }}
            className="uppercase tracking-[4px] text-red-500 font-semibold mb-4"
          >
            Welcome to AC Plumbing & Heating
          </motion.p>

          <motion.h1
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:0.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Reliable Plumbing & Heating Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.4 }}
            className="text-gray-200 mt-8 text-lg leading-8"
          >
            Residential and commercial plumbing, heating,
            drain cleaning and emergency repair services
            across Canada.
          </motion.p>

          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.6 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <Link
              href="/quote"
              className="bg-red-600 px-8 py-4 rounded-lg text-white hover:bg-red-700 transition"
            >
              Get Free Quote
            </Link>

            <Link
              href="tel:+1XXXXXXXXXX"
              className="border border-white px-8 py-4 rounded-lg text-white hover:bg-white hover:text-black transition"
            >
              Call Now
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}