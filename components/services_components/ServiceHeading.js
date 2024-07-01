import { motion } from "framer-motion";

export default function ServiceHeading() {
  return (
    <div className="h-fit w-fit mt-12 flex flex-col gap-y-5">
      <motion.h1
        className="text-darkBlue xl:text-8xl text-6xl font-semibold tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        Artificial Intelligence
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
        className="text-lg text-gray-600 xl:w-3/4 w-full"
      >
        we help businesses harness the power of AI to optimize operations,
        enhance customer experiences, and drive growth.
      </motion.p>
    </div>
  );
}
