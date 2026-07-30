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
        className={`fixed top-0 left-0 w-full z-50 flex justify-center bg-white transition-all duration-500 ${
          sticky ? "py-3 shadow-lg" : "py-5"
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
              transition-all duration-500
            `}
          >
            {/* ================= Logo ================= */}

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

            {/* ================= Navigation ================= */}

            <nav className="hidden lg:flex items-center justify-center gap-12">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative text-[16px] font-medium text-[#1F2937] transition-colors duration-300 hover:text-[var(--primary)]"
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

            {/* ================= Right Side ================= */}

            <div className="flex items-center justify-end flex-shrink-0 gap-4">
              <div className="hidden lg:block">
                <Button href="/quote">
                  Get a Quote
                </Button>
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden flex items-center justify-center w-7 h-11 rounded-lg text-3xl text-[#1F2937]"
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