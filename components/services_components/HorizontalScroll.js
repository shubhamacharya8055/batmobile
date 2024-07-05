import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HorizontalScroll({data}) {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
  
    const [xEndValue, setXEndValue] = useState("-57%");
  
    useEffect(() => {
      const updateXEndValue = () => {
        if (window.innerWidth === 412 && window.innerHeight === 915) {
          setXEndValue("-77%");
        } else {
          setXEndValue("-57%");
        }
      };
  
      updateXEndValue(); 
      window.addEventListener("resize", updateXEndValue); 
      return () => window.removeEventListener("resize", updateXEndValue); 
    }, []);
  
    const x = useTransform(scrollYProgress, [0, 1], ["0%", xEndValue]);

    
  return (
    <div className="h-[40vh] xl:h-[300vh] " ref={targetRef}>
          <div className="h-[100vh] min-w-full sticky top-20 flex justify-start xl:items-center items-start xl:overflow-hidden">
            <motion.div
              className="cursor-pointer grid xl:min-w-[2600px] min-w-[1200px] grid-cols-4 grid-rows-1 xl:gap-x-0 gap-x-16 text-darkBlue"
              style={{ x }}
            >
              {data.map((item) => (
                      <motion.div
                      className="border rounded-md border-teal-500 xl:min-w-[600px] w-[300px] min-h-[400px] 
                   shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70"
                      key={item.title}
                      whileHover={{
                        scale: 1.05,
                        rotate: -2,
                        skewX: -3,
                      }}
                      initial = {{opacity: 0 , y: 200}}
                        whileInView={{opacity:1 , y:0}}
                        transition={{duration: 0.5, delay: 0.3, ease: "easeOut"}}
                    >
                      <div className="w-full h-full flex flex-col break-words gap-y-5 xl:px-10 xl:py-10 px-5 py-5 bg-gradient-to-r from-white to-blue-50">
                        <h1 className="xl:text-5xl text-4xl font-semibold h-1/2 text-teal-900">
                          {item.title}
                        </h1>
                        <p className="text-[13px] line-clamp-3 leading-5 text-gray-500 font-medium">
                          {item.description}
                        </p>
                        <div className="flex justify-center mt-auto">
                          <motion.button
                            className="bg-gradient-to-r from-teal to-blue-500 text-white text-xs xl:text-sm font-bold py-2 px-4 rounded-md
                         shadow-lg shadow-teal-500/50 hover:shadow-xl hover:shadow-blue-500/70
                         transition duration-300 ease-in-out"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link href={"/contact-us"}>
                            Get Started
                            </Link>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
              ))}

            </motion.div>
          </div>
        </div>
  )
}
