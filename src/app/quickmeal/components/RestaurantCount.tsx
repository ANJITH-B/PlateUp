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
    <motion.div variants={container} initial="initial" whileInView="visible" className="bg-[#F1CF88] w-[60vw] md:w-80 md:h-40  rounded-3xl relative">
        <motion.div style={{ scale: top ,}} initial={{x:-40}} className="w-full h-full flex items-center justify-start absolute">
            <Image src={MirrorThree} alt='...'  className='w-[100px] '/>
        </motion.div> 
        <p className="pt-3 my-auto text-sm md:text-lg font-light text-[#FBFEE1] p-5 md:leading-7">
            <WordPopping phrase="Our platform brings a world of flavors right to your workplace, ensuring that every meal is a delicious adventure for your taste buds" />
        </p>
    </motion.div>     
  );
};

export default RestaurantCount;
