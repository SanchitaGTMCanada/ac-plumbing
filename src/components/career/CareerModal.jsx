"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import CareerForm from "./CareerForm";

export default function CareerModal({
  open,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
          />

          {/* Wrapper */}

          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            <div
              className="flex min-h-full items-center justify-center"
              style={{
                padding: "40px 20px",
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: 20,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[760px] rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,.18)] hide-scrollbar"
                style={{
                  padding: "45px",
                  maxHeight: "90vh",
                  overflowY: "auto",
                }}
              >
                {/* Close */}

                <button
                  onClick={onClose}
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F8FC] transition hover:bg-[#123B67] hover:text-white"
                >
                  <IoClose size={22} />
                </button>

                {/* Badge */}

                <span
                  className="inline-flex rounded-full bg-[#FFF4D8] text-[#C89B3C]"
                  style={{
                    padding: "8px 18px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Careers
                </span>

                {/* Heading */}

                <h2
                  style={{
                    marginTop: "20px",
                    fontSize: "40px",
                    fontWeight: "700",
                    color: "#123B67",
                    lineHeight: "1.2",
                  }}
                >
                  Join Our Team
                </h2>

                {/* Description */}

                <p
                  style={{
                    marginTop: "14px",
                    marginBottom: "35px",
                    color: "#667085",
                    lineHeight: "28px",
                    maxWidth: "560px",
                  }}
                >
                  Interested in joining AC Plumbing & Heating? Fill out the
                  application form below and our hiring team will contact you.
                </p>

                {/* Form */}

                <CareerForm onSuccess={onClose} />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}