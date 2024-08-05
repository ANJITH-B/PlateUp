import React, { useState } from "react";
import { motion } from "framer-motion";
import WordPopping from "./WordPopping";

const FQA: [string, string][] = [
  [
    "Where can I redeem my allowance for dining in restaurants?",
    "You can redeem your allowance at restaurants partnered with Plateup",
  ],
  [
    "How do I locate restaurants?",
    "You can find these restaurants on the Plateup webpage or the Plateup app.",
  ],
  [
    "Is there any specific food I can order and redeem my allowance?",
    "We offer you complete access to use your coins for a dining experience at the restaurant, eliminating any concerns about payment",
  ],
  [
    "After the redemption of my allowance, do I still need to pay for my meal?",
    `No, you don't need to pay. It is already redeemed via your Plateup allowance card or the app.`,
  ],
];

const FAndQWhat = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedQuestionIndex(selectedQuestionIndex === index ? null : index);
  };

  return (
    <div className="md:w-4/6 bg-[#4C5A5D] rounded-3xl p-5">
      {FQA.map((item, index) => (
        <div key={index}>
          <motion.div className="flex flex-row justify-between py-3 items-center">
            <p className="text-xl font-light ">{item[0]}</p>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{
                rotate: selectedQuestionIndex === index ? 45 : 0,
              }}
            >
              <button
                onClick={() => handleClick(index)}
                className="px-4 pb-1 text-2xl rounded-full h-11 bg-black text-white"
              >
                +
              </button>
            </motion.div>
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
            <div className="text-lg font-light px-5">
              <WordPopping phrase={item[1]} />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FAndQWhat;
