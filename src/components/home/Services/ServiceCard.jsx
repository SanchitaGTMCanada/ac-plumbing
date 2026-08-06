"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";


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
      className={`
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[32px]
        bg-transparent
        shadow-[0_20px_60px_rgba(0,0,0,.06)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-[0_35px_80px_rgba(18,59,103,.16)]

        ${service.featured ? "lg:col-span-2" : ""}
      `}
    >

      {/* Image Section */}

      <div
        className="
          relative
          aspect-[4/3]
          w-full
          overflow-hidden
          shrink-0
        "
      >

        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="
            (max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />


        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#123B67]/95
            via-[#123B67]/30
            to-transparent
          "
        />


        {/* Icon */}

        <div
          className="
            absolute
            right-6
            top-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#C89B3C]
            text-white
            shadow-xl
            transition
            duration-500
            group-hover:rotate-12
          "
        >
          <Icon size={26} />
        </div>


        {/* Title */}

        <div
          className="
            absolute
            bottom-6
            left-6
            right-6
          "
        >

          <span
            className="
              mb-2
              block
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-white/80
            "
          >
            {service.tag}
          </span>


          <span
            className="
              max-w-[320px]
              text-[26px]
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-[30px]
            "
          >
            {service.title}
          </span>

        </div>

      </div>



      {/* Content Section */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-8
          py-10
          lg:px-10
        "

        style={{
     padding:"20px"
        }}
      >

        {/* <p
          className="
            line-clamp-3
            text-[16px]
            leading-8
            text-[#667085]
          "
        >
          {service.description}
        </p> */}



        {/* Bottom Area */}

       {/* Pricing Area */}

<div
  className="
    mt-auto
    rounded-3xl
    border
    border-[#123B67]/10
   bg-transparent
    p-6
    shadow-sm
    transition-all
    duration-500
    group-hover:border-[#C89B3C]/40
    group-hover:shadow-xl
  "

  style={{ padding: "20px" }}
>

  {/* Price & Duration */}

  <div className="flex items-start justify-between" style={{ marginBottom:"10px"}}>

    <div style={{ marginBottom:"10px" , marginRight:"10px"}}>

      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#98A2B3]">
        Starting From
      </p>

      <h2 className="mt-2 text-[30px] font-black leading-none text-[#123B67] transition-colors duration-300 group-hover:text-[#C89B3C]">
        {service.startingPrice}
      </h2>

    </div>

<div
  className="
    flex
    items-center
    gap-3
    rounded-2xl
    border
    border-[#C89B3C]/30
    bg-gradient-to-r
    from-[#0E2F52]
    via-[#123B67]
    to-[#194E82]
    px-5
    py-3
    shadow-[0_15px_40px_rgba(18,59,103,.35)]
  "
>
  {/* Gold Glow */}
  <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#F4C46A]/20 blur-2xl" />

  <div className="relative z-10" style={{padding:"7px"}}>
    <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#F4C46A]">
     Time
    </p>

    <p className="mt-2 text-lg font-bold text-white">
      {service.duration}
    </p>
  </div>
</div>

  </div>

  {/* Divider */}

  <div className="my-6 h-px bg-[#123B67]/10" />

  {/* CTA */}

<Link
  href="tel:+18674471500"
  className="
    group/btn
    flex
    items-center
    justify-end
    rounded-2xl
    bg-gradient-to-r
    from-[#B8860B]
    via-[#D4A017]
    to-[#F4C46A]
    px-5
    py-4
    font-semibold
    text-[#123B67]
    shadow-[0_12px_30px_rgba(212,160,23,.35)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_18px_40px_rgba(212,160,23,.45)]
    hover:from-[#C9971A]
    hover:via-[#E3B23C]
    hover:to-[#FFD56A]
  "
  style={{
    width: "fit-content",
    marginTop: "10px",
    padding: "8px",
  }}
>
  <span className="flex items-center gap-2 text-white">
    <HiPhone size={18} />
    Call Now
  </span>

  <HiArrowUpRight
    size={22}
    className="
      transition-transform
      duration-300
      group-hover/btn:translate-x-1
      group-hover/btn:-translate-y-1
    "
  />
</Link>

</div>


      </div>



      {/* Decorative Circle */}

      <div
        className="
          absolute
          -bottom-24
          -right-24
          h-56
          w-56
          rounded-full
          bg-[#123B67]/5
          transition
          duration-700
          group-hover:scale-150
        "
      />

    </motion.article>
  );
}
