"use client";

import Button from "@/components/ui/Button/Button";
import {
  FaShieldAlt,
  FaBolt,
  FaHome,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Licensed Professionals",
    desc: "Certified plumbing experts delivering reliable workmanship.",
  },
  {
    icon: FaBolt,
    title: "Emergency Service",
    desc: "Fast response whenever urgent repairs are needed.",
  },
  {
    icon: FaHome,
    title: "Residential & Commercial",
    desc: "Complete plumbing and heating solutions for every property.",
  },
  {
    icon: FaHandshake,
    title: "Transparent Pricing",
    desc: "Upfront quotations with absolutely no hidden costs.",
  },
];

export default function AboutContent() {
  return (
    <div>

      <span className="inline-flex rounded-full border border-[#C89B3C] px-5 py-2 text-sm font-semibold tracking-wide text-[#C89B3C]">
        ABOUT AC PLUMBING
      </span>

      <h2 className="mt-6 text-[56px] font-extrabold leading-[1.05] text-[#123B67]">
        Reliable Plumbing
        <br />
        <span className="text-[#C89B3C]">
          Solutions Built
        </span>
        <br />
        Around Trust.
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
        At AC Plumbing & Heating, we combine skilled craftsmanship,
        premium equipment and transparent pricing to provide reliable
        plumbing and heating services for homes and businesses.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123B67] text-white transition-all duration-300 group-hover:bg-[#C89B3C]">
                <Icon size={22} />
              </div>

              <h4 className="mt-5 text-xl font-bold text-[#123B67]">
                {item.title}
              </h4>

              <p className="mt-3 text-[15px] leading-7 text-gray-500">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12">
        <Button href="/about">
          Explore Company
        </Button>
      </div>

    </div>
  );
}