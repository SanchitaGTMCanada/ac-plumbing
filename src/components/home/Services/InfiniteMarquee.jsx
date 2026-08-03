"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function InfiniteMarquee({ services }) {
  const trackRef = useRef(null);

  const animationRef = useRef(null);

  const position = useRef(0);

  const [paused, setPaused] = useState(false);

  // Duplicate the services for infinite scrolling

  const items = [...services, ...services];

  useEffect(() => {
    const speed = 0.45; // Increase for faster, decrease for slower

    const animate = () => {
      if (!trackRef.current) return;

      if (!paused) {
        position.current -= speed;

        const halfWidth = trackRef.current.scrollWidth / 2;

        if (Math.abs(position.current) >= halfWidth) {
          position.current = 0;
        }

        trackRef.current.style.transform = `translateX(${position.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [paused]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-8 will-change-transform"
      >
        {items.map((service, index) => (
          <div
            key={index}
            className="
              w-[340px]
              shrink-0
              md:w-[360px]
              xl:w-[390px]
            "
          >
            <ServiceCard
              service={service}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}