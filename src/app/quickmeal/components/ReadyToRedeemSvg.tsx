import React from "react";
import { delay, motion } from "framer-motion";
import WordPopping from './WordPopping'
import { opacity } from "./WordPopping/animation";
import { useMediaQuery } from "react-responsive";
import AnimatedText from "./TextPoping";


const DrawingSVG = () => {
  const sm = useMediaQuery({ maxWidth : 768 }) ;
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0.8 ,},
    centerline: {pathLength: 1, opacity: 1 , transition: { duration: 1 , ease: 'easeInOut', delay: 1.5}},
    ending : {opacity: 0 , pathLength:0 ,transition: {delay:0, duration:0}},
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut", 
        delay: 0.3,
      },
    },
  };

  return (
    <div className="text-[14px] md:text-[22px] font-light">
        <motion.div initial={{y:30}} whileInView={{y:0 , transition:{duration:0.4, delay: 2}}} className="flex flex-row items-center">
        
        <motion.div initial={{ x:0}} whileInView={{ x: (sm? 85 : 174)}} transition={{duration:0.5, delay:0.3}}  exit='ending'>
          <motion.svg  width={sm?"14":"19"} height={sm?"14":"19"} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <motion.p initial={{ x:(sm? -15: 0)}} className="w-24 md:w-full"><WordPopping phrase="READY TO"/></motion.p>
        </motion.div>
        <motion.div initial={{x:( sm? 6 :32)}} className="text-[#FBFEE1]"><AnimatedText text="GET REDEEM" delay={2.3}/></motion.div>
    </div>
  );
};

export default DrawingSVG;
