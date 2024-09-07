import React from "react";
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import MirrorOne from '../assets/images/mirror (2).png';
import MirrorTwo from '../assets/images/mirror.png';
import { container } from '../animation'
 

const MirrorCard: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
    const moveX = useTransform(scrollYProgress, [0, 1], [0, 50]);


  return (
        <motion.div variants={container} initial="initial" whileInView="visible" className="flex flex-row w-full gap-4">
            <motion.div  variants={container} initial="initial" whileInView="visible" className="w-full h-80 rounded-2xl bg-[#323232] relative overflow-hidden">
                <motion.div style={{ scale: scale }}  className="w-full h-full flex items-center justify-end absolute">
                  <Image src={MirrorTwo} alt='...'  className='w-[100px] '/>
                </motion.div>
              </motion.div>
              <motion.div variants={container} initial="initial" whileInView="visible" className="w-full h-80 rounded-2xl bg-white relative overflow-hidden">
                <motion.div style={{ scale: scale, x:moveX }}  className="w-full h-full flex items-center justify-start absolute">
                  <Image src={MirrorOne} alt='...'  className='w-[100px] '/>
                </motion.div>
              </motion.div>
        </motion.div>
  );
};

export default MirrorCard;
