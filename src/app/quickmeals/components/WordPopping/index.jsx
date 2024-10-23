import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export default function Index({phrase}) {
  
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className="flex justify-center">
      <div className="max-w-screen-xl flex gap-12 relative">
        <p className=" m-0">
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className="relative inline-flex  overflow-hidden mr-2">
                <motion.span variants={slideUp}  custom={index} animate={isInView ? "open" : "closed"} key={index} >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        {/* <motion.p className="text-lg font-light w-4/5 m-0" variants={opacity} animate={isInView ? "open" : "closed"}>
          free from worries about payments or stress. With just a tap, indulge in a variety of cuisines at various styles of restaurants, all without fretting about the payments
        </motion.p> */}
        {/* <div data-scroll data-scroll-speed={3}>
          
          <div className="absolute top-4/5 left-[calc(100%-200px)] w-44 h-44 bg-gray-900 text-white rounded-full flex items-center justify-center cursor-pointer">
            <p className="m-0 text-lg font-light relative z-10">About me</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
