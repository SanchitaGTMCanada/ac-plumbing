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

import { HiPhone } from "react-icons/hi2";

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
              lg:grid lg:grid-cols-[380px_1fr_260px]
              min-h-[120px]
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
            <div className="flex h-full items-center flex-shrink-0">
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
<nav className="hidden lg:flex items-center justify-center gap-12">
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
            <div className="flex items-center justify-end flex-shrink-0 gap-4">
              <div className="hidden lg:block">
  <Button href="tel:+18674471500">
    <span className="flex items-center justify-center gap-2">
      <HiPhone size={18} />
      <span>Call Now</span>
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
      />
      <CareerModal
  open={careerOpen}
  onClose={() => setCareerOpen(false)}
/>
    </>
  );
}