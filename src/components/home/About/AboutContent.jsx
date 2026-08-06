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
    desc: "Certified plumbing experts delivering reliable workmanship with industry-leading standards.",
  },
  {
    icon: FaBolt,
    title: "24/7 Emergency Service",
    desc: "Fast emergency response whenever urgent plumbing or heating issues arise.",
  },
  {
    icon: FaHome,
    title: "Residential & Commercial",
    desc: "Complete plumbing and heating solutions tailored for homes and businesses.",
  },
  {
    icon: FaHandshake,
    title: "Transparent Pricing",
    desc: "Honest quotations with no hidden charges, backed by quality service.",
  },
];

export default function AboutContent() {
  return (
    <div className="max-w-[620px]" style={{marginTop:"60px", marginBottom:"60px" , marginLeft:"7px"}}>

      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#C89B3C]/30
          bg-[#C89B3C]/10
          px-5
          py-2
          text-[13px]
          font-medium
          uppercase
          tracking-[0.22em]
          text-[#C89B3C]
        "
        style={{padding:"5px"}}
      >
        About Us
      </span>

      {/* Heading */}

      <h2
        className="
          mt-7
          font-[800]
          text-[42px]
          leading-[1.12]
          tracking-[-0.03em]
          text-[#123B67]
          lg:text-[58px]
        "
        style={{marginTop:"10px", marginBottom:"10px", }}
      >
        Professional
        <br />

        <span className="text-[#C89B3C]">
          Plumbing & Heating
        </span>

        <br />

        Solutions You Can Trust
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          text-[17px]
          leading-8
          tracking-[0.01em]
          text-[#667085]
        "

          style={{marginTop:"20px", marginBottom:"20px", }}
      >
        Round-the-clock professional Heating, and Plumbing solutions, delivered by skilled technicians.Our motto is to deliver reliable, reasonable, and professional services for your home and commercial spaces. Backed by years of exposure and a team of certified professionals, we are dedicated to keeping your space comfortable – no matter the season or the time of day
      </p>

      {/* Feature Cards */}

      <div className="mt-12 grid gap-6 sm:grid-cols-2">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C89B3C]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              "
              style={{marginTop:"10px", marginBottom:"10px", padding:"15px"}}
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-full scale-x-0 bg-[#C89B3C] transition-transform duration-500 group-hover:scale-x-100" />

              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#123B67]
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-[#C89B3C]
                  group-hover:rotate-6
                "
              >
                <Icon size={22} />
              </div>

              {/* Title */}

              <h3
                className="
                  mt-5
                  text-[20px]
                  font-semibold
                  tracking-[-0.02em]
                  text-[#123B67]
                "
                style={{marginBottom:"9px", marginTop:"9px"}}
              >
                {item.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-3
                  text-[15px]
                  leading-7
                  text-[#667085]
                "
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}

      <div className="mt-14 flex flex-wrap items-center gap-8">

        <Button href="#booking">
          Get Free Estimate
        </Button>

        <div>
        {/* <h3 className="text-[42px] font-extrabold text-[#123B67]">
  10+
</h3>

<p className="mt-2 text-sm text-gray-600">
  Plumbing & Heating Services
</p> */}

          {/* <p
            className="
              mt-1
              text-[13px]
              uppercase
              tracking-[0.22em]
              text-[#667085]
            "
          >
            Years Experience
          </p> */}
        </div>

      </div>

    </div>
  );
}