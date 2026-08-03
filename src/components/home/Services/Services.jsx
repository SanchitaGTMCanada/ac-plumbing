"use client";

import Container from "@/components/ui/Container/Container";
import ServicesContent from "./ServicesContent";
import InfiniteMarquee from "./InfiniteMarquee";
import services from "./servicesData";

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-36">

      {/* Background */}

      <div className="absolute -left-52 top-20 h-[520px] w-[520px] rounded-full bg-[#123B67]/5 blur-[170px]" />

      <div className="absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-[#C89B3C]/10 blur-[170px]" />


<div className="relative z-20 flex justify-center "  >
    <Container>

        <ServicesContent />

        <div className="relative mt-20">

          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#F7F9FC] to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#F7F9FC] to-transparent" />

          <InfiniteMarquee services={services}  />

        </div>

      </Container>
</div>
    

    </section>
  );
}