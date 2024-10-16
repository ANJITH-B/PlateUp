import React, { useState } from "react";
import { motion } from "framer-motion";
import WordPopping from "./WordPopping";


const FQA: [string, string][] = [
  [
    "Where can I spend my Plateup coins?",
    "You can redeem them at a variety of convenient locations such as Plateup partner corporates or vibrant Plateup food hubs.",
  ],
  [
    "What options do I have if I miss out on my corporate food?",
    "No worries! You can always enjoy a delicious meal at any Plateup food hub near you.",
  ],
  [
    "Who determines the amount of my allowance?",
    "Your allowance is set by your corporate, ensuring it meets your needs and preferences.",
  ],
  [
    "How long do I have to use my allowance?",
    "Your allowance is valid for 30 days, giving you plenty of time to savor your favorite meals.",
  ],
  [
    "Am I allowed to utilize my allowance on corporate off-days?",
    "Absolutely! You have the flexibility to use your allowance whenever it suits you, including corporate off-days.",
  ],
  [
    "Can I treat my family to lunch with my allowance?",
    "Yes, indeed! Your Plateup coins can be used to indulge in a delightful family lunch experience.",
  ],
  [
    "Are there specific eateries I must visit to redeem my coins?",
    "You have the freedom to choose from a diverse range of food at Plateup hubs, ensuring a satisfying culinary experience.",
  ],
  [
    "What happens if I don't utilize my allowance within the specified timeframe?",
    "Unfortunately, your allowance will expire after 30 days, so be sure to enjoy it while it lasts!",
  ],
  [
    "Can I save up my allowance for a special occasion?",
    "While your allowance is valid for 30 days, you're welcome to save it for a special dining experience or treat yourself to multiple meals throughout the month.",
  ],
  [
    "Is there a limit to how much I can spend in one go?",
    "There's no limit to your enjoyment! Feel free to indulge and spend your allowance as you please, whether it's on a hearty meal for one or a feast for the whole family.",
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
       className="h-full w-full bg-[#FBF1D3] bg-opacity-45 rounded-3xl p-5">
      {FQA.map((item, index) => (
        <div key={index}>
          <motion.div className="flex flex-row justify-between py-3 items-center">
            <p className="text-xl font-light "><WordPopping phrase={item[0]}/></p>
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
            <p className="text-lg font-light px-5"><WordPopping phrase={item[1]} /></p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default FAndQWhat;
