"use client";

import Link from "next/link";
import heroData from "./heroData";
import Button from "@/components/ui/Button/Button";

export default function HeroContent() {
  return (
    <div>

      <span className="inline-flex items-center rounded-full bg-[#F3F6FA] px-5 py-2 text-sm font-semibold text-[var(--primary)]">
        {heroData.badge}
      </span>

      <h1 className="mt-6 text-[64px] font-bold leading-[1.1] text-[var(--heading)]">
        {heroData.title}
      </h1>

      <p className="mt-7 max-w-[620px] text-lg leading-8 text-gray-600">
        {heroData.description}
      </p>

      <div className="mt-10 flex items-center gap-5">
        <Button href={heroData.primaryBtn.link}>
          {heroData.primaryBtn.text}
        </Button>

        <Link
          href={heroData.secondaryBtn.link}
          className="font-semibold text-[var(--heading)] hover:text-[var(--primary)]"
        >
          {heroData.secondaryBtn.text}
        </Link>
      </div>

    </div>
  );
}