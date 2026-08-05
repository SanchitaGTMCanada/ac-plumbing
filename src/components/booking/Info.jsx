"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiCheckCircle,
  HiPhone,
  HiShieldCheck,
  HiClock,
  HiStar,
} from "react-icons/hi2";

const features = [
  "Licensed & Certified Technicians",
  "24/7 Emergency Support",
  "Same Day Service Available",
  "Transparent & Affordable Pricing",
  "100% Customer Satisfaction",
];

export default function Info() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col justify-center"
    >
      {/* Badge */}
      <span
        className="inline-flex w-fit items-center rounded-full border border-[#F4C46A]/30 bg-[#F4C46A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#C89B3C]"
        style={{ padding: "8px 16px" }}
      >
        Book Your Service
      </span>

      {/* Heading */}
      <h2
        className="mt-6 text-4xl font-black leading-tight text-[#123B67] lg:text-5xl"
        style={{ marginTop: "20px" }}
      >
        Need Plumbing,
        <br />
        Heating or HVAC
        <span className="text-[#C89B3C]"> Service?</span>
      </h2>

      {/* Description */}
      <p
        className="mt-6 max-w-xl text-[17px] leading-8 text-[#667085]"
        style={{ marginTop: "20px" }}
      >
        Book your appointment in less than a minute. Our experienced
        technicians are available for residential and commercial plumbing,
        heating, and HVAC services across Canada.
      </p>

      {/* Features */}
      <div className="mt-10 space-y-5" style={{ marginTop: "30px" }}>
        {features.map((item) => (
          <div key={item} className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123B67] text-white">
              <HiCheckCircle size={22} />
            </div>

            <span className="text-[16px] font-medium text-[#123B67]">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Cards */}
      <div
        className="mt-12 grid gap-5 sm:grid-cols-2"
        style={{ marginTop: "40px" }}
      >
        {/* Call Card */}
        <div
          className="rounded-3xl border border-[#F4C46A]/20 bg-white p-6 shadow-lg"
          style={{ padding: "20px" }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#123B67] text-white">
            <HiPhone size={24} />
          </div>

          <p className="text-sm text-[#667085]">Call Anytime</p>

          <h4 className="mt-2 text-xl font-bold text-[#123B67]">
            867-447-1500
          </h4>
        </div>

        {/* Rating Card */}
        <div
          className="rounded-3xl border border-[#F4C46A]/20 bg-gradient-to-br from-[#123B67] to-[#0E2D50] p-6 text-white shadow-lg"
          style={{ padding: "20px" }}
        >
          <div className="mb-3 flex gap-1 text-[#F4C46A]">
            <HiStar size={20} />
            <HiStar size={20} />
            <HiStar size={20} />
            <HiStar size={20} />
            <HiStar size={20} />
          </div>

          <h4 className="text-lg font-bold">
            Trusted by Homeowners
          </h4>

          <p className="mt-2 text-sm text-white/70">
            Fast response, quality workmanship and guaranteed satisfaction.
          </p>
        </div>
      </div>

      {/* Technician Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative mt-12 overflow-hidden rounded-[30px]"
        style={{ marginTop: "40px" }}
      >
        <Image
          src="/assets/booking/technician.jpg"
          alt="Professional Plumbing Technician"
          width={700}
          height={500}
          className="h-[300px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#123B67]/70 to-transparent" />

        <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <HiShieldCheck className="text-[#123B67]" size={24} />

            <div>
              <p className="text-sm font-semibold text-[#123B67]">
                Licensed Professionals
              </p>

              <span className="text-xs text-[#667085]">
                Serving Residential & Commercial Clients
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}