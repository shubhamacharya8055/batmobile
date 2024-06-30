"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function CareerHeading() {

  const headingRef = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current , {
      x: 200 , 
      opacity: 0 , 
      duration: 0.7 ,
    }
  )
  } , [])


  return (
    <div className="w-fit xl:mt-24 mt-20 flex flex-col gap-y-14">
      <h1 className="text-7xl leading-[90px] text-darkBlue font-semibold tracking-tight" ref={headingRef}>
        Shape the{" "}
        <span className="bg-teal text-white px-5 tracking-tight">
          {" "}
          Future{" "}
        </span>{" "}
        <p> Apply Today </p>
      </h1>

      <div className="flex flex-col gap-y-2">
        <p className="xl:text-sm text-base tracking-tight text-teal hover:text-darkBlue hover:underline underline-offset-4 cursor-pointer"
        onClick={() => {
          const element = document.getElementById("JobSearch");
          if(element) {
            element.scrollIntoView({behavior: "smooth"})
          }
        }}
        >
          Find your dream Job
        </p>
        <ArrowRight className="w-4 h-4 text-darkBlue" />
      </div>
    </div>
  );
}
