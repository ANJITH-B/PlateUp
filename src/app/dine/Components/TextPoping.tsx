import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay }) => {
  const modifiedText = text.split(" ").join("  ");
  const letters = modifiedText.split(/(?!^)/);
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      {letters.map((letter, index) => (
        <motion.span
          className="text-2xl md:text-7xl font-extrabold h-16 mr-[1px] md:mr-[3px] md:h-16 text-center  text-[#FBFEE1]"
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
 
