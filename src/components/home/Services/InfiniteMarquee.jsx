"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard.jsx";

export default function InfiniteMarquee({ services }) {
  const trackRef = useRef(null);
  const position = useRef(0);
  const animationRef = useRef(null);

  const [paused, setPaused] = useState(false);

  // Duplicate enough items for all screen sizes
  const items = [
    ...services,
    ...services,
    ...services,
  ];


  useEffect(() => {
    const speed = 0.45;

    const animate = () => {

      if (!trackRef.current) return;


      if (!paused) {

        position.current -= speed;


        const firstSetWidth =
          trackRef.current.scrollWidth / 3;


        // seamless reset
        if (Math.abs(position.current) >= firstSetWidth) {
          position.current = 0;
        }


        trackRef.current.style.transform =
          `translate3d(${position.current}px,0,0)`;
      }


      animationRef.current =
        requestAnimationFrame(animate);

    };


    animationRef.current =
      requestAnimationFrame(animate);


    return () => {
      cancelAnimationFrame(animationRef.current);
    };

  }, [paused]);


  return (

    <div
      className="
        overflow-hidden
        w-full
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}

    
    >

      <div
        ref={trackRef}
        className="
          flex
          w-max
          gap-8
          will-change-transform
        "

          style={{marginBottom:"70px"}}
      >

        {items.map((service,index)=>(

          <div
            key={index}
            className="
              w-[300px]
              shrink-0

              sm:w-[330px]
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