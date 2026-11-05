
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiOutlineMenuAlt3,
  HiOutlineSearch,
} from "react-icons/hi";

import { IoClose } from "react-icons/io5";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import Container from "@/components/ui/Container/Container";
import navigation from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import CareerModal from "@/components/career/CareerModal";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [careerOpen, setCareerOpen] = useState(false);

  // Search states
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // =================================================
  // STICKY HEADER
  // =================================================

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =================================================
  // CLOSE SEARCH WITH ESCAPE
  // =================================================

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // =================================================
  // NAVIGATION HANDLER
  // =================================================

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
    setSearchOpen(false);
  };

  // =================================================
  // WEBSITE SEARCH
  // =================================================

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim().toLowerCase();

    if (!query) return;

    const elements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, li, a, button, span"
    );

    let foundElement = null;

    for (const element of elements) {
      if (
        element.closest("header") ||
        element.closest("[aria-hidden='true']") ||
        element.offsetParent === null
      ) {
        continue;
      }

      const text = element.textContent?.trim().toLowerCase();

      if (text && text.includes(query)) {
        const hasSmallerMatch = Array.from(element.children).some(
          (child) =>
            child.textContent?.trim().toLowerCase().includes(query)
        );

        if (!hasSmallerMatch) {
          foundElement = element;
          break;
        }
      }
    }

    if (foundElement) {
      foundElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      const previousOutline = foundElement.style.outline;
      const previousOffset = foundElement.style.outlineOffset;

      foundElement.style.outline = "3px solid #F4C46A";
      foundElement.style.outlineOffset = "6px";

      setTimeout(() => {
        foundElement.style.outline = previousOutline;
        foundElement.style.outlineOffset = previousOffset;
      }, 2500);

      setSearchOpen(false);
    } else {
      alert(`No results found for: ${searchQuery}`);
    }
  };

  // =================================================
  // TOGGLE SEARCH
  // =================================================

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearchQuery("");
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

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
              style={{ maxWidth: "160px" }}
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

              {/* BOOK NOW */}

              <Link
                href="#booking"
                onClick={(e) =>
                  handleNavigation(e, "#booking")
                }
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
                relative
                flex
                items-center
                justify-end
                gap-3
                lg:min-w-[350px]
              "
            >
              {/* SEARCH BUTTON AND PANEL */}

              <div className="relative flex min-w-0 items-center">

                <button
                  type="button"
                  aria-label={
                    searchOpen
                      ? "Close search"
                      : "Open search"
                  }
                  aria-expanded={searchOpen}
                  onClick={toggleSearch}
                  className={`
                    group
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    transition-all
                    duration-300

                    ${
                      sticky
                        ? `
                          border-[#123B67]/20
                          bg-white
                          text-[#123B67]
                          hover:bg-[#123B67]
                          hover:text-white
                        `
                        : `
                          border-white/40
                          bg-white/10
                          text-white
                          hover:bg-white
                          hover:text-[#123B67]
                        `
                    }
                  `}
                >
                  {searchOpen ? (
                    <IoClose size={21} />
                  ) : (
                    <HiOutlineSearch size={21} />
                  )}
                </button>

                {/* =================================================
                    RESPONSIVE FLOATING SEARCH PANEL
                ================================================= */}

              
{searchOpen && (
  <div
    className="
      fixed
      left-1/2
      top-[145px]
      z-[999]
      w-[calc(100vw-32px)]
      max-w-[380px]
      -translate-x-1/2

      overflow-hidden
      rounded-2xl
      border
      border-gray-100
      bg-white
      shadow-[0_20px_60px_rgba(18,59,103,0.20)]

      animate-in
      fade-in
      slide-in-from-top-2
      duration-200

      sm:absolute
      sm:left-auto
      sm:right-0
      sm:top-[calc(100%+14px)]
      sm:w-[360px]
      sm:max-w-[360px]
      sm:translate-x-0
    "
  >
    <div className="w-full min-w-0 p-3 sm:p-4">
      <form
        onSubmit={handleSearch}
        className="
          flex
          w-full
          min-w-0
          items-center
          gap-2
          rounded-xl
          border
          border-gray-200
          bg-[#F8FAFC]
          p-1.5
          transition-all
          duration-300
          focus-within:border-[#123B67]
          focus-within:bg-white
          focus-within:shadow-[0_0_0_3px_rgba(18,59,103,0.07)]
        "
        style={{paddingLeft:"10px"}}
      >
       

        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you looking for?"
          autoFocus
          className="
            block
            w-full
            min-w-0
            flex-1
            bg-transparent
            px-1
            py-2.5
            text-[13px]
            font-medium
            text-[#123B67]
            outline-none
            placeholder:font-normal
            placeholder:text-gray-400
          "
        />

        <button
          type="submit"
          aria-label="Search"
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            bg-[#123B67]
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:bg-[#C1121F]
            active:scale-95
          "
        >
          <HiOutlineSearch size={18} />
        </button>
      </form>
    </div>
  </div>
)}


              </div>

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
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#F4C46A]
                    hover:bg-[#174B7D]
                    hover:text-[#FFF3C4]
                    hover:shadow-[0_12px_35px_rgba(244,196,106,0.25)]
                  "
                  style={{
                    padding: "10px",
                    marginRight: "10px",
                  }}
                >
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

                  <span
                    className="
                      relative
                      z-10
                      whitespace-nowrap
                    "
                    style={{ color: "white" }}
                  >
                    Aurora Construction
                  </span>

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
                      duration-300
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
                  open ? "Close menu" : "Open menu"
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
