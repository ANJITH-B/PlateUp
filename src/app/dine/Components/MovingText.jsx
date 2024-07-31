"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from 'framer-motion';
import AnimatedText from "./TextPoping";
import ShortBrief from './WordPopping'
const MovingText = () => {
  const paths = useRef([]);
  const container = useRef();
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
  })

  useEffect( () => {
    scrollYProgress.on("change", e => {
      paths.current.forEach( (path, i) => {
        path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
      })
    })
  }, [])

  return (
    <div className="md:h-screen w-full flex flex-col items-center "> 
      {/* <div className="">
        <ShortBrief phrase='Introducting Dine VISTA'/>
        <ShortBrief phrase='Discover the Joy of Dining Out'/>
      </div> */}
        <AnimatedText  text="Introducing Dine VISTA" delay={0} />
        <AnimatedText text="Discover the Joy of Dining Out" delay={1.5} />  
      <motion.div className="bg-[#507BA6] h-60 md:h-96 w-full rounded-3xl mt-[20vh] md:mt-[15vh]"
          initial={{ scale: 0.1, y: 100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease:[0.65, 0, 0.35, 1] }} >
          <svg className="w-full " viewBox="0 0 1548 463" xmlns="http://www.w3.org/2000/svg">
            <path id="curve" fill="none" 
              d="M-243 273.5L-4.5 145.5C118 84.5 207 185 256 244C305 303 389.5 303.5 443 226.5C496.5 149.5 497.5 149 529.5 100.5C563.867 48.4127 666 -11.1159 739 3.00072C799 14.6034 838.77 49.9307 885.5 122.5C928 188.5 1034.5 234.344 1121.5 207.5C1256 166 1284.5 181.5 1366 196C1421.79 205.927 1510.67 303.666 1555.5 344.5L1787 553" />
              <motion.text initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="text-[100px] md:text-5xl font-bold" style={{fill: "white"}}>
                {[...Array(3)].map((_, i) => {
                  return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Break fast lanuch snakes dinner Break fast lanuch snakes</textPath>
                })}
              </motion.text>
          </svg>
      </motion.div>   
    </div>
  );
};


export default MovingText;


