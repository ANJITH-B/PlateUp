import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import F1 from '../assets/images/f1.png'


const RestaurantThemesCardTwo: React.FC = () => {
  return (
    <motion.div
      className="bg-gradient-radial to-[#EAB33E]  from-[#FFCC5F] p-10 w-full rounded-3xl"
      initial={{ scaleY: 0, height: -100, y: -50, opacity: 0.5 }}
      whileInView={{ scaleY: 1, height: 300, y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 1.5 }}
    >
      <motion.div
        className="div"
        initial={{ scale: 0, opacity: 0.4 }}
        viewport={{ once: false }}
        exit={{ scale: 0, opacity: 0, transition: { delay: 0 } }}
        whileInView={{ scale: 1, opacity: 1, transition: { delay: 1 } }}
      >
        <Image src={F1} width={200} height={200} alt="food one" />
      </motion.div>
      {/* <Image src={F2} width={200} height={200} alt="food one"/> */}
    </motion.div>
  );
};

export default RestaurantThemesCardTwo;
