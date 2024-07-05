"use client";
import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

interface Props {
  text?: string;
}

const AnimatedText: React.FC<Props> = ({ text }) => {
  const letters = text?.split('');

  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      {letters?.map((letter, index) => (
        <motion.span className="text-6xl font-bold"
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

const normal = {
  animate: {
    x: [0, -1035],
    transition: { 
      x: { repeat: Infinity, repeatType: "loop", duration: 5, ease: "linear" },},
  },
};
const slow = {
  animate: {
    x: [0, -705],
    transition: { 
      x: { repeat: Infinity, repeatType: "loop", duration: 5,ease: "linear" },
    },
  },
};

const loading = () => {
  const count = useMotionValue(0);
  const number = useTransform(count, Math.round);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['REIMAGINING', 'REINVENTING!','REDEFING'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    },1000);    
    return () => clearInterval(interval);
  },[texts.length]);

  React.useEffect(() => {
    const animation = animate(count, 100, { duration: 0.5 });
  }, []);

  return (
     <>
      <motion.div className=" absolute z-10 items-center my-[50vh] mx-[5vh] md:my-[30vh] md:mx-[10vw] lg:my-[39vh] lg:mx-[39vw]">
      <AnimatePresence>
        <AnimatedText key={texts[textIndex]} text={texts[textIndex]} />
      </AnimatePresence>
        <div className="flex flex-row gap-5">
        <motion.div className="bg-gray-500 w-80 h-20">
          <motion.div
            className="bg-white h-20"
            style={{ width: "1rem" }}
            animate={{ width: "20rem" }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </motion.div>
        <div className="flex flex-row">
          <motion.h1 className=" text-black dark:text-white font-bold text-6xl ">
            {number}
          </motion.h1>
          <h1 className="text-6xl font-bold">%</h1>
        </div>
        </div>
      </motion.div>

      <div className="marquee">
        <motion.div className="track" variants={normal} animate="animate">
          <h1 className="text-6xl font-bold">
            Transform the way you eat by reimagining, reinventing, and
            redefining your culinary experience.
          </h1>
        </motion.div>
      </div>
      <div className="marquee">
        <motion.div className="track" variants={slow} animate="animate">
          <h1 className="text-6xl font-bold">
            Transform the way you eat by reimagining, reinventing, and
            redefining your culinary experience.
          </h1>
        </motion.div>
      </div>
      <div className="marquee">
        <motion.div className="track" variants={normal} animate="animate">
          <h1 className="text-6xl font-bold">
            Transform the way you eat by reimagining, reinventing, and
            redefining your culinary experience.
          </h1>
        </motion.div>
      </div>
      <div className="marquee">
        <motion.div className="track" variants={slow} animate="animate">
          <h1 className="text-6xl font-bold">
            Transform the way you eat by reimagining, reinventing, and
            redefining your culinary experience.
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default loading;
