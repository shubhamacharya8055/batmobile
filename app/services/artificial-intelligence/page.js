"use client"
import { IMAGES } from "@/lib/constants"
import {motion, useScroll, useTransform} from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
// import "@/app/horizontal.css"

export default function Page() {

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

  return (
    <div className="min-w-full min-h-full">
        <div className="w-full h-full border border-red-500 px-14 py-14">
                <div className="h-fit w-fit">
                    <p className="text-xs tracking-wide text-teal font-semibold">services</p>
                </div>

                <div className="h-fit w-fit mt-12 flex flex-col gap-y-5">
                    <h1 className="text-darkBlue text-8xl font-semibold tracking-tight">Artificial Intelligence</h1>
                    <p className="text-lg text-gray-600 w-3/4">we help businesses harness the power of AI to optimize operations, enhance customer experiences, and drive growth.</p>
                </div>

                
                {/* Horizontal Scroll */}

                <div className="h-[500vh] mt-10" ref={targetRef}>
                        <div className="h-[100vh] min-w-full sticky top-20 flex justify-start items-center overflow-hidden">
                                <motion.div className="grid  min-w-[2600px] min-h-[400px] grid-cols-4 grid-rows-1 gap-x-10" style={{x}}>

                                    <motion.div className="border-2 z-[999999] border-green-900 min-w-[600px] min-h-full"
                                   
                                    >
                                        {/* <img src="/images/one.jpg" className="min-w-full min-h-full" /> */}

                                        <div className="w-full h-full flex flex-col gap-y-5 px-10 py-10">
                                            <h1 className="text-5xl font-semibold">Predictive Analytics: Turning Data into Foresight</h1>
                                            <p className="text-sm">AI-powered predictive analytics leverages machine learning algorithms to analyze vast amounts of historical and real-time data, identifying patterns and trends to make predictions about future outcomes. This can range from customer behavior and market trends to inventory needs and equipment failures.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="border border-green-900 min-w-[600px] h-full"
                                    initial={
                                        {opacity: 0 , y: 150} 
                                    }
                                    whileInView={{opacity:1, y: 0}}
                                    transition={{duration: 0.5 ,  ease: "easeInOut"}}
                                    >
                                    {/* <img src="/images/two.jpg" className="w-full h-full" /> */}
                                    <div className="w-full h-full flex flex-col gap-y-5 px-10 py-10">
                                            <h1 className="text-5xl font-semibold">Natural Language Processing (NLP)</h1>
                                            <p className="text-sm">NLP can revolutionize customer service by providing 24/7 support, automating responses to common queries, and even understanding customer emotions. It can also be used to analyze social media conversations, extract insights from customer feedback, and improve content marketing efforts.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="border border-green-900 min-w-[600px] h-full"
                                    initial={
                                        {opacity: 0 , y: 150} 
                                    }
                                    whileInView={{opacity:1, y: 0}}
                                    transition={{duration: 0.5 , ease: "easeIn"}}
                                    >
                                        {/* <img src="/images/three.jpg" className="w-full h-full" /> */}
                                        <div className="w-full h-full flex flex-col gap-y-5 px-10 py-10">
                                            <h1 className="text-5xl font-semibold">Intelligent Automation</h1>
                                            <p className="text-sm">Businesses can significantly reduce operational costs, improve accuracy, and free up employees to focus on higher-value tasks. Additionally, intelligent automation can speed up processes, leading to faster decision-making and improved customer experiences.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="border border-green-900 min-w-[600px] h-full"
                                    initial={
                                        {opacity: 0 , y: 150} 
                                    }
                                    whileInView={{opacity:1, y: 0}}
                                    transition={{duration: 0.5 , ease: "easeIn"}}
                                    >
                                        {/* <img src="/images/four.jpg" className="w-full h-full" /> */}
                                        <div className="w-full h-full flex flex-col gap-y-5 px-10 py-10">
                                            <h1 className="text-5xl font-semibold">Computer Vision</h1>
                                            <p className="text-sm"> Computer vision enables AI systems to interpret and understand visual information from the world, similar to how humans do. This technology has applications in quality control, inventory management, security surveillance, and even medical diagnosis.</p>
                                        </div>
                                    </motion.div>

                                </motion.div>
                        </div>
                </div>

        </div>
    </div>
  )
}
