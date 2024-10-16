import React from "react";
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import MirrorThree from '../assets/images/Component 10.png';
import Image from 'next/image';
import WordPopping from './WordPopping'
import { container } from '../animation'
 

const RestaurantCount: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const top = useTransform(scrollYProgress, [0, 1], [1, 2]);


  return ( 
    <motion.div variants={container} initial="initial" whileInView="visible" className="bg-[#F1CF88] w-[60vw] md:w-80 md:h-60 flex flex-col items-start  rounded-3xl relative">
        <motion.div style={{ scale: top ,}} initial={{x:-40}} className="w-full h-full flex items-center justify-start absolute">
            <Image src={MirrorThree} alt='...'  className='w-[100px] '/>
        </motion.div> 
        <p className="pt-3 my-auto text-lg md:text-xl font-bold text-black pl-5 md:leading-5">
            <WordPopping phrase="300+" />
        </p>
        <p className="pt-3 my-auto text-sm md:text-lg font-bold text-black pl-5 md:leading-5">
            <WordPopping phrase="Restaurants" />
        </p>
        <p className="pt-3 my-auto text-sm md:text-lg font-light text-black p-5 md:leading-5">
            <WordPopping phrase="availability both online and in-store, serving Mumbai, Pune, Bangalore, Gurgaon, " />
        </p>
    </motion.div>     
  );
};

export default RestaurantCount;
