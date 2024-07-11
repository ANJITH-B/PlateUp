"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface Props {
  text?: string;
}

const AnimatedText: React.FC<Props> = ({ text }) => {
  const letters = text?.split("");

  return (
    <motion.div
      className="absolute"
      style={{ display: "flex", overflow: "hidden" }}
    >
      {letters?.map((letter, index) => (
        <motion.span
          className="text-4xl md:text-6xl font-bold "
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const normal = {
  animate: {
    x: [0, -1035],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 5, ease: "linear" },
    },
  },
};
const slow = {
  animate: {
    x: [0, -705],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 5, ease: "linear" },
    },
  },
};

const loading = () => {
  const sm = useMediaQuery({ maxWidth: 768 });
  const count = useMotionValue(0);
  const number = useTransform(count, Math.round);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["REIMAGINING", "REINVENTING!", "REDEFING"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  React.useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });
  }, []);

  return (
    <div>
      <motion.div className="z-10 absolute h-screen w-full">
        <div className="flex flex-col items-center justify-center h-screen ">
          <div>
            <div className="pb-10">
              <AnimatePresence>
                <AnimatedText key={texts[textIndex]} text={texts[textIndex]} />
              </AnimatePresence>
            </div>
            <div className="flex flex-row gap-5 pt-3 md:pt-10">
              <motion.div className="bg-gray-500 w-40 md:w-80 h-14 md:h-20">
                <motion.div
                  className="bg-white h-14 md:h-20"
                  style={{ width: "1rem" }}
                  animate={{ width: sm ? "10rem" : "20rem" }}
                  transition={{ duration: 3 }}
                ></motion.div>
              </motion.div>
              <div className="flex flex-row">
                <motion.h1 className=" text-black dark:text-white font-bold text-4xl md:text-6xl ">
                  {number}
                </motion.h1>
                <h1 className="text-4xl md:text-6xl font-bold">%</h1>
              </div>
            </div>
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
      <div className="marquee ">
        <motion.div className="track" variants={slow} animate="animate">
          <h1 className="text-6xl font-bold">
            Transform the way you eat by reimagining, reinventing, and
            redefining your culinary experience.
          </h1>
        </motion.div>
      </div>
      <div className="marquee ">
        <motion.div className="track" variants={slow} animate="animate">
          <h1 className="text-6xl font-bold">
            Transform the way you eat by reimagining, reinventing, and
            redefining your culinary experience.
          </h1>
        </motion.div>
      </div>
      <div className="marquee block md:hidden">
        <motion.div className="track" variants={slow} animate="animate">
          <h1 className="text-6xl font-bold">
            Transform the way you eat by reimagining, reinventing, and
            redefining your culinary experience.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default loading;
