"use client"

import {motion, useScroll} from "framer-motion"

export default function ProgressBar() {

    const {scrollYProgress} = useScroll()

  return (
    <motion.div
    className="fixed top-20 inset-0 h-2 bg-darkBlue transform origin-[0%_0%] z-50"
    style={{scaleX: scrollYProgress}}
    ></motion.div>
  )
}
