import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay: number;
  cssClass: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay , cssClass }) => {
  const modifiedText = text.split(" ").join("  ");
  const letters = modifiedText.split(/(?!^)/);
  return (
    <div className={`flex ${cssClass}`} >
      {letters.map((letter, index) => (
        <motion.p
          className={` font-aegreya_SC md:text-6xl lg:text-7xl h-8 mr-[1px] md:mr-[3px] md:h-16 text-center `} // text-[#FBFEE1]  font-extrabold
          key={`${letter}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:false}}
          transition={{ duration: 0.5, delay: delay + index * 0.05 }}
        >
          {letter}
        </motion.p>
      ))}
    </div>
  );
};

export default AnimatedText;
 
