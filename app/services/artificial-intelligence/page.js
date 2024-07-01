"use client"
import { IMAGES } from "@/lib/constants"
import {motion, useScroll, useTransform} from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Page() {

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);


   

  return (
    <div className="min-w-full min-h-full">
        <div className="min-w-full min-h-full border border-red-500 xl:px-14 px-10 py-14">
                <div className="h-fit w-fit">
                    <p className="text-xs tracking-wide text-teal font-semibold">services</p>
                </div>

                <div className="h-fit w-fit mt-12 flex flex-col gap-y-5">
                    <h1 className="text-darkBlue xl:text-8xl text-6xl font-semibold tracking-tight">Artificial Intelligence</h1>
                    <p className="text-lg text-gray-600 xl:w-3/4 w-full">we help businesses harness the power of AI to optimize operations, enhance customer experiences, and drive growth.</p>
                </div>

                
                {/* Horizontal Scroll */}

                <div className="h-[50vh] xl:h-[300vh] mt-20" ref={targetRef}>
                        <div className="h-[100vh] min-w-full sticky top-20 flex justify-start xl:items-center items-start overflow-hidden">
                                <motion.div className="grid xl:min-w-[2600px] min-w-[1200px] min-h-[400px] grid-cols-4 grid-rows-1 gap-x-10 xl:gap-x-11 text-darkBlue" style={{x}}>

                                    <motion.div className="border shadow-xl rounded-md border-green-900 xl:min-w-[600px] min-w-[300px] h-full"
                                   
                                    >

                                        <div className="w-full h-full flex flex-col gap-y-5 xl:px-10 xl:py-10 px-5 py-5">
                                            <h1 className="xl:text-5xl text-4xl font-semibold h-1/2">Predictive Analytics: Turning Data into Foresight</h1>
                                            <p className="text-sm">AI-powered predictive analytics leverages machine learning algorithms to analyze vast amounts of historical and real-time data, identifying patterns and trends to make predictions about future outcomes. This can range from customer behavior and market trends to inventory needs and equipment failures.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="border shadow-xl rounded-md border-green-900 xl:min-w-[600px] min-w-[300px] h-full"
                                    initial={
                                        {opacity: 0 , y: 150} 
                                    }
                                    whileInView={{opacity:1, y: 0}}
                                    transition={{duration: 0.5 ,  ease: "easeInOut"}}
                                    >
                                    <div className="w-full h-full flex flex-col gap-y-5 xl:px-10 xl:py-10 p-5">
                                            <h1 className="xl:text-5xl text-4xl font-semibold h-1/2">Natural Language Processing (NLP)</h1>
                                            <p className="text-sm">NLP can revolutionize customer service by providing 24/7 support, automating responses to common queries, and even understanding customer emotions. It can also be used to analyze social media conversations, extract insights from customer feedback, and improve content marketing efforts.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="border shadow-xl rounded-md border-green-900 xl:min-w-[600px] min-w-[300px] h-full"
                                    initial={
                                        {opacity: 0 , y: 150} 
                                    }
                                    whileInView={{opacity:1, y: 0}}
                                    transition={{duration: 0.5 , ease: "easeIn"}}
                                    >
                                        <div className="w-full h-full flex flex-col gap-y-5 xl:px-10 xl:py-10 p-5">
                                            <h1 className="xl:text-5xl text-4xl font-semibold h-1/2">Intelligent Automation: Boosting Efficiency</h1>
                                            <p className="text-sm">Businesses can significantly reduce operational costs, improve accuracy, and free up employees to focus on higher-value tasks. Additionally, intelligent automation can speed up processes, leading to faster decision-making and improved customer experiences.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div className="border shadow-xl rounded-md border-green-900 xl:min-w-[600px] min-w-[300px] h-full"
                                    initial={
                                        {opacity: 0 , y: 150} 
                                    }
                                    whileInView={{opacity:1, y: 0}}
                                    transition={{duration: 0.5 , ease: "easeIn"}}
                                    >
                                        <div className="w-full h-full flex flex-col gap-y-5 xl:px-10 xl:py-10 p-5">
                                            <h1 className="xl:text-5xl text-4xl font-semibold h-1/2">Computer Vision: Making Sense of Visual Data</h1>
                                            <p className="text-sm"> Computer vision enables AI systems to interpret and understand visual information from the world, similar to how humans do. This technology has applications in quality control, inventory management, security surveillance, and even medical diagnosis.</p>
                                        </div>
                                    </motion.div>

                                </motion.div>
                        </div>
                </div>

                <div className="content ">
                    next content
                </div>

        </div>
    </div>
  )
}
