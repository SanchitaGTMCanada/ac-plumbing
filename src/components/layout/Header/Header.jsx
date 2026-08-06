"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";
import navigation from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import CareerModal from "@/components/career/CareerModal";
import { HiPhone, HiArrowTopRightOnSquare } from "react-icons/hi2";



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
        className={`fixed top-6 left-0 w-full z-50 flex justify-center transition-all duration-500 ${
          sticky ? "py-3" : "py-5"
        }`}
      >
        <Container>
          <div
            className={`
              flex items-center justify-between
             lg:grid lg:grid-cols-[165px_minmax(0,1fr)_330px]
              min-h-[100px]
              px-4 lg:px-8
              rounded-2xl
              transition-all
              duration-500
              ${
                sticky
                  ? "bg-white/95 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-white/30"
                  : "bg-white/10 backdrop-blur-xl border border-white/20"
              }
            `}
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            {/* Logo */}
            <div
              className="flex h-full items-center flex-shrink-0"
              style={{
                maxWidth: "160px",
              }}
            >
              <Link
                href="#home"
                onClick={(e) => handleNavigation(e, "#home")}
                className="flex h-full items-center justify-center"
              >
                <Image
                  src="/assets/logos/logo.png"
                  alt="AC Plumbing & Heating"
                  width={500}
                  height={200}
                  priority
                  className="
                    h-[100px]
                    lg:h-[110px]
                    xl:h-[120px]
                    w-auto
                    object-contain
                    transition-all
                    duration-300
                  "
                />
              </Link>
            </div>

        {/* Navigation */}
<nav className="hidden lg:flex items-center justify-center gap-8">
  {navigation
    .filter((item) => item.title !== "Home")
    .map((item) => {
      const navClass = `group relative text-[16px] font-medium transition-all duration-300 ${
        sticky
          ? "text-[#123B67] hover:text-[var(--primary)]"
          : "!text-white hover:!text-[#F4C46A]"
      }`;

      if (item.title === "Careers") {
        return (
          <button
            key={item.title}
            type="button"
            onClick={() => setCareerOpen(true)}
            className={navClass}
          >
            {item.title === "Careers" ? "Join Us" : item.title}

            <span
              className="
                absolute
                left-0
                -bottom-2
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

      return (
        <Link
          key={item.title}
          href={item.href}
          onClick={(e) => handleNavigation(e, item.href)}
          className={navClass}
        >
          {item.title}

          <span
            className="
              absolute
              left-0
              -bottom-2
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
</nav>
            {/* Right Side */}
            <div className="flex items-center justify-end gap-3 min-w-[350px]" >
           <div className="hidden lg:flex items-center gap-3" style={{ marginRight: "5px" }}>

  {/* External Website */}
<a
  href="https://auroraconstruction.ca/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    flex
    h-[44px]
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-full
    border
    border-[#D9A63A]
    bg-gradient-to-r
    from-[#FFF1B8]
    via-[#F4C46A]
    to-[#B8821F]
    px-5
    font-semibold
    text-[#123B67]
    shadow-[0_10px_30px_rgba(244,196,106,.35)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_18px_40px_rgba(244,196,106,.45)]
  "
  style={{ padding: "5px 7px" }}
>
  {/* Silver Glaze */}
  <span
    className="
      absolute
      top-0
      -left-[120%]
      h-full
      w-[40%]
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/80
      to-transparent
      transition-all
      duration-700
      ease-out
      group-hover:left-[130%]
    "
  />

  <HiArrowTopRightOnSquare
    size={18}
    className="relative z-10"
  />

  <span className="relative z-10 whitespace-nowrap">
   Aurora Construction
  </span>
</a>
  {/* Call */}

<Button
  href="#booking"
  className="
    silver-glaze
    group
    relative
    overflow-hidden
    rounded-full
    bg-gradient-to-r
    from-[#C1121F]
    via-[#D62839]
    to-[#E63946]
    text-white
    shadow-[0_15px_40px_rgba(214,40,57,.35)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_20px_50px_rgba(214,40,57,.45)]
  "
>
  <span className="relative z-10 flex items-center gap-2">
    {/* <HiPhone size={18} /> */}
    <span>Book Now</span>
  </span>
</Button>

</div>
              <button
                onClick={() => setOpen(!open)}
                className={`lg:hidden flex items-center justify-center w-10 h-10 text-3xl transition-all duration-300 ${
                  sticky ? "text-[#1F2937]" : "text-white"
                }`}
              >
                {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onCareerClick={() => setCareerOpen(true)}
      />
      <CareerModal
  open={careerOpen}
  onClose={() => setCareerOpen(false)}
/>
    </>
  );
}