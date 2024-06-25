"use client"
import { PARTNERS } from "@/lib/constants";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Partners() {

    const containerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const activeIndex =
      scrollLeft + clientWidth >= scrollWidth ? 1 : Math.floor((scrollLeft / (scrollWidth - clientWidth)) * 2);
    setActiveDot(activeIndex);

    setActiveDot(activeIndex);
  };

  const handleDotClick = (index) => {
    const container = containerRef.current;
    if (index === 0) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    }
  };


  return (
    <div className="min-w-full xl:min-h-52 min-h-32 relative">
        <div
         ref={containerRef}
         onScroll={handleScroll}
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
