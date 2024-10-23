import React from "react";
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'
import Papper from '../assets/images/paper.jpg';
import F1 from '../assets/images/F1.png';
import F2 from '../assets/images/F2.png'; 
import { container } from '../animation'
import { useMediaQuery } from "react-responsive";
 

const SatisfyCard: React.FC = () => {
    const sm = useMediaQuery({ maxWidth: 768 });
    const { scrollYProgress } = useViewportScroll();
    const moveY = useTransform(scrollYProgress, [0, 1], [10, 90]);
    const nagativeMoveY = useTransform(scrollYProgress, [0, 1], [10, -70]);
    const MoveY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    
  return (
        <motion.div variants={container} initial="initial" whileInView="visible" className="mt-10 bg-gray-500 rounded-3xl w-[65vw] h-[65vw] md:w-80 md:h-80 overflow-hidden relative ">
            <motion.div initial={{ x: 0 }} style={{ y: MoveY }} className="absolute z-10 ">
                <Image src={Papper} alt="..." width={400} height={400} className="w-full h-[50vh] opacity-50" />
            </motion.div>
            <div className="absolute z-20">
              <p className="pt-5 text-orange-600 text-center leading-6 font-serif font-semibold text-2xl"> Satisfying <br />
                <span className="text-gray-800 text-medium font-normal"> all your taste buds </span>{" "}
              </p>
              <div className="flex flex-row gap-0 ">
                <motion.div initial={{ x: (sm? 20 : 30) }} style={{ y: nagativeMoveY }}>
                  <Image  src={F1} alt="..." width={400} height={400} className="w-38 rotate-180 z-10"/>
                </motion.div>
                <motion.div initial={{ x: (sm? -20 : -30) }} style={{ y: moveY }}>
                  <Image src={F2} alt="..." width={400} height={400} className="w-38 rotate-180 z-20" />
                </motion.div>
              </div>
            </div>
        </motion.div>
  );
};

export default SatisfyCard;
