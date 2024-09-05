import React from "react";
import { delay, motion } from "framer-motion";
import WordPopping from './WordPopping'
import { opacity } from "./WordPopping/animation";


const DrawingSVG = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0.8 ,},
    centerline: {pathLength: 1, opacity: 1 , transition: { duration: 1 , ease: 'easeInOut', delay: 1.5}},
    ending : {opacity: 0 , pathLength:0 ,transition: {delay:0, duration:0}},
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2, // Animation duration in seconds
        ease: "easeInOut", // Easing function,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="text-[22px] font-light">
        <div className="flex flex-row items-center">
        
        <motion.div initial={{ x:0}} whileInView={{ x: 150}} transition={{duration:0.5, delay:0.3}}  exit='ending'>
        <motion.svg  width="19" height="20" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
            d="M0.5 20H19.5M19.5 1V20M19.5 "
            exit='ending'
            stroke="#FBFEE1"
            strokeWidth="1"
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            />
            <motion.path variants={pathVariants} initial="hidden" exit='ending' whileInView="centerline" stroke="#FBFEE1"
            strokeWidth="2" d='M0.5 20H19.5M19.5 1V20M19.5 20L1.5 2'/>
        </motion.svg>
        </motion.div>
        <motion.p >
        <WordPopping phrase="READY TO"/>
        </motion.p>
        </div>
    </div>
  );
};

export default DrawingSVG;
