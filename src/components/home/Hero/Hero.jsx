"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";

const heroImages = [
  "/assets/hero/hero-1.jpg",
  "/assets/hero/hero-2.jpg",
  "/assets/hero/hero-3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden " style={{ minHeight: "calc(100vh - 134px)", paddingTop: "134px" }}>

      {/* Background Slider */}

      <div className="absolute inset-0">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: 1,
              scale: 1.08,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 7,
            }}
            style={{
              backgroundImage: `url(${heroImages[current]})`,
              backgroundSize: "cover",
              backgroundPosition: "70% center",
            }}
          />
        </AnimatePresence>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#081727]/80 via-[#081727]/55 to-transparent"></div>

      </div>

      {/* Content */}
<div className="relative z-20 flex justify-center ">
      <Container className="relative z-20 h-full">

        <div className="flex h-full items-center pt-28">

          <div className="max-w-[680px]">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-8" style={{padding:"6px"}}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]"></span>

              <span className="text-[13px] font-semibold uppercase tracking-[3px] text-white">
                Trusted Since 2010
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .35 }}
              className="mt-8 text-[52px] md:text-[64px] lg:text-[76px] font-extrabold leading-[1.05] text-white"
            >
              Professional
              <br />
              Plumbing &
              <br />
              Heating Services
            </motion.h1>

            {/* Paragraph */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .55 }}
              className="mt-8 max-w-[620px] text-[18px] leading-9 text-white/90"
            >
              From emergency plumbing repairs to complete heating
              installations, AC Plumbing & Heating delivers fast,
              reliable and affordable solutions for residential and
              commercial properties across Canada.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .75 }}
              className="mt-10 flex flex-wrap items-center gap-6"
              style={{margin:"20px" , marginLeft:"0px"}}
             
              
            >
              <Button href="/quote">
                Get a Quote
              </Button>

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 font-semibold text-white transition"

                style={{color:"white"}}
              >
                Explore Services

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </motion.div>

            {/* Statistics */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 flex flex-wrap gap-6"
            >
              {[
                {
                  number: "15+",
                  title: "Years Experience",
                },
                {
                  number: "24/7",
                  title: "Emergency Support",
                },
                {
                  number: "100%",
                  title: "Customer Satisfaction",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="min-w-[180px] rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl px-7 py-6"
                  style={{padding:"10px"}}
                >
                  <h3 className="text-[40px] font-bold text-white leading-none">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-[15px] tracking-wide text-white/80">
                    {item.title}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>

      </Container>
</div>
      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-2xl"
      >
        ↓
      </motion.div>

    </section>
  );
}