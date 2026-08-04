"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

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


  const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const titleItem = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
  

  return (
<section className="relative min-h-[100svh] overflow-hidden pt-[110px] lg:pt-[160px]">

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
<div className="relative z-20 flex justify-center " >
      <Container className="relative z-20 h-full">

       <div className="flex min-h-[calc(100svh-110px)] items-center py-8 lg:py-0" style={{paddingTop:"162px"}}>

          <div className="max-w-[680px]">

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-8" style={{padding:"6px", marginLeft:"5px"}}
            
             
            >
             <span className="h-3 w-3 rounded-full bg-white border-2 border-[#F4C46A] shadow-[0_0_10px_rgba(244,196,106,0.8)]"></span>

           <span className="text-[13px] font-semibold uppercase tracking-[3px] text-white" >
  Fast • Reliable • Professional
</span>
            </motion.div>

            {/* Heading */}

<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
 className="mt-8 text-[52px] md:text-[64px] lg:text-[76px] font-semibold leading-[1.05] tracking-[-2px] text-white"
>
  <span className="text-white">
    Professional
    <br />
  </span>

  <TypeAnimation
    sequence={[
      "Plumbing Services",
      2500,
      "Heating Solutions",
      2500,
      "Emergency Repairs",
      2500,
      "Drain Cleaning",
      2500,
    ]}
    wrapper="span"
    speed={45}
    repeat={Infinity}
    className="text-[#F4C46A]"
  />
</motion.h1>

            {/* Paragraph */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .55 }}
              className="mt-8 max-w-[620px] text-[18px] leading-9 text-white/90"
              style={{marginLeft:"5px"}}
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
              style={{margin:"20px" , marginLeft:"5px"}}
             
              
            >
              <Button href="/quote">
                Book Now
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
               style={{margin:"20px" , marginLeft:"7px"}}
            >
              {[
                {
                  number: "20+",
                  title: "Service Areas"
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
                  <span className="text-[40px] font-bold leading-none bg-gradient-to-r from-white via-[#FFE9A8] to-[#F4C46A] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(244,196,106,0.5)]">
                {item.number}
              </span>

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