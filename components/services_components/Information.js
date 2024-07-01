import { Item } from "@radix-ui/react-select";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Information({ data }) {
  return (
    <div className="grid xl:mt-0 mt-32 grid-cols-1 grid-rows-2 gap-y-10">
      <div className="grid xl:grid-cols-2 xl:grid-rows-1 grid-cols-1 grid-rows-2 xl:justify-items-center place-items-center gap-y-10 ">
        {data.infoOne.map((item) => (
          <React.Fragment key={item.title}>
            <motion.div
              className="rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-1000 xl:w-[80%] xl:min-h-[80%] w-full cursor-pointer overflow-hidden"
              initial={{ opacity: 0, x: -200, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "linear" }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square">
                <Image
                  src={item.img}
                  className="object-cover hover:scale-110 transition-all duration-500"
                  fill
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col justify-evenly pr-5 cursor-pointer gap-y-10 place-self-start xl:place-self-stretch"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="xl:text-sm text-xs text-darkBlue font-semibold">
                case study
              </p>
              <h2 className="xl:text-5xl text-2xl font-semibold text-darkBlue ">
                {item.title}
              </h2>
              <p className="text-sm text-darkBlue tracking-wide leading-6">
                {item.description}
              </p>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
      <div className="grid xl:grid-cols-2 xl:grid-rows-1 grid-cols-1 grid-rows-2 xl:justify-items-center place-items-center gap-y-10">
        {data.infoTwo.map((item) => (
          <React.Fragment key={item.title}>
            <motion.div
              className="flex flex-col justify-evenly xl:pl-5 cursor-pointer gap-y-10 place-self-start xl:place-self-stretch"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="xl:text-sm text-xs text-darkBlue font-semibold">
                case study
              </p>
              <h2 className="xl:text-5xl text-2xl font-semibold text-darkBlue ">
                {item.title}
              </h2>
              <p className="text-sm text-darkBlue tracking-wide leading-6">
                {item.description}
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg row-start-1 xl:col-start-2 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-1000 xl:w-[80%] cursor-pointer xl:min-h-[80%] w-full h-fit overflow-hidden"
              initial={{ opacity: 0, y: 200, scale: 0.2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "linear" }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square ">
                <Image
                  src={item.img}
                  className="object-cover object-left hover:scale-110 transition-all duration-500"
                  fill
                />
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
