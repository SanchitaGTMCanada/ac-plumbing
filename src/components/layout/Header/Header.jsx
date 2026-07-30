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

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              lg:grid lg:grid-cols-[180px_1fr_220px]
              h-[88px]
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
          >
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <Image
                  src="/assets/logos/logo.png"
                  alt="AC Plumbing & Heating"
                  width={190}
                  height={70}
                  priority
                  className="h-[58px] lg:h-[60px] w-auto object-contain"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-12">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group relative text-[16px] font-medium transition-all duration-300 ${
                    sticky
                      ? "text-[#1F2937] hover:text-[var(--primary)]"
                      : "text-white hover:text-[#F4C46A]"
                  }`}
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
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center justify-end flex-shrink-0 gap-4">
              <div className="hidden lg:block">
                <Button href="/quote">
                  Get a Quote
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

      <MobileMenu open={open} />
    </>
  );
}