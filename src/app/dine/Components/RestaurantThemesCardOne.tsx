import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import F1 from "../assets/images/f1.png";

const RestaurantThemesCardOne: React.FC = () => {
  return (
    <motion.div
      className="bg-gradient-radial to-[#EAB33E]  from-[#FFCC5F] p-10 w-full rounded-3xl"
      initial={{ scale: 0.1, y: 150, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 1 }}
    >
      <div data-scroll data-scroll-speed={0.1}>
        <motion.div
          className="div"
          initial={{ scale: 0, opacity: 0.4 }}
          viewport={{ once: false }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ delay: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <Image src={F1} width={200} height={200} alt="food one" />
        </motion.div>
        {/* <Image src={F2} width={200} height={200} alt="food one"/> */}
      </div>
    </motion.div>
  );
};

export default RestaurantThemesCardOne;
