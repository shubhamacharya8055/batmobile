import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HorizontalScroll({data}) {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
  
    const [xEndValue, setXEndValue] = useState("-55%");
  
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
    <div className="h-[50vh] xl:h-[300vh] mt-20" ref={targetRef}>
          <div className="h-[100vh] min-w-full sticky top-20 flex justify-start xl:items-center items-start overflow-hidden">
            <motion.div
              className="cursor-pointer grid xl:min-w-[2600px] min-w-[1200px] min-h-[400px] grid-cols-4 grid-rows-1 gap-x-10 xl:gap-x-5 text-darkBlue"
              style={{ x }}
            >
              {data.map((item) => (
                      <motion.div
                      className="border rounded-md border-teal-500 xl:min-w-[600px] min-w-[300px] h-full 
                   shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70"
                      whileHover={{
                        scale: 1.05,
                        rotate: -2,
                        skewX: -3,
                      }}
                      initial = {{opacity: 0 , y: 200}}
                        whileInView={{opacity:1 , y:0}}
                        transition={{duration: 0.5, delay: 0.3, ease: "easeOut"}}
                    >
                      <div className="w-full h-full flex flex-col gap-y-5 xl:px-10 xl:py-10 px-5 py-5 bg-gradient-to-r from-white to-blue-50">
                        <h1 className="xl:text-5xl text-4xl font-semibold h-1/2 text-teal-900">
                          {item.title}
                        </h1>
                        <p className="xl:text-sm text-xs text-teal-700 font-semibold">
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
                            Enroll Now
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
