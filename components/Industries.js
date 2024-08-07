"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { INDUSTRIES } from "@/lib/constants";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Industries({title , description}) {

    const [activeIndex, setActiveIndex] = useState(0)
    const [progressWidth, setProgressWidth] = useState(0); 
    const scrollRef = useRef(null);
    const industryRef = useRef(null);
    const paragraphRef = useRef(null);

    useGSAP(() => {
        gsap.from([paragraphRef.current, industryRef.current ] , {
            opacity: 0 , 
            y: 200 , 
            duration: 0.6 , 
            stagger: 0.3 , 
            scrollTrigger: {
                trigger: [paragraphRef.current, industryRef.current ] , 
                start: "-200% 70%",
                end: "-90% 50%",
                toggleActions: "restart none none restart"
            }
        })
    } , [])

    const handleEnter = (index) => {
        setActiveIndex(index)
    }

    const handleLeave = () => {
        setActiveIndex(0)
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
        scrollToItem(); 
      };
    
      const handlePrevious = () => {
        setActiveIndex((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
        scrollToItem(); 
      };

      useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
          scrollToItem();
        }, 3000); 
    
        return () => clearInterval(interval); 
      }, [activeIndex]); 

      useEffect(() => {
        // Update progress bar width based on activeIndex
        const newProgressWidth = ((activeIndex + 1) / INDUSTRIES.length) * 100; 
        setProgressWidth(newProgressWidth);
      }, [activeIndex]);
    
      const scrollToItem = () => {
        if (scrollRef.current) {
          const itemWidth = scrollRef.current.scrollWidth / INDUSTRIES.length;
          scrollRef.current.scrollTo({
            left: activeIndex * itemWidth,
            behavior: "smooth",
          });
        }
      };

      
  return (
    <div
    className="relative min-w-full min-h-full"
    id="industries"
    >
        <div className="xl:px-20 xl:py-32 px-5 py-20 flex gap-y-5 flex-col xl:flex-row justify-between w-full">
            <h1 className="flex-1 xl:text-6xl text-3xl text-darkBlue font-medium" ref={paragraphRef} >{title}</h1>
            <p className="flex-1 xl:text-lg text-sm leading-6 xl:basis-60 text-darkBlue h-40 xl:ml-40 " ref={industryRef}>
          {description}
            </p>
            <div className="flex-1 xl:flex justify-end items-start gap-x-3 hidden  ">
                <button
                className="p-5 rounded-full border border-zinc-800 hover:scale-75 transition-all "
                onClick = {handlePrevious}
                >
                    <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                className="p-5 rounded-full border border-zinc-800 hover:scale-75 transition-all"
                onClick = {handleNext}
                >
                    <ChevronRight className="h-8 w-8 " />
                </button>
            </div>
        </div>

        <div className={`flex h-full w-full overflow-x-scroll no-scrollbar group`} ref={scrollRef}>

        {
            INDUSTRIES.map((item, index) => (
                <div className={`min-h-fit border border-gray-300 xl:min-w-[30%] min-w-[50%] overflow-hidden cursor-pointer transition-all duration-500 ${activeIndex === index ? "group-hover:min-w-[33%]" : ""}`} key={item.label}
                onMouseEnter={() => handleEnter(index)}
                onMouseLeave={handleLeave}
                >
                  <Link href={`${item.link}`} className="w-full h-full">
                <div className="h-[200px] xl:h-1/2 flex items-center justify-center gap-y-3 flex-col">
                    <div className="relative ">
                        <Image 
                        src={item.icon}
                        width={40}
                        height={40}
                        alt="Industries-icon"
                        className="text-black object-cover"
                        />
                    </div>
                    <p className="px-5 xl:text-2xl text-center text-sm text-darkBlue">{item.label}</p>
                </div>
                <div className="relative xl:aspect-square aspect-video">
                    <Image 
                    src={item.image}
                    fill
                    alt="Industries Images"
                    className={`object-cover grayscale ${activeIndex === index ? "group-hover:grayscale-0" : ""}`}
                    />
                </div>
                </Link>

            </div> 
            ))
        }
        </div>

        <div className="xl:px-20 xl:py-20 px-10 py-5 ">
            <div className="h-1 w-full border border-gray-600 bg-gray-400 relative overflow-hidden" >
            <div className={`absolute inset-x-0 bg-red-500 transition-all duration-500 h-2`} 
            style={{width: `${progressWidth}%` }}
            />
            </div>
        </div>
    </div>
  )
}
