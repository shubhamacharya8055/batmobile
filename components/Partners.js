"use client";
import { PARTNERS } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Partners() {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(1); 

  useEffect(() => {
    let scrollInterval;

    function startAutoScroll() {
      scrollInterval = setInterval(() => {
        if (containerRef.current && isScrolling) {
          const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
          const scrollAmount = 10 * scrollDirection;

          const atEnd = scrollLeft + clientWidth >= scrollWidth && scrollDirection === 1;
          const atStart = scrollLeft === 0 && scrollDirection === -1;

          if (atEnd || atStart) {
            setScrollDirection(scrollDirection * -1); 
          } else {
            containerRef.current.scrollTo({
              left: scrollLeft + scrollAmount,
              behavior: "smooth",
            });
          }
        }
      }, 50); 
    }

    startAutoScroll();
    return () => clearInterval(scrollInterval);
  }, [isScrolling, scrollDirection]); 

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <div 
      className="min-w-full xl:min-h-fit min-h-fit relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={containerRef}
        className="h-fit mx-auto xl:w-[80%] flex gap-x-5 items-center xl:my-10 my-8 px-5 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {PARTNERS.map((partner, index) => (
          <div 
            className="relative xl:min-w-[150px] min-w-[120px]" 
            key={`${partner}-${index}`}
          >
            <Image
              src={partner}
              width={150}
              height={150}
              className="object-cover"
              alt={`Partner Logo ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
