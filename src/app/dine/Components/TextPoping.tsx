import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay }) => {
  const letters = text.split("");

  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      {letters.map((letter, index) => (
        <motion.span
          className="text-3xl md:text-6xl font-semibold flex justify-center  text-center leading-tight text-[#FBFEE1]"
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:false}}
          transition={{ duration: 0.5, delay: delay + index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
 
