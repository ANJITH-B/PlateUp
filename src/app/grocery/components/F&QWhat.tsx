import React, { useState } from "react";
import { motion } from "framer-motion";
import WordPopping from "./WordPopping";

const FQA: [string, string][] = [
  [
    "Where can I find Pantry Plus stores?",
    "You can easily search for Pantry Plus stores on the Plateup app, or alternatively, you can place orders directly through the Plateup app.",
  ],
  [
    "How do I redeem my allowance?",
    "You can redeem your allowance either at the stores or through the Plateup app.",
  ],
  [
    "Do I need to pay for my groceries after redeeming through the app?",
    "No, there is no need to pay after redeeming your allowance for your purchases.",
  ],
  [
    "Is there a limit to how much grocery I can buy?",
    "The limit depends on the allowance set by your company or HR.",
  ],
  [
    "Can I still buy groceries after using up my allowance?",
    "No, you'll need to wait until your allowance is refilled by your company's HR or admin.",
  ],
];


const FAndQWhat = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
  };

  return (
    <motion.div 
    initial={{ scale: 0.9, y: 40, x: -40, opacity: 0 }}
      exit={{ scale: 0, opacity: 0  ,transition:{ ease: [0.65, 0, 0.35, 1], delay: 0 ,duration: 0}}}  
      whileInView={{ scale: 1, opacity: 1 ,x: 0,y :0  , transition: {ease: [0.65, 0, 0.35, 1], delay: 0.1 ,duration: 1.2}}}
      // viewport={{ amount: 0 }}
       className="h-full w-full bg-[#3F4F3E] rounded-3xl p-5">
      {FQA.map((item, index) => (
        <div key={index}>
          <motion.div className="flex flex-row justify-between py-3 items-center">
            <p className="text-xl font-light "><WordPopping leading="mb-0" phrase={item[0]}/></p>
              <motion.button className="px-4 pb-1 text-2xl rounded-full h-11 bg-black text-white"
              initial={{ rotate: 0 }}
              animate={{
                rotate: selectedQuestionIndex === index ? 45 : 0,
                scale: selectedQuestionIndex === index ? [1, 0.75, 1] : [1, 0.8, 1],
              }}
              onClick={() => handleClick(index)}    
              >  
              <motion.span animate={{
                rotateZ: selectedQuestionIndex === index  ? 0 : 45,
                scale: selectedQuestionIndex === index  ? [0.7, 1, 0.7] : [0.7, 1, 0.7],
                }}>+
              </motion.span> 
              </motion.button>
            
          </motion.div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: selectedQuestionIndex === index ? "auto" : 0,
              opacity: selectedQuestionIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <p className="text-lg font-light px-5"><WordPopping leading="mb-0" phrase={item[1]} /></p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default FAndQWhat;
