import React, { useState } from "react";
import { motion } from "framer-motion";

const FAndQHow: React.FC = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleAnswer = () => {
    setIsRotated(!isRotated);
  };

  return (
    <motion.div className="w-full h-[300px] bg-[#4C5A5D] rounded-3xl p-5 flex flex-col justify-between"
      initial={{ scale: 0.9, y: -20, x: 20, opacity: 0 }}
      exit={{ scale: 0, opacity: 0  ,transition:{ ease: [0.65, 0, 0.35, 1], delay: 0 ,duration: 0}}}  
      whileInView={{ scale: 1, opacity: 1 ,x: 0,y :0  , transition: {ease: [0.65, 0, 0.35, 1], delay: 0.1 ,duration: 1.2}}}>
      <div className="flex flex-row justify-between w-full">
        <p className="text-md font-xl">
          How ?<br />
          <span className="text-sm font-normal">By using the Plateup card</span>
        </p>
        <button className="border px-4 rounded-xl pb-1 h-10">..</button>
      </div>
      <div className="flex flex-row justify-between w-full gap-2 items-center">
        <p>
          To Enjoy convenience and peace of mind, knowing that your pantry is
          always stocked
        </p>
        <motion.button onClick={handleAnswer} className="px-[15px] pb-1 text-2xl rounded-full h-11 bg-black" 
            initial={{ rotateZ: 0, scale: 1 }}
            animate={{
              rotateZ: isRotated ? 0 : 45,
              scale: isRotated ? [1, 0.75, 1] : [1, 0.8, 1] ,
            }}
            transition={{duration:0.2,}}>
              <motion.span animate={{
                rotateZ: isRotated ? 0 : 45,
                scale: isRotated ? [0.7, 1, 0.7] : [0.7, 1, 0.7],
                }}>+
              </motion.span> 
            </motion.button>  
      </div>
    </motion.div>
  );
};

export default FAndQHow;
