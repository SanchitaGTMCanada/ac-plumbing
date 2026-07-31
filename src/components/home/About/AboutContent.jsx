"use client";

import { HiCheck } from "react-icons/hi";
import Button from "@/components/ui/Button/Button";

const list = [
  "Licensed & Insured",
  "Residential & Commercial",
  "24/7 Emergency Repairs",
  "Transparent Pricing",
];

export default function AboutContent() {
  return (
    <div>

      <span
        className="
          inline-flex
          rounded-full
          border
          border-[#C89B3C]
          px-5
          py-2
          text-sm
          font-semibold
          text-[#C89B3C]
        "
      >
        ABOUT AC PLUMBING
      </span>

      <h2
        className="
          mt-7
          text-[58px]
          leading-[1.05]
          font-black
          text-[#12233D]
        "
      >
        Trusted Plumbing &
        Heating Experts
        Built Around Quality.
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600">

        We deliver dependable plumbing and heating
        solutions with licensed professionals,
        honest pricing and unmatched customer service.

      </p>

      <div className="mt-10 space-y-5">

        {list.map((item)=>(

          <div
            key={item}
            className="
              flex
              items-center
              gap-4
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#123B67]
                text-white
              "
            >
              <HiCheck size={18}/>
            </div>

            <span className="text-lg font-medium text-[#12233D]">
              {item}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-12">

        <Button href="/about">

          Explore Company

        </Button>

      </div>

    </div>
  );
}