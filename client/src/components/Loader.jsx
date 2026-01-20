import { motion } from "framer-motion";
import { BsDropletHalf } from "react-icons/bs";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="text-red-500 text-6xl"
      >
        <BsDropletHalf className="animate-pulse" />
      </motion.div>
    </div>
  );
};

export default Loader;  
