"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Image from "next/image";

import { useRef } from "react"


gsap.registerPlugin(ScrollTrigger)
export default function Scale() {

    const ScaleRef = useRef(null);
    const BatRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const blackBoxRef = useRef(null)
    const redRef = useRef(null)
    const landRef = useRef(null)


    useGSAP(() => {
        gsap.from(ScaleRef.current , {
            x: -100 , 
            opacity: 0 , 
            duration: 0.5,
            scrollTrigger: {
                trigger: ScaleRef.current , 
                start: "10px 70%",
                end: "30px 50%",
                toggleActions: "restart none none reverse"
            }
        })

        gsap.from(BatRef.current, {
            opacity: 0 , 
            x: -100 , 
            duration: 0.2,
            scrollTrigger: {
                trigger: BatRef.current , 
                start: "15px 70%",
                end: "22px 50%",
                toggleActions: "restart none none reverse"
            }
        })

        gsap.from(descriptionRef.current, {
            opacity: 0 , 
            y: 100 , 
            duration: 0.2,
            scrollTrigger: {
                trigger: descriptionRef.current,
                start: "60% 70%",
                end: "65% 50%",
                toggleActions: "restart none none reverse"
            }
        })

        gsap.from(imageRef.current , {
            x: -200 , 
            duration: 0.6,
            scrollTrigger: {
                trigger: imageRef.current,
                start: "10% 70%",
                end: "30% 30%",
                scrub: true,
                toggleActions: "restart none none reverse"
            }
        })

        gsap.from(blackBoxRef.current , {
            y: 300 , 
            opacity: 0 , 
            duration: 0.5 , 
            scrollTrigger: {
                trigger: blackBoxRef.current , 
                start: "-80% 70%",
                end: "-50% 50%",
                scrub: true,
                toggleActions: "restart none none reverse",
                
            }
        })

        gsap.from(redRef.current , {
            x: -1200,
            duration: 3 , 
            opacity: 1 , 
            scrollTrigger: {
                trigger: landRef.current , 
                toggleActions: "restart none none reverse",
                start: "20% 10%" , 
                end: "90% 50%",
                scrub: true
            }
        })

    } , [])

  return (
    <div className="min-w-full min-h-[1050px] overflow-hidden relative" ref={landRef}>
            <div className="xl:py-32 xl:px-24 px-8 py-10 h-full w-full grid grid-cols-2 relative">
                <div className="flex flex-col xl:gap-y-10 gap-y-6 w-full col-span-2 xl:col-span-1">

                <div className="flex flex-col gap-y-3 w-full" >
                    <h1 className="xl:text-7xl text-4xl text-darkBlue flex-1 font-bold xl:font-semibold" ref={ScaleRef}>Transform Your Business</h1>
                    <div ref={BatRef} className="flex gap-x-2 flex-row xl:flex-col">
                    <h2 className="xl:text-7xl text-3xl text-teal font-semibold" >with Bat</h2>
                    <h3 className="xl:text-7xl text-3xl text-teal/70 font-semibold" >Mobile</h3>
                    </div>
                </div>

                <p className="flex-1 text-xs xl:text-base text-darkBlue leading-5" ref={descriptionRef}>
                Thriving in the current dynamic landscape demands technological solutions that enable both transformative scale and unparalleled speed.
                </p>

                </div>

                <div className="bg-darkBlue absolute z-[999999] xl:top-[75%] xl:right-16 xl:h-[500px] xl:w-[500px] h-[400px] w-[350px] top-[130%] left-[50%] transform max-sm:-translate-x-[50%] flex items-center"
                ref={blackBoxRef}
                >
                    <div className="w-1/2 text-white  mx-auto flex flex-col items-start gap-y-10">
                        <p className="text-base font-semibold "> Power Your Future</p>
                        <h2 className="xl:text-3xl text-2xl font-medium leading-10">True Scalability, <br/>
                        Agility, and <br />
                        Responsiveness
                        </h2>
                        <button
                        className="xl:px-8 xl:py-5 px-5 py-3 border font-semibold border-gray-100"
                        >
                            KNOW MORE
                        </button>
                    </div>
                </div>
            </div>
    <div
      className="relative h-2 xl:top-[1rem] top-[10rem] left-0 w-full bg-black transform -skew-y-[18deg] mt-32 xl:mt-0"
    >  
    <div className="absolute bg-teal h-2 -top-[8px]  z-50 inset-0" ref={redRef}/>

    <div className="relative min-h-screen aspect-video overflow-hidden">
        <Image 
        src={"/scaleThree.jpg"}
        fill
        alt="road image"
        ref={imageRef}
        className="object-cover absolute object-bottom scale-x-150 -top-44 -left-36 z-10 w-full"
        />
    </div>

    </div>


    </div>
  )
}
