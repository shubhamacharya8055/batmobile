"use client"
import { PARTNERS } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Partners() {

  const containerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  let scrollSpeed = 10;

  useEffect(() => {
    let scrollInterval;

    function startAutoScroll() {
      scrollInterval = setInterval(() => {
        if (containerRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            containerRef.current;

            const progress = scrollLeft / (scrollWidth - clientWidth);
          setActiveDot(progress >= 0.5 ? 1 : 0);

          // Check for scroll direction change
          if (
            scrollLeft + clientWidth >= scrollWidth ||
            scrollLeft === 0 // Added check for reaching the beginning
          ) {
            scrollSpeed *= -1; // Reverse scroll direction
          }

          containerRef.current.scrollTo({
            left: scrollLeft + scrollSpeed,
            behavior: "smooth",
          });
        }
      }, 50);
    }

    startAutoScroll();
    return () => clearInterval(scrollInterval);
  }, []);

  const handleDotClick = (index) => {
    setActiveDot(index);
    if (containerRef.current) {
      const animateScroll = () => {
        if (!containerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const targetLeft = index === 0 ? 0 : scrollWidth - clientWidth;
        const newLeft = index === 0 ? scrollLeft - scrollSpeed : scrollLeft + scrollSpeed;

        if ((index === 0 && newLeft > 0) || (index === 1 && newLeft < targetLeft)) {
          containerRef.current.scrollTo({ left: newLeft, behavior: "auto" });
          requestAnimationFrame(animateScroll); // Continue animation
        }
      };

      requestAnimationFrame(animateScroll); // Start animation
    }
  };

  
  return (
    <div className="min-w-full xl:min-h-52 min-h-32 relative">
        <div
         ref={containerRef}
        className="h-full mx-auto xl:w-[80%] flex gap-x-5 items-center xl:my-16 my-8 px-5 overflow-x-scroll scroll-smooth no-scrollbar   ">
                {PARTNERS.map((partner, index) => (
                <div className="relative xl:min-w-[150px] min-w-[120px]" 
                key={`${partner}-${index}`}
                
                >
                        <Image 
                        src={partner}
                        width={150}
                        height={150}
                        className="object-cover"
                        />
                </div>
            ))}
        </div>
        <div className="absolute xl:bottom-20 bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1].map((dot) => (
          <div
            key={dot}
            onClick={() => handleDotClick(dot)}
            className={`w-3 h-3 border border-black cursor-pointer rounded-full ${activeDot === dot ? 'bg-gray-500' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  )
}
