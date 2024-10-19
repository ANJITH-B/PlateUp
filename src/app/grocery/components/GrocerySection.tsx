import React from 'react';
import Image from "next/image";
import CARD from "../assets/Card.png";
import Phone from "../assets/phone.png";
import Chili from "../assets/chili.png";
import Grocery from "../assets/GROCERY.png";
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { container } from '../animation'


const GrocerySection: React.FC = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const scaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const card = useTransform(scrollYProgress,[ 0, 1],[0,-200]);
    const chilli = useTransform(scrollYProgress,[ 0, 1],[0,400]);
    const phone = useTransform(scrollYProgress,[ 0, 1],[120,140]);
    const grocery = useTransform(scrollYProgress,[ 0, 1],[30,80]);

  return (
    <motion.div variants={container} whileInView='visible' initial='initial' className='w-full h-full overflow-hidden relative flex flex-row justify-center items-center rounded-3xl bg-[#212121]'>
      <motion.div style={{ y:grocery, scale:scaleDown }} className="absolute z-20">
        <Image src={Grocery} alt="text" width={550} height={550} />
      </motion.div>
      <motion.div style={{ y:card ,scale }} className="absolute pl-20 md:pl-0 pr-0 md:pr-[40vw] pb-60 md:pb-56 z-20">
        <Image src={CARD} alt="card" width={400} height={400} />
      </motion.div>
      <motion.div style={{ y:chilli , scale }} className="absolute md:pr-[vw] md:pb-14 z-20">
        <Image src={Chili} alt="chili" width={100} height={100} />
      </motion.div>
      <motion.div style={{ y:phone, scale , rotate:15}} className="absolute pl-0 pr-20 md:pl-80 pt-20 md:pt-36 ">
        <Image src={Phone} alt="phone" width={400} height={400} />
      </motion.div>
    </motion.div>
  );
};

export default GrocerySection;





    














{/* <motion.p style={{ y:phone, scale:scaleDown }}  variants={container} whileInView='visible' initial='hidden' className="font-black text-[100px] text-[#FBFEE1] z-10">GROCERY</motion.p> */}
