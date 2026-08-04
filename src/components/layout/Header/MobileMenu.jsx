"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

import navigation from "@/data/navigation";

export default function MobileMenu({ open, onClose }) {
  const handleNavigation = (e, href) => {
    e.preventDefault();

    onClose();

    if (!href) return;

    setTimeout(() => {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] lg:hidden overflow-y-auto scrollbar-hide"
        >
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-[#0B2746]/35 backdrop-blur-3xl"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 min-h-screen px-6 pb-10"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-[#F4C46A] hover:text-[#081F38]"
            >
              <IoClose size={20} />
            </button>

            {/* Logo */}
            <div className="flex justify-center pt-12">
              <Link
                href="#home"
                onClick={(e) => handleNavigation(e, "#home")}
              >
                <Image
                  src="/assets/logos/logo.png"
                  alt="AC Plumbing & Heating"
                  width={180}
                  height={80}
                  className="h-auto w-[170px]"
                />
              </Link>
            </div>

            {/* Navigation */}
            <div
              className="flex flex-col px-8 pb-8"
              style={{ padding: "20px" }}
            >
              <nav>
                <ul
                  className="space-y-6"
                  style={{ marginBottom: "20px" }}
                >
                                  {navigation.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-[24px] font-semibold text-[#FFE9A8] backdrop-blur-xl transition-all duration-300 hover:border-[#F4C46A]/40 hover:bg-white/20 hover:text-[#F4C46A]"
                      style={{
                        padding: "5px 20px",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        className="font-semibold text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient-x"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #FFF8D5, #F4C46A, #FFE9A8, #FFF8D5)",
                        }}
                      >
                        {item.title}
                      </span>

                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.3,
                          ease: "easeInOut",
                        }}
                        className="text-xl text-[#F4C46A]"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-14"
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-[#F4C46A]/60 bg-white/10 p-6 backdrop-blur-2xl shadow-[0_15px_50px_rgba(244,196,106,0.15)]"
                style={{ padding: "10px" }}
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#F4C46A]/20 blur-3xl" />

                <div className="relative z-10">

                  <span
                    className="inline-flex rounded-full border border-[#F4C46A]/40 bg-[#F4C46A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#F4C46A]"
                    style={{ padding: "5px" }}
                  >
                    24/7 Emergency Service
                  </span>

                  <h3
                    className="mt-4 bg-gradient-to-r from-[#FFF8D5] via-[#F4C46A] to-[#D89C2B] bg-clip-text text-2xl font-bold text-transparent"
                    style={{
                      marginBottom: "5px",
                      color: "#edf6ff75",
                    }}
                  >
                    Need Emergency Plumbing?
                  </h3>

                  <p
                    className="mt-3 text-[15px] leading-7 text-white/80"
                    style={{ marginBottom: "5px" }}
                  >
                    Available 24/7 for plumbing, heating and emergency
                    repair services across Canada.
                  </p>

                  <Link
                    href="/quote"
                    onClick={onClose}
                    className="group mt-6 flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#F4C46A] to-[#FFE29A] px-6 py-4 font-semibold text-[#081F38] shadow-[0_10px_30px_rgba(244,196,106,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(244,196,106,.45)]"
                    style={{ padding: "5px" }}
                  >
                    Book Free Estimate

                    <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </Link>

                </div>
              </div>
            </motion.div>
                        </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}