"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import FullPageNav from "./FullPageNav";
import gsap from "gsap";
import IndustriesDetails from "./onHoverComponents/IndustriesDetails";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname, useRouter } from "next/navigation";
import CapabilitiesDetails from "./onHoverComponents/CapabilitiesDetails";

gsap.registerPlugin(ScrollToPlugin);


export default function Navbar() {

  const industriesRef = useRef(null)
  const capabilitiesRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const [showIndustriesComponent, setShowIndustriesComponent] = useState(false)
  const [showCapabilities, setShowCapabilities] = useState(false)
  const router = useRouter()
  const pathName = usePathname();  
  let scrollTimeout; 

  return (
    <nav className="sticky z-[100] text-darkBlue inset-x-0 top-0 w-full backdrop-blur-lg transition-all px-10 h-20 py bg-white min-w-full shadow-sm
    ">
        <div className="h-full w-full flex justify-between items-center">
            <Link href={"/"} className="relative">
            <Image 
            src = "/bat.png"
            className="object-cover"
            width={95}
            priority
            alt="BatMobile Logo"
            height={95}
            />
            </Link>

            <ul className="items-center gap-x-14 hidden xl:flex">
                {NAV_LINKS.map((nav) => (
                    <li key={nav.label} className="relative group">
                        <Link href={nav.href} className="font-semibold text-sm relative z-10"
                        onClick={(e) => {
                            const aHref = e.target.href.split("/").pop();
                            const careerHref = "careers"
                            console.log(aHref)

                            if(aHref === "#about") {
                                e.preventDefault()
                                router.push("/about-us")
                                return
                            }

                            if(pathName === "/careers" && aHref !== "#about" ) {
                                e.preventDefault();
                                router.push("/");
                                
                               scrollTimeout = setTimeout(() => {
                                    const targetId = nav.href.split('#')[1];
                                    const element = document.getElementById(targetId);
                  
                                    if (element) {
                                      gsap.to(window, {
                                        scrollTo: { y: element, offsetY: 0 },
                                        duration: 0.8,
                                        ease: "power2.inOut",
                                      });
                                    }
                                  }, 500); 
                                  return
                            }

                            if (scrollTimeout) {
                                clearTimeout(scrollTimeout);
                              }

                            if(aHref === careerHref){
                                 return 
                            }
                            e.preventDefault()
                            const targetId = nav.href.split('#')[1]; 
                            const element = document.getElementById(targetId);
                            if (element) {
                                gsap.to(window, {
                                    scrollTo: { y: element, offsetY: 0 },
                                    duration: 0.8, 
                                    ease: "power2.inOut",
                                  }); 
                            }
                        }}
                        onMouseEnter={(e) => {
                            const targetId = e.target.href.split("/").pop().split("#").pop()
                            if(targetId === "industries") {
                                gsap.from(industriesRef.current , {
                                    y:300 , 
                                    opacity: 0 , 
                                    duration: 0.7 ,
                                    onComplete: () => {
                                        setShowIndustriesComponent(true)
                                        setShowCapabilities(false)
                                    }   
                                })
                            }   
                            if(targetId === "capabilities") {
                                gsap.from(capabilitiesRef.current , {
                                    y:300 , 
                                    opacity: 0 , 
                                    duration: 0.7 ,
                                    onComplete: () => {
                                        setShowCapabilities(true)
                                        setShowIndustriesComponent(false)
                                    }   
                                })
                            }            
                        }}
                        >
                        {nav.label}
                        </Link>
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-800 scale-x-0 group-hover:scale-x-90 origin-left transition-transform duration-300 delay-100"></div>
                    </li>
                ))}
            </ul>
            <div className="flex gap-x-3 items-center">
            <Search className="h-7 w-7 xl:h-5 xl:w-5 xl:mr-7 hover:scale-125 transition-transform duration-150 delay-100"/>
            <button 
            onClick={() => setIsOpen(prev => !prev)}
            >
                {isOpen ? (
            <X className="h-8 w-8 xl:hidden block hover:scale-125 transition-transform duration-150 delay-100" />
                ) : (
            <Menu className="h-8 w-8 xl:hidden block hover:scale-125 transition-transform duration-150 delay-100" />
                )}

            </button>
            
            </div>
        </div>
        {isOpen ? <FullPageNav isOpen = {isOpen} setIsOpen = {setIsOpen} /> : null}
        {showIndustriesComponent && (
            <div
            ref={industriesRef}
            className="bg-white min-w-screen h-screen z-[999999] absolute top-[80px] no-scrollbar pb-24 inset-0 overflow-y-scroll"
            onMouseLeave={() => {
                gsap.to(industriesRef.current , {
                    y: 300 , 
                    opacity: 0 , 
                    duration: 0.8, 
                    onComplete: () => {
                        setShowIndustriesComponent(false)
                    }
                })
            }}
            >
                <IndustriesDetails setShowIndustriesComponent = {setShowIndustriesComponent} />
            </div>
        )}

{showCapabilities && (
            <div
            ref={capabilitiesRef}
            className="bg-white min-w-screen h-screen z-[999999] absolute top-[80px] no-scrollbar pb-24 inset-0 overflow-y-scroll"
            onMouseLeave={() => {
                gsap.to(capabilitiesRef.current , {
                    y: 300 , 
                    opacity: 0 , 
                    duration: 0.8, 
                    onComplete: () => {
                        setShowCapabilities(false)
                    }
                })
            }}
            >
                <CapabilitiesDetails setShowCapabilities = {setShowCapabilities} />
            </div>
        )}
    </nav>
  )
}
