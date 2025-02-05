import { SiVirtualbox } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiLaragon } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
});

const Mytolls = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{ opacity: 1, y:0 }}
      initial={{ opacity:0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Alat Ku</motion.h2>
      
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiVirtualbox className="text-7xl text-white" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-7xl text-[#FF6C37]" />
        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiArduino className="text-7xl text-[#00979D]" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <VscVscodeInsiders className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLaragon className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAndroidstudio className="text-7xl text-[#3DDC84]" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Mytolls;
