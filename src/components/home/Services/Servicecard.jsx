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
      className={`
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[32px]
        bg-white
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

        <p
          className="
            line-clamp-3
            text-[16px]
            leading-8
            text-[#667085]
          "
        >
          {service.description}
        </p>



        {/* Bottom Area */}

        <div
          className="
            mt-auto
            flex
            items-end
            justify-between
            gap-5
            pt-10
          "
        >

          <div>

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#98A2B3]
              "
            >
              Starting From
            </span>


            <h2
              className="
                mt-3
                text-[36px]
                font-black
                leading-none
                tracking-tight
                text-[#123B67]
                transition
                duration-300
                group-hover:text-[#C89B3C]
                lg:text-[42px]
              "
            >
              {service.price}
            </h2>

          </div>



          <Link
            href={service.link}
            className="
              group/btn
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[#123B67]/15
              px-5
              py-3
              text-sm
              font-semibold
              text-[#123B67]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#123B67]
              hover:text-white
            "

            style={{
              padding:"10px"
            }}
          >

            Learn More


            <HiArrowUpRight
              size={20}
              className="
                transition
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