"use client"
import Image from "next/image";
import { FOOTER_LINKS_ONE, FOOTER_LINKS_THREE, FOOTER_LINKS_TWO, FOOTER_SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" 
        });
      };

  return (
    <div className="w-full min-h-[500px] xl:h-[500px] bg-black" id="about">
        <div className="px-10 pt-16 divide-y divide-gray-200 h-full flex flex-col justify-between">

            <div className="w-full flex xl:flex-row flex-col gap-y-8 justify-between">

                <div className="relative xl:w-1/4 w-1/5  cursor-pointer"
                onClick={scrollToTop}
                >
                    <Image
                    src={"/batLogo.png"}
                    width={150}
                    height={150}
                    alt="BatLogo"
                    className="object-cover"
                    />
                </div>

                <div className="xl:w-2/5 w-full text-white flex justify-between">
                    <ul className="flex flex-col gap-y-3">
                        {FOOTER_LINKS_ONE.map((item, index) => (
                            <li key={`${index}-${item.link}`} className="hover:underline underline-offset-4 hover:opacity-40 transition-all duration-500">
                                <Link href={item.link} className="xl:text-lg text-sm">{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-y-3">
                        {FOOTER_LINKS_TWO.map((item, index) => (
                             <li key={`${index}-${item.link}`} className="hover:underline underline-offset-4 hover:opacity-40 transition-all duration-500">
                             <Link href={item.link} className="xl:text-lg text-sm" >{item.label}</Link>
                         </li>
                        ))}
                    </ul>
                </div>

                <div className="xl:w-1/3 w-full pb-10">
                    <ul className="flex gap-x-3 items-center xl:justify-end justify-between " >
                            {FOOTER_SOCIAL_LINKS.map((item, index) => (
                                <li className="relative h-8 w-8" key={index}>
                            <Link href={"https://www.instagram.com/essay.1999?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} className="group w-full h-full ">
                            <Image 
                            src={item.img}
                            fill
                            alt="Social Links"
                            className="object-cover"
                            />
                            </Link>
                                </li>
                            ))}
                            
                       
                    </ul>
                </div>

            </div>
            <div className="text-gray-200 flex xl:flex-row flex-col gap-y-5 justify-between xl:py-10 py-5 text-sm ">
                <div className="pointer-events-none">
                <p className="text-xs xl:text-base">&copy; Bat Limited</p>
                </div>
                <ul className="flex xl:gap-x-3 gap-x-2">
                    {FOOTER_LINKS_THREE.map((item) => (
                        <li className="flex gap-x-2 group" key={item.label}>
                            <Link href={item.link} className="group-hover:underline underline-offset-4 text-xs xl:text-base hover:opacity-65 transition-opacity duration-500">
                            {item.label}
                            </Link>
                            <p>.</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>  
    </div>
  )
}
