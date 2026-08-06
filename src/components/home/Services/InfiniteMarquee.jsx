"use client";

import { useRef } from "react";
import ServiceCard from "./ServiceCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import {
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

import "swiper/css";
import "swiper/css/navigation";

export default function InfiniteMarquee({ services }) {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full" style={{background:"transparent"}}>

      {/* Left Arrow */}

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="
          hidden
          lg:flex
          absolute
          left-2
          top-1/2
          z-20
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#123B67]
          shadow-[0_10px_30px_rgba(0,0,0,.15)]
          transition-all
          duration-300
          hover:bg-[#F4C46A]
          hover:text-[#123B67]
          hover:scale-105
        "
      >
        <HiChevronLeft size={24} />
      </button>

      {/* Right Arrow */}

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="
          hidden
          lg:flex
          absolute
          right-2
          top-1/2
          z-20
          h-12
          w-12
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#123B67]
          shadow-[0_10px_30px_rgba(0,0,0,.15)]
          transition-all
          duration-300
          hover:bg-[#F4C46A]
          hover:text-[#123B67]
          hover:scale-105
        "
      >
        <HiChevronRight size={24} />
      </button>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={700}
        grabCursor
        loop={false}
        spaceBetween={20}
        slidesPerView={1}
        className="px-4 sm:px-6 lg:px-14 pb-16"
         style={{padding:"10px"}}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
                {services.map((service, index) => (
       <SwiperSlide
  key={index}
  className="!flex justify-center"
>
  <div
    className="
      w-full
      max-w-[300px]
      sm:max-w-[330px]
      md:max-w-[360px]
      xl:max-w-[390px]
    "
  >
    <ServiceCard
      service={service}
      index={index}
    />
  </div>
</SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Hint */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-center
          gap-2
          text-sm
          text-[#667085]
          lg:hidden
        "
      >
        <HiChevronLeft className="text-[#123B67]" />
        <span>Swipe to explore services</span>
        <HiChevronRight className="text-[#123B67]" />
      </div>

    </div>
  );
}