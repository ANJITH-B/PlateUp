import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import F1 from "../assets/images/CardTwoFood.png";

interface RestaurantThemesCardOneProps {
  height : number;
}

const RestaurantThemesCardTwo: React.FC= () => {
  const height = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target : height,
    offset: ['start start', 'end end']
  })

  const rotation = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <motion.div
      className="bg-gradient-radial to-[#EAB33E]  from-[#FFCC5F] w-80  overflow-hidden h-[45vh] rounded-3xl"
      initial={{ scaleY: 0, height: -100, y: -50, opacity: 0.5 }}
      whileInView={{ scaleY: 1, height: 300, y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ ease: [0.65, 0, 0.35, 1], duration: 1.5 }}
    >
      <div data-scroll data-scroll-speed={0.1}>
        <motion.div
          className=" w-64 overflow-hidden"
          initial={{ scale: 0, opacity: 0.4, }}
          style={{y:rotation}}
          viewport={{ once: false }}
          exit={{ scale: 0, opacity: 0  ,transition:{ ease: [0.65, 0, 0.35, 1], delay: 0 ,duration: 0}}}  
          whileInView={{ scale: 1, opacity: 1 ,x: -55 , transition: {ease: [0.65, 0, 0.35, 1], delay: 0.5 ,duration: 0.2}}}
        >
          <Image src={F1} width={400} height={200} alt="food one" className=""/>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RestaurantThemesCardTwo;
