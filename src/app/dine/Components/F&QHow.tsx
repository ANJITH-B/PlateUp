import React, { useState } from "react";
import { motion } from "framer-motion";

const FAndQHow: React.FC = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleAnswer = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="w-full h-[300px] bg-[#4C5A5D] rounded-3xl p-5 flex flex-col justify-between">
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
        <motion.div
          initial={{ rotateZ: 0, scale: 1 }}
          animate={{
            rotateZ: isRotated ? 0 : 45,
            scale: isRotated ? 1 : 0.9,
          }}
        >
          <button onClick={handleAnswer} className="px-4 pb-1 text-2xl rounded-full h-11 bg-black" > + </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAndQHow;
