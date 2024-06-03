"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import '@/app/fonts.css';
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
const [scope, animate] = useAnimate();
const isInView = useInView(scope)
let wordsArray = words.split(" ");
useEffect(() => {
    if(isInView){
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.1),
            }
        );
    }
}, [scope.current, isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-white opacity-0 font-primary"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("text-start lg:text-xl px-5 font-primary font-medium container mx-auto py-5 text-white", className)}>
      <div className="mt-4">
        <div className=" text-white text-base lg:text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
