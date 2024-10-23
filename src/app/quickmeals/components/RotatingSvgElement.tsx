import React from "react";
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { container } from '../animation'
 

const RotatingSvg: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const moveY = useTransform(scrollYProgress, [0, 1], [10, 90]);
    const nagativeMoveY = useTransform(scrollYProgress, [0, 1], [10, -70]);
    const MoveY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
        <motion.div variants={container} initial="initial" whileInView="visible" className="flex flex-row gap-5"  >
            <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="15.5" x2="15.5" y2="32" stroke="#FBFEE1" stroke-width="5"/>
              <line y1="15.5" x2="32" y2="15.5" stroke="#FBFEE1" stroke-width="5"/>
              <line x1="4.10759" y1="5.28474" x2="27.2005" y2="27.4369" stroke="#FBFEE1" stroke-width="5"/>
              <line x1="4.56306" y1="27.2" x2="26.7153" y2="4.10716" stroke="#FBFEE1" stroke-width="5"/>
            </motion.svg>
            <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="15.5" x2="15.5" y2="32" stroke="#F79E1C" stroke-width="5"/>
              <line y1="15.5" x2="32" y2="15.5" stroke="#F79E1C" stroke-width="5"/>
              <line x1="4.10759" y1="5.28474" x2="27.2005" y2="27.4369" stroke="#F79E1C" stroke-width="5"/>
              <line x1="4.56306" y1="27.2" x2="26.7153" y2="4.10716" stroke="#F79E1C" stroke-width="5"/>
            </motion.svg>
        </motion.div>
  );
};

export default RotatingSvg;
