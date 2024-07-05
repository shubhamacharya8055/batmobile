import { motion } from "framer-motion";

export default function ServiceHeading({title, description}) {
  return (
    <div className="h-[200px] min-w-[100px] flex flex-col mt-12 gap-y-5 xl:mb-0 mb-32">
      <motion.div
        className="text-darkBlue xl:text-8xl text-6xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        {title}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
        className="text-xl text-gray-700 xl:w-3/4 w-full"
      >
        {description}
      </motion.p>
    </div>
  );
}
