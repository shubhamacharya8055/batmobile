import { CAPABILITIESCATEGORY } from '@/lib/constants';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function CapabilitiesDetails({setShowCapabilities}) {
  return (
    <div className="min-w-full min-h-full">
    <div className="py-16 px-24 flex gap-x-32"
    >
        <h1 className="text-6xl font-semibold text-darkBlue min-w-1/4 hover:underline hover:underline-offset-8 cursor-pointer transition-all duration-1000">Capabilities</h1>

        <div className="w-[75%] grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-10">
            {CAPABILITIESCATEGORY.map((CAP) => (
                <div key={CAP.Category} className="flex flex-col gap-y-3 w-fit">
                    <h2 className="text-xl text-darkBlue font-semibold underline underline-offset-2">{CAP.Category}</h2>
                    <div className="flex flex-col justify-start gap-y-2">
                        {CAP.subCategories.map((item) => (
                            <p
                            onClick={() => {
                                setShowCapabilities(false);
                                const capabilitiesElement = document.getElementById("capabilities");
                                if (capabilitiesElement) {
                                    gsap.to(window, {
                                      scrollTo: { y: capabilitiesElement, offsetY: 0 },
                                      duration: 0.8, 
                                      ease: "power2.inOut",
                                    });
                                  } else {
                                    console.warn("Element with id 'capabilities' not found.");
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
