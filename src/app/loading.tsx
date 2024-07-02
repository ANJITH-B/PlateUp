'use client'
import React from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";


const normal = {
  animate: {
    x: [0,-1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};
const slow = {
  animate: {
    x: [0,-705],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const loading = () => {
  const count = useMotionValue(0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    const number = useTransform(count, Math.round);

    React.useEffect(() => {
        const animation = animate(count, 100, { duration: 0.5 });
    }, []);

  return (
    // <div className="flex items-center justify-center w-full h-[100vh] bg-black">
    //   <span className="loader">hi</span>
    // </div>
    <>

    <motion.div className=" absolute z-10 items-center my-[39vh] mx-[39vw]">
    <div className="flex flex-row">
  <motion.h1 className=' text-black dark:text-white font-bold text-6xl '>{number}</motion.h1>
    <h1 className="text-6xl font-bold">%</h1>
    </div>
  <motion.div className="bg-gray-500 w-80 h-20" >
  <motion.div
  className="bg-white h-20"
  style={{ width: '1rem' }} // Initial width
  animate={{ width: '20rem' }} // Target width
  transition={{ duration: 0.5 }} // Duration of the animation
  >
</motion.div>
  </motion.div>
  </motion.div>

   <div className="marquee">
    <motion.div className="track" variants={normal} animate="animate" >
      <h1>
      Transform the way you eat by reimagining, reinventing, and redefining your culinary experience.
      </h1>
    </motion.div>
  </div>
   <div className="marquee">
    <motion.div className="track" variants={slow} animate="animate">
      <h1>
      Transform the way you eat by reimagining, reinventing, and redefining your culinary experience.
      </h1>
    </motion.div>
  </div>
   <div className="marquee">
    <motion.div className="track" variants={normal} animate="animate">
      <h1>
      Transform the way you eat by reimagining, reinventing, and redefining your culinary experience.
      </h1>
    </motion.div>
  </div>
   <div className="marquee">
    <motion.div className="track" variants={slow} animate="animate">
      <h1>
      Transform the way you eat by reimagining, reinventing, and redefining your culinary experience.
      </h1>
    </motion.div>
  </div>
  </>
  );
};

export default loading;
