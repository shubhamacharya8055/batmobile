"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

import Image from "next/image";
import { useRef } from "react";

export default function Rise() {
    const divRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);



    useGSAP(() => {
        gsap.from([imageRef.current,paragraphRef.current] , {
            opacity: 0 , 
            duration: 0.7,
            y: 300 , 
            scrollTrigger: {
                trigger: divRef.current , 
                start: "0% 70%" , 
                end: "20% 40%",
                scrub: true , 
                toggleActions: "restart none none reverse" ,        
            }
        })

        gsap.from(textRef.current , {
            opacity: 0 , 
            duration: 0.7,
            x: 300 , 
            scrollTrigger: {
                trigger: divRef.current , 
                start: "0% 70%" , 
                end: "20% 40%",
                scrub: true , 
                toggleActions: "restart none none reverse" ,  
            }
        })

        gsap.from(buttonRef.current , {
            opacity: 0 , 
            duration: 0.7,
            x: 300 , 
            scrollTrigger: {
                trigger: divRef.current , 
                start: "30%% 70%" , 
                end: "50% 40%",
                scrub: true , 
                toggleActions: "restart none none reverse" ,  
            }
        })
    } , [])


   

  return (
    <div className="min-w-full min-h-fit my-20 ">
            <div className="pt-10 pb-20 min-w-full xl:px-10 px-5 flex xl:flex-row flex-col xl:gap-x-24 gap-y-10 xl:gap-y-0" ref={divRef}>

                <div className="xl:w-2/5 w-full xl:min-h-[400px] cursor-pointer" ref={imageRef} >
                <div className="relative aspect-video min-h-[300px] xl:h-full w-full  group overflow-hidden">
                    <Image 
                    src={"/vc.jpg"}
                    fill
                    alt="Vc"
                    className="object-cover group-hover:scale-110 transition-all duration-500 "
                    />
                </div>
                </div>


                {/* <div className="w-[]"> */}
                <div className="flex flex-col xl:gap-y-0 gap-y-8 items-start justify-evenly cursor-pointer xl:w-1/2 w-fit" 
                >
                <h1 className="font-semibold text-darkBlue w-fit text-5xl tracking-tight leading-10" 
                ref={textRef}
                >
                    Rise
                </h1>
                <p className="text-darkBlue w-fit xl:w-5/6 first-letter:text-xl" ref={paragraphRef}>
               <span className="font-semibold"> Batmobile </span> is a global technology leader, trusted by businesses of all sizes to build a strong foundation for growth. We offer a comprehensive suite of business solutions and integrations, designed to streamline operations, enhance efficiency, and drive innovation.We have a deep understanding of diverse industries and the challenges they face. 
                </p>
                <button ref={buttonRef} className="text-sm w-fit font-medium hover:text-darkBlue text-teal mt-10" >
                LEARN MORE
                </button>
                </div>
                {/* </div> */}

                
            </div>
    </div>
  )
}
