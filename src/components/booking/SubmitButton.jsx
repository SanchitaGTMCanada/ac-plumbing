"use client";

import { HiArrowRight } from "react-icons/hi2";

export default function SubmitButton({
  loading = false,
  children = "Request Free Estimate",
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group relative w-full overflow-hidden rounded-[18px] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
      style={{
        height: "64px",
        background:
          "linear-gradient(90deg,#FFE9A8 0%,#F4C46A 50%,#C89B3C 100%)",
        color: "#123B67",
        fontWeight: "700",
        fontSize: "17px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 15px 35px rgba(200,155,60,.30)",
      }}
    >
      {/* Shine Effect */}

      <span
        className="absolute inset-0 overflow-hidden rounded-[18px]"
      >
        <span
          className="absolute top-0 left-[-150%] h-full w-[45%] -skew-x-[25deg] bg-white/40 transition-all duration-700 group-hover:left-[150%]"
        />
      </span>

      {/* Content */}

      <span
        className="relative z-10 flex items-center justify-center gap-3"
      >
        {loading ? "Submitting..." : children}

        {!loading && (
          <HiArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </button>
  );
}