"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const letters = text.split("");

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      {letters.map((letter, index) => (
        <motion.span
          className="text-6xl font-semibold flex justify-center  text-center leading-tight text-[#FBFEE1]"
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="h-screen w-full px-40">
      <div className="flex flex-col items-center justify-center pt-[16vh]">
        
        <AnimatedText text="Introducing Dine VISTA" />
        <AnimatedText text="Discover the Joy of Dining Out" />
        
        <motion.div
          className="bg-[#507BA6] h-96 w-full rounded-3xl mt-[15vh]"
          initial={{ scaleX: 0.1, y: 1000, opacity: 0 }}
          animate={{ scaleX: 1, y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease:"easeInOut" }}
        >
          *
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
