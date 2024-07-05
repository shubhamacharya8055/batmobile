import { CAPABILITIESCATEGORY } from "@/lib/constants";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function CapabilitiesDetails({ setShowCapabilities }) {
  const router = useRouter();
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="min-w-full min-h-full">
      <div className="pt-8 pl-20 pr-36 flex gap-x-16">
        <h1
          className="text-6xl font-semibold text-darkBlue min-w-1/4 hover:underline hover:underline-offset-8 cursor-pointer transition-all duration-1000"
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
        >
          Capabilities
        </h1>

        <div className="w-full grid grid-cols-3 grid-rows-2 gap-x-28 gap-y-10">
          {CAPABILITIESCATEGORY.map((CAP) => (
            <div key={CAP.Category} className="flex flex-col gap-y-3 w-[210px]">
              <h2
                className="text-xl text-darkBlue hover:scale-110 transition-all duration-700 cursor-pointer font-semibold underline underline-offset-2"
                onClick={() => {
                  router.push(`${CAP.link}`);
                  clearTimeout(timeoutRef.current);

                  timeoutRef.current = setTimeout(() => {
                    setShowCapabilities(false);
                  }, 1300);
                }}
              >
                {CAP.Category}
              </h2>
              <div className="flex flex-col justify-start gap-y-2">
                {CAP.subCategories.map((item) => (
                  <p
                    onClick={() => {
                      router.push(`${CAP.link}`);
                      clearTimeout(timeoutRef.current);

                      timeoutRef.current = setTimeout(() => {
                        setShowCapabilities(false);
                      }, 1300);
                    }}
                    className="text-xs text-teal font-semibold hover:underline hover:underline-offset-4 hover:text-darkBlue cursor-pointer transition-all duration-300"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
