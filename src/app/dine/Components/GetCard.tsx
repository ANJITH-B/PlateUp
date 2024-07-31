import React from "react";
import { motion } from "framer-motion";


const GetCard: React.FC = () => {
  return (
    <motion.div
      className="bg-[#D9D9D9] w-full rounded-3xl"
      initial={{ scale: 0.1, y: 100, x: -100, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, x: 0, opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 1.5 }}
    >
      .
    </motion.div>
  );
};

export default GetCard;
