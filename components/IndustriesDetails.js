import { INDUSTRIESCATEGORY } from "@/lib/constants";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function IndustriesDetails({setShowIndustriesComponent , industriesRef}) {
  return (
    <div className="min-w-full min-h-full">
        <div className="py-16 px-24 flex gap-x-32"
        >
            <h1 className="text-6xl font-semibold text-darkBlue min-w-1/4 hover:underline hover:underline-offset-8 cursor-pointer transition-all duration-1000">Industries</h1>

            <div className="min-w-[75%] grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-10">
                {INDUSTRIESCATEGORY.map((ind) => (
                    <div key={ind.Category} className="flex flex-col gap-y-3 w-fit">
                        <h2 className="text-xl text-darkBlue font-semibold underline underline-offset-2">{ind.Category}</h2>
                        <div className="flex flex-col justify-start gap-y-2">
                            {ind.subCategories.map((item) => (
                                <p
                                onClick={() => {
                                    setShowIndustriesComponent(false);
                                    const industriesElement = document.getElementById("industries");
                                    if (industriesElement) {
                                        gsap.to(window, {
                                          scrollTo: { y: industriesElement, offsetY: 0 },
                                          duration: 0.8, 
                                          ease: "power2.inOut",
                                        });
                                      } else {
                                        console.warn("Element with id 'industries' not found.");
                                      }   
                                }}
                                className="text-xs text-teal font-semibold hover:underline hover:underline-offset-4 hover:text-darkBlue cursor-pointer transition-all duration-300" key={item}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
