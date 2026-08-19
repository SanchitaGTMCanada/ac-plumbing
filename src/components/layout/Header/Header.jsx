"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";
import navigation from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import CareerModal from "@/components/career/CareerModal";
import { motion } from "framer-motion";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e, href) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed
          top-6
          left-0
          z-50
          flex
          w-full
          justify-center
          transition-all
          duration-500

          ${sticky ? "py-3" : "py-5"}
        `}
      >
        <Container>
          <div
            className={`
              flex
              min-h-[100px]
              items-center
              justify-between
              rounded-2xl
              px-4
              transition-all
              duration-500

              lg:grid
              lg:grid-cols-[165px_minmax(0,1fr)_350px]
              lg:px-5

              ${
                sticky
                  ? `
                    border
                    border-white/30
                    bg-white/95
                    shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                    backdrop-blur-xl
                  `
                  : `
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                  `
              }
            `}
          >

            {/* =================================================
                LOGO
            ================================================= */}

            <div
              className="
                flex
                h-full
                flex-shrink-0
                items-center
              "
              style={{
                maxWidth: "160px",
              }}
            >
              <Link
                href="#home"
                onClick={(e) => handleNavigation(e, "#home")}
                className="
                  flex
                  h-full
                  items-center
                  justify-center
                "
              >
                <Image
                  src="/assets/logos/logo.png"
                  alt="AC Plumbing & Heating"
                  width={500}
                  height={200}
                  priority
                  className="
                    h-[100px]
                    w-auto
                    object-contain
                    transition-all
                    duration-300

                    lg:h-[110px]

                    xl:h-[120px]
                  "
                />
              </Link>
            </div>


            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                items-center
                justify-center
                gap-7

                lg:flex
              "
            >

              {navigation
                .filter((item) => item.title !== "Home")
                .map((item) => {

                  const navClass = `
                    group
                    relative
                    text-[15px]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      sticky
                        ? `
                          text-[#123B67]
                          hover:text-[var(--primary)]
                        `
                        : `
                          !text-white
                          hover:!text-[#F4C46A]
                        `
                    }
                  `;


                  /* ==========================================
                     CAREERS
                  ========================================== */

                  if (item.title === "Careers") {
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setCareerOpen(true)}
                        className={navClass}
                      >
                        Join Us

                        <span
                          className="
                            absolute
                            -bottom-2
                            left-0
                            h-[2px]
                            w-0
                            bg-[var(--primary)]
                            transition-all
                            duration-300

                            group-hover:w-full
                          "
                        />
                      </button>
                    );
                  }


                  /* ==========================================
                     NORMAL NAVIGATION
                  ========================================== */

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={(e) =>
                        handleNavigation(e, item.href)
                      }
                      className={navClass}
                    >
                      {item.title}

                      <span
                        className="
                          absolute
                          -bottom-2
                          left-0
                          h-[2px]
                          w-0
                          bg-[var(--primary)]
                          transition-all
                          duration-300

                          group-hover:w-full
                        "
                      />
                    </Link>
                  );
                })}


              {/* =================================================
                  BOOK NOW — MAIN NAV ITEM
              ================================================= */}
<Link
  href="#booking"
  onClick={(e) => handleNavigation(e, "#booking")}
  className={`
    group
    relative
    flex
    items-center
    gap-2
    text-[15px]
  
    transition-all
    duration-300

    ${
      sticky
        ? `
          !text-[#C1121F]
          hover:!text-[#9E0E19]
        `
        : `
          !text-white
          hover:!text-[#F4C46A]
        `
    }
  `}
>
  <span className="relative z-10">
    Book Now
  </span>

  <span
    className={`
      absolute
      left-0
      -bottom-2
      h-[2px]
      w-0
      transition-all
      duration-300
      group-hover:w-full

      ${
        sticky
          ? "bg-[#C1121F]"
          : "bg-[#123B67]"
      }
    `}
  />
</Link>
            </nav>


            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-end
                gap-3

                lg:min-w-[350px]
              "
            >

              {/* =================================================
                  AURORA CONSTRUCTION
              ================================================= */}

              <div className="hidden lg:flex">

<a
  href="https://auroraconstruction.ca/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    flex
    items-center
    gap-3
    overflow-hidden
    rounded-full
    border
    border-[#F4C46A]/50
    bg-[#123B67]/90
    px-4
    py-2
    text-[14px]
    font-semibold
    text-white
    shadow-[0_8px_25px_rgba(18,59,103,0.25)]
    backdrop-blur-md
    transition-all
    duration-400

    hover:-translate-y-1
    hover:border-[#F4C46A]
    hover:bg-[#174B7D]
    hover:text-[#FFF3C4]
    hover:shadow-[0_12px_35px_rgba(244,196,106,0.25)]
  "

  style={{padding:"10px",marginRight:"10px"}}
>
  {/* Animated shine */}

  <span
    className="
      pointer-events-none
      absolute
      top-0
      -left-[100%]
      h-full
      w-[40%]
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-all
      duration-700

      group-hover:left-[130%]
    "
  />

  {/* Text */}

  <span
    className="
      relative
      z-10
      whitespace-nowrap
    "
    style={{color:"white"}}
  >
    Aurora Construction
  </span>

  {/* Arrow */}

  <span
    className="
      relative
      z-10
      flex
      h-7
      w-7
      shrink-0
      items-center
      justify-center
      rounded-full
      border
      border-[#F4C46A]/70
      bg-[#F4C46A]/10
      text-[#F4C46A]
      transition-all
      duration-400

      group-hover:translate-x-1
      group-hover:-translate-y-1
      group-hover:border-[#F4C46A]
      group-hover:bg-[#F4C46A]
      group-hover:text-[#123B67]
      group-hover:shadow-[0_0_18px_rgba(244,196,106,0.45)]
    "
  >
    <HiArrowTopRightOnSquare size={14} />
  </span>

  {/* Bottom accent */}

  <span
    className="
      absolute
      bottom-0
      left-1/2
      h-[2px]
      w-0
      -translate-x-1/2
      rounded-full
      bg-[#F4C46A]
      transition-all
      duration-500

      group-hover:w-[60%]
    "
  />
</a>

              </div>


              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================= */}

              <button
                type="button"
                aria-label={
                  open
                    ? "Close menu"
                    : "Open menu"
                }
                onClick={() => setOpen(!open)}
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  text-3xl
                  transition-all
                  duration-300

                  lg:hidden

                  ${
                    sticky
                      ? "text-[#1F2937]"
                      : "text-white"
                  }
                `}
              >
                {open ? (
                  <IoClose />
                ) : (
                  <HiOutlineMenuAlt3 />
                )}
              </button>

            </div>

          </div>
        </Container>
      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onCareerClick={() => setCareerOpen(true)}
      />


      {/* =====================================================
          CAREER MODAL
      ===================================================== */}

      <CareerModal
        open={careerOpen}
        onClose={() => setCareerOpen(false)}
      />

    </>
  );
}