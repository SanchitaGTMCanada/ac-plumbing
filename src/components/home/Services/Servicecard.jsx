"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      className={`group relative overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(18,59,103,.16)]
      ${service.featured ? "lg:col-span-2 lg:row-span-2" : ""}
      `}
    >
      {/* Image */}

      <div
        className={`relative overflow-hidden ${
          service.featured ? "h-[420px]" : "h-[260px]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#123B67]/90 via-[#123B67]/20 to-transparent" />

        {/* Tag */}

        <div className="absolute left-7 top-7 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#123B67]">
          {service.tag}
        </div>

        {/* Icon */}

        <div className="absolute right-7 top-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#C89B3C] text-white shadow-xl transition duration-500 group-hover:rotate-12">
          <Icon size={28} />
        </div>

        {/* Title */}

        <div className="absolute bottom-8 left-8">

          <h3 className="max-w-[320px] text-[38px] font-black leading-tight text-white">
            {service.title}
          </h3>

        </div>
      </div>

      {/* Content */}

      <div className="relative p-8">

        <p className="leading-8 text-[#667085]">
          {service.description}
        </p>

        {/* Bottom */}

        <div className="mt-8 flex items-end justify-between">

          <div>

            <span className="text-xs uppercase tracking-[0.28em] text-gray-400">
              Starting From
            </span>

            <h2 className="mt-2 text-[42px] font-black text-[#123B67] transition duration-300 group-hover:text-[#C89B3C]">
              {service.price}
            </h2>

          </div>

          <Link
            href={service.link}
            className="flex items-center gap-3 rounded-full border border-slate-200 px-5 py-3 font-semibold text-[#123B67] transition duration-300 hover:bg-[#123B67] hover:text-white"
          >
            Learn More

            <HiArrowUpRight
              size={22}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

      </div>

      {/* Decorative Circle */}

      <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#123B67]/5 transition duration-700 group-hover:scale-150" />
    </motion.article>
  );
}